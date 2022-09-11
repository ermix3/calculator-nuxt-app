<template>
  <header class="container flex justify-between items-end">
    <h1 class="text-primary-text text-3xl font-bold">calc</h1>
    <div class="flex items-end gap-4">
      <h2 class="text-sm text-primary-text font-bold">THEME</h2>

      <div class="flex flex-col justify-center">
        <p class="self-center text-primary-text hover:cursor-pointer">
          <span>1</span>
          <span class="mx-4">2</span>
          <span>3</span>
        </p>
        <div
          class="relative rounded-full bg-toggle-bg"
          style="width: 71px; height: 24px"
        >
          <svg
            width="71"
            height="16"
            viewBox="0 0 16 16"
            id="button"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
            @click="toggleTheme()"
            aria-labelledby="toggleBtn"
            role="button"
            tabindex="0"
          >
            <title id="toggleBtn">The toggle button</title>

            <circle
              :cx="cx"
              cy="8"
              r="8"
              class="fill-toggle-equal-key ease-in-out duration-300"
            />
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup>
let cx = ref(-16);
const toggleTheme = () => {
  if (cx.value === -16) {
    cx.value = 8;
    document.documentElement.classList.add("epic");

    return;
  }
  if (cx.value === 8) {
    cx.value = 30;

    document.documentElement.classList.add("nitro");
    document.documentElement.classList.remove("epic");
    return;
  }
  if (cx.value === 30) {
    cx.value = -16;

    document.documentElement.classList.remove("nitro");
  }
};
</script>
