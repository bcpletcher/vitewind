// initial state
const state = {
	isSignedIn: false,
};

// getters
const getters = {
};

// actions
const actions = {
	updateIsSignedIn({ commit }, data: any) {
		commit('setStateValue', { key: 'isSignedIn', value: data });
	},
};

// mutations
const mutations = {
	setStateValue(state: any, payload: any) {
		state[payload.key] = payload.value;
	},
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
};
