import { createStore } from "vuex";
import { main } from "./main";

export const store = createStore({
	modules: {
		mainModule: main,
	},
});
