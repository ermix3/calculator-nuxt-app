<template>
	<div class="h-screen bg-main-bg grid grid-center">
		<div class="max-w-max mx-auto flex flex-col justify-center items-center">
			<TheNavBar />
			<TheDisplay :pressedKey="pressedKey" />
			<TheBody @display:model-value="received" />
		</div>
	</div>
</template>
<script setup>
	const pressedKey = ref(0);
	const received = (s) => {
		pressedKey.value = s;
	};
</script>
