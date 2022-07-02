export const main = {
	namespaced: true,
	state() {
		return {
			data: [],
			loading: false,
		};
	},
	getters: {
		singleData(state) {
			return state.data[0];
		},
	},
	mutations: {
		getAllData(state, payload) {
			state.data = payload;
		},
		setLoading(state, loading) {
			state.loading = loading;
		},
	},
	actions: {
		async getAllDataAction({ commit }) {
			commit("setLoading", true);
			try {
				let res = await fetch("https://rickandmortyapi.com/api/character");
				res = await res.json();
				commit("getAllData", res.results);
				commit("setLoading", false);
			} catch (err) {
				console.log(err);
				commit("getAllData", []);
				commit("setLoading", false);
			}
		},
	},
};
