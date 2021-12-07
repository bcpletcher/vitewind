export default {
	methods: {
		helpers() {
			const thing = (arg) => {
				console.log(arg);
				return 'test';
			}

			return {
				thing
			}
		}

	}

}
