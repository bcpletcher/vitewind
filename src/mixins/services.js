export default {
	methods: {
		testService() {
			console.log('testService');
		},
		notify(variant, title, message, duration = 5) {
			this.emitter.emit('show-notify', {variant: variant, title: title, message: message, duration: duration})
		}
	}
}
