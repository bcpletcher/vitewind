<template>
	<transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
		<div v-if="visible" class="max-w-sm w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg pointer-events-auto overflow-hidden">
			<div class="p-4">
				<div class="flex items-start">
					<div class="flex-shrink-0">
						<icon class="h-6 w-6" :class="style.color" :icon="style.icon" size="lg"/>
					</div>
					<div class="ml-3 w-0 flex-1 pt-0.5">
						<p class="text-sm font-medium text-primary">{{this.params.title}}</p>
						<p class="mt-1 text-sm text-gray-500 dark:text-gray-300">{{this.params.message}}</p>
					</div>
					<div class="ml-4 flex-shrink-0 flex">
						<button @click="closeNotify()" class="bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none">
							<span class="sr-only">Close</span>
							<icon icon="times" size="lg"/>
						</button>
					</div>
				</div>
			</div>
			<div class="relative pt-1">
				<div class="overflow-hidden h-2 text-xs flex" :class="style.bar">
					<div id="progressBar" ref="progressBar" class="w-full shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center" :class="[style.progress, animating ? 'animating': '']"/>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import Services from "./../mixins/services.js";

export default {
	name: 'Notify',
	mixins: [Services],
	props: [],
	data: function () {
		return {
			params: {},
			visible: false,
			animating: false,
			progress: 0,
			timer: null
		};
	},

	computed: {
		style () {
			if (this.params.variant === 'success') {
				return {
					icon: 'check-circle',
					color: 'text-green-400',
					bar: 'bg-green-200',
					progress: 'bg-green-500',
				};
			} else if (this.params.variant === 'danger') {
				return {
					icon: 'times-circle',
					color: 'text-red-400',
					bar: 'bg-red-200',
					progress: 'bg-red-500',
				};
			} else {
				return {
					icon: 'exclamation-circle',
					color: 'text-primary',
					bar: 'bg-blue-200',
					progress: 'bg-blue-500',
				};
			}
		}
	},
	methods: {
		closeNotify() {
			this.visible = false;
			setTimeout(() => {
				this.animating = false;
			}, 500)
		},
		async showNotification(e) {
			this.params = e;

			this.visible = true;

			await this.$nextTick();
			let startWidth = `${this.$refs.progressBar.offsetWidth}px`;
			this.animating = true;
			await this.$nextTick();
			let endWidth = `${this.$refs.progressBar.offsetWidth}px`;

			let animation = this.$refs.progressBar.animate([
				{width: startWidth},
				{width: endWidth}
			], {
				duration: 5000,
				easing: 'linear'
			})

			animation.onfinish = () => {
				this.visible = false;
				setTimeout(() => {
					this.animating = false;
				}, 500)
			}

		},
	},
	mounted() {
		this.emitter.on('show-notify', (e) => {
			this.showNotification(e)
		})
	},
}
</script>

<style lang="scss" scoped>

#progressBar {
	width: 100%;

	&.animating {
		width: 0;
	}
}

</style>
