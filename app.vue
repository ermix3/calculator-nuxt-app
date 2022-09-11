<template>
  <div class="min-h-screen bg-main-bg grid grid-center">
    <div class="max-w-max mx-auto flex flex-col justify-center items-center">
      <TheNavBar />

      <main>
        <TheDisplay :pressedKey="pressedKey" />
        <TheBody @display:model-value="keyEmit" />
      </main>
    </div>
  </div>
</template>
<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "FrontendMentor: Calculator App",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  charset: "utf-8",
  meta: [{ name: "description", content: "A multithemed calculator app" }],
});

const pressedKey = ref("");
const keyEmit = (e: Event) => {
  const targetValue = (e.target as HTMLButtonElement).value;
  pressedKey.value = pressedKey.value.replaceAll("x", "*");
  switch (targetValue) {
    case "DEL":
      pressedKey.value = pressedKey.value.slice(0, -1);
      break;
    case "Reset":
      pressedKey.value = "";
      break;
    case "Enter":
      if (
        pressedKey.value.endsWith("*") ||
        pressedKey.value.endsWith("+") ||
        pressedKey.value.endsWith("-") ||
        pressedKey.value.endsWith("/") ||
        pressedKey.value.endsWith(".")
      ) {
        break;
      }
      pressedKey.value = eval(
        /^0+\D/.test(pressedKey.value)
          ? pressedKey.value.replace(/^0+/, "0")
          : pressedKey.value.replace(/^0+/, "")
      ).toString();
      break;
    case "+":
    case "-":
    case "/":
    case "x":
    case ".":
      const lastChar = pressedKey.value.slice(-1);
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "/" ||
        lastChar === "*" ||
        lastChar === "."
      ) {
        pressedKey.value = pressedKey.value.slice(0, -1) + targetValue;
      } else {
        pressedKey.value += targetValue;
      }
      break;
    default:
      pressedKey.value += targetValue;
      break;
  }
};
</script>
