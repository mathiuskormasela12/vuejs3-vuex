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

<script>
import { store } from "./vuex/store";

export default {
	name: "App",
	computed: {
		loading() {
			return store.state.loading;
		},
		data() {
			return store.state.data;
		},
		singleData() {
			return store.getters.singleData;
		},
	},
	methods: {
		getAllDataAction() {
			store.dispatch("getAllDataAction");
		},
	},
	mounted() {
		this.getAllDataAction();
	},
};
</script>
