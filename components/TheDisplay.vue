<template>
	<div class="w-full p-6 bg-screen-bg mt-4 rounded-xl">
		<h1 class="text-end text-3xl text-primary-text font-bold">
			{{ pressedKey || display }}
		</h1>
	</div>
</template>
<script lang="ts" setup>
	const display = ref(0);
	defineProps<{
		pressedKey: {
			type: String;
			required: true;
		};
	}>();
</script>
