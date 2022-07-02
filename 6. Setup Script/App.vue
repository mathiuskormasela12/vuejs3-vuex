<template>
	<div>
		<h1>Action</h1>
		<p v-if="loading">Loading...</p>
		<ul v-else>
			<li v-for="item in data" :key="item.id">
				{{ item.name }}
			</li>
		</ul>
		<p v-if="loading">Loading...</p>
		<p v-else-if="!loading && singleData && singleData.name">
			{{ singleData.name }}
		</p>
	</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { store } from "./vuex/index";

// Defined Props
defineProps({
	data: {
		type: String,
		default: "",
	},
});

// Defuned Emits
defineEmits(["test"]);

const loading = computed(() => store.state.mainModule.loading);
const data = computed(() => store.state.mainModule.data);
const singleData = computed(() => store.getters["mainModule/singleData"]);

const getAllData = () => {
	store.dispatch("mainModule/getAllDataAction");
};

onMounted(() => {
	getAllData();
});

// // export default {
// // 	name: "App",
// // 	computed: {
// // 		...mapState({
// // 			loading: (state) => state.mainModule.loading,
// // 			data: (state) => state.mainModule.data,
// // 		}),
// // 		...mapGetters({
// // 			singleData: "mainModule/singleData",
// // 		}),
// // 	},
// // 	methods: {
// // 		...mapActions({
// // 			getAllDataAction: "mainModule/getAllDataAction",
// // 		}),
// // 		...mapMutations({
// // 			setLoading: "mainModule/setLoading",
// // 			getAllData: "mainModule/getAllData",
// // 		}),
// // 	},
// // 	mounted() {
// // 		this.getAllDataAction();
// // 	},
// };
</script>
