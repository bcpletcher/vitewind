export default {
	methods: {
		helpers() {
			return {
				thing(arg) {
					return new Promise(resolve => {
						console.log(arg);
						resolve('I am a promise');
					})
				},
				otherThing(arg) {
					console.log('im not a promise')
				},
				finalThing(arg) {
					console.log('this is just short hand object syntax for methods/functions')
				}
			}
		}
	}
}
// export default {
// 	mixins: [helpers],
// 	methods: {
// 		async doThingAndThenSomethingElse() {
// 			let response = await this.helpers.thing("Hi, my name is Thing. I'm a promise, and I live inside helpers.");
// 			console.log(response);
// 		}
// }
