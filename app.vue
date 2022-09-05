<template>
	<div
		class="h-screen bg-gray-500 max-w-max mx-auto flex flex-col justify-center items-center"
	>
		<TheNavBar />
		<TheDisplay :pressedKey="pressedKey" />
		<TheBody @display:model-value="received" />
	</div>
</template>
<script setup>
	const pressedKey = ref(0);
	const received = (s) => {
		pressedKey.value = s;
	};
</script>
