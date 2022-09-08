<template>
	<div class="h-screen bg-main-bg grid grid-center">
		<div class="max-w-max mx-auto flex flex-col justify-center items-center">
			<TheNavBar />
			<TheDisplay :pressedKey="pressedKey" />
			<TheBody @display:model-value="keyEmit" />
		</div>
	</div>
</template>
<script lang="ts" setup>
	const pressedKey = ref("");
	const keyEmit = (key: String) => {
		if (key === "DEL") {
			pressedKey.value = pressedKey.value.slice(0, -1);
			console.log("trimming: ", pressedKey.value);
			return;
		}
		if (key === "Enter") {
			validExpression(pressedKey.value)
				? (pressedKey.value = eval(pressedKey.value))
				: alert("must be  a valid maths expression");
			return;
		}

		if (key === "Reset") {
			pressedKey.value = "";
			return;
		}
		pressedKey.value += key;
	};

	function validExpression(validExpression) {
		return false;
	}
</script>
