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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
	name: "App",
	setup() {
		const store = useStore();
		const loading = computed(() => store.state.loading);
		const data = computed(() => store.state.data);
		const singleData = computed(() => store.getters.singleData);

		onMounted(() => {
			store.dispatch("getAllDataAction");
		});

		return {
			loading,
			data,
			singleData,
		};
	},
};
</script>
