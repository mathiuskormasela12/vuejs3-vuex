import { createStore } from "vuex";

export const store = createStore({
	state() {
		return {
			likes: 0,
		};
	},
	mutations: {
		increment(state) {
			state.likes++;
		},
		setState(state, value) {
			state.likes = value;
		},
	},
});
