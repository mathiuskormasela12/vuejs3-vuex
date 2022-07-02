<template>
	<div>
		<h1>State & Mutations</h1>
		<button type="button" @click="handleLike">Like {{ likes }}</button>
		<button type="button" @click="handleReset">Reset</button>
	</div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
	name: "App",

	setup() {
		const store = useStore();

		const likes = computed(() => store.state.likes);

		const handleLike = () => {
			store.commit("increment");
		};

		const handleReset = () => {
			store.commit("setState", 0);
		};

		return {
			likes,
			handleLike,
			handleReset,
		};
	},
};
</script>
