<template>
	<div class="container flex justify-between items-end">
		<h1 class="text-white bg-yellow-500 text-3xl font-bold">calc</h1>
		<div class="flex items-end gap-6">
			<h2 class="text-sm font-bold">THEME</h2>
			<div class="flex flex-col justify-center">
				<p class="self-center hover:cursor-pointer" @click="toggleTheme()">
					<span>1</span>
					<span class="mx-4">2</span>
					<span>3</span>
				</p>
				<div
					class="relative rounded-full"
					style="width: 71px; height: 24px; background-color: #242d44"
				>
					<svg
						width="71"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
						@click="toggleTheme()"
					>
						<circle :cx="cx" cy="8" r="8" fill="#D03F2F" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
	let cx = ref(-16);
	const toggleTheme = () => {
		if (cx.value === -16) {
			cx.value = 8;
			return;
		}
		if (cx.value === 8) {
			cx.value = 30;
			return;
		}
		if (cx.value === 30) {
			cx.value = -16;
		}
	};
</script>
