<template>
	<div class="h-screen w-screen bg-gray-950 overflow-hidden">
		<p>Test</p>
		<!-- Global notification live region, render this permanently at the end of the document -->
		<div aria-live="assertive" class="fixed inset-0 flex items-end justify-center p-4 pointer-events-none sm:justify-end z-50">
			<notify/>
		</div>
	</div>
</template>
<script>
	import { mapActions, mapState } from 'vuex';
	import Services from "./mixins/services.js";
	import Helpers from "./helpers/helpers"

	export default {
		name: 'App',
		mixins: [Services],
		components: {
		},
		data: function () {
			return {
				loading: false,
				observer: null,
				myHelpers: {
					something() {
						console.log(this);
					}
				}
			};
		},
		computed: {
			...mapState({
				isSignedIn: state => state.SampleModule.isSignedIn,
			})
		},
		methods: {
			...mapActions('SampleModule', {updateIsSignedIn: 'updateIsSignedIn'}),
			runEmitter() {
				this.emitter.emit('test-emitter', {title: 'Hello', display: 'World'})
			}
		},
		mounted() {
			setTimeout(() => {
				this.emitter.emit('show-notify', {variant: 'success', title: 'Validation', message: 'Username taken'})
			}, 1000)
		},
		created() {
			this.emitter.on('test-emitter', (e) => {
				console.log(e);
			})
			this.helpers().thing('cats');
			this.testService();
		}
	};
</script>
<style>

</style>
