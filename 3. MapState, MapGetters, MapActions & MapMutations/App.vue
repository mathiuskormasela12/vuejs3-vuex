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
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
	name: "App",
	computed: {
		...mapState(["loading", "data"]),
		...mapGetters(["singleData"]),
	},
	methods: {
		...mapActions(["getAllDataAction"]),
		...mapMutations(["getAllData", "setLoading"]),
	},
	mounted() {
		this.getAllDataAction();
	},
};
</script>
