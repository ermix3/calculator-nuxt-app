<template>
	<div class="bg-toggle-bg grid grid-cols-4 gap-4 p-4 mt-4 rounded-xl">
		<button
			:value="key"
			@click="
				$emit('display:modelValue', $event)
			"
			v-for="key in numbers"
			:key="key"
			class="border-b-4 border-key-shadow w-24 py-3 rounded-xl bg-key-bg text-sec-text text-3xl font-bold"
			:class="[
				key === 'DEL'
					? 'bg-key2-bg border-key2-shadow text-accent-text'
					: 'bg-key-bg',
			]"
		>
			{{ key }}
		</button>
		<button
			value="Reset"
			class="border-b-4 border-key2-shadow bg-key2-bg col-span-2 py-3 rounded-xl text-3xl text-accent-text font-bold"
			@click="
				$emit('display:modelValue', $event)
			"
		>
			Reset
		</button>
		<button
			class="border-b-4 border-equal-key-shadow bg-toggle-equal-key col-span-2 py-3 rounded-xl text-eq-text text-3xl font-bold"
			value="Enter"
			@click="
				$emit('display:modelValue', $event)
			"
		>
			=
		</button>
	</div>
</template>
<script lang="ts" setup>
	let numbers = [
		"7",
		"8",
		"9",
		"DEL",
		"4",
		"5",
		"6",
		"+",
		"1",
		"2",
		"3",
		"-",
		".",
		"0",
		"/",
		"x",
	];
	const emit = defineEmits<{
		// (e: 'change', id: number): void
		(e: "display:modelValue", value: Event): void;
	}>();
</script>
