<template>
	<i class="flex flex-col justify-center leading-none" :class="`text-${size} ${weight} fa-${icon}`"></i>
</template>

<script lang="ts">
export default {
	name: 'Icon',
	props: {
		icon: String,
		weight: {
			default() {
				return 'far'
			}
		},
		size: {
			default() {
				return 'base'
			}
		}
	}
}
</script>
