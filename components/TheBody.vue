<template>
	<div class="grid grid-cols-4 gap-4 border p-4 mt-4 rounded-xl">
		<button
			:value="key"
			@click="
				$emit('display:modelValue', ($event.target as HTMLButtonElement).value)
			"
			v-for="key in numbers"
			:key="key"
			class="border w-24 py-6 rounded-xl text-3xl font-bold"
		>
			{{ key }}
		</button>
		<button class="col-span-2 border py-6 rounded-xl text-3xl font-bold">
			Reset
		</button>
		<button class="col-span-2 border py-6 rounded-xl text-3xl font-bold">
			=
		</button>
	</div>
</template>
<script lang="ts" setup>
	let numbers = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x"];
	const emit = defineEmits<{
		// (e: 'change', id: number): void
		(e: "display:modelValue", value: string): void;
	}>();
</script>
