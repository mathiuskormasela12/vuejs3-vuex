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
import { mapActions, mapGetters, mapState, mapMutations } from "vuex";

export default {
	name: "App",
	computed: {
		...mapState({
			loading: (state) => state.mainModule.loading,
			data: (state) => state.mainModule.data,
		}),
		...mapGetters({
			singleData: "mainModule/singleData",
		}),
	},
	methods: {
		...mapActions({
			getAllDataAction: "mainModule/getAllDataAction",
		}),
		...mapMutations({
			setLoading: "mainModule/setLoading",
			getAllData: "mainModule/getAllData",
		}),
	},
	mounted() {
		this.getAllDataAction();
	},
};
</script>
