<template>
  <BIMDataCard class="color-selector">
    <template #content>
      <div
        class="color-selector__line"
        v-for="(colorLine, i) of colorLines"
        :key="`colorLine${i}`"
      >
        <div
          class="color-selector__line__element"
          v-for="([colorName, colorValue], j) of colorLine"
          :class="{ selected: colorValue === modelValue }"
          :key="`colorElement${j}ofColorLine${i}`"
          :style="`background-color: #${colorValue}`"
          :title="colorName"
          @click.stop="$emit('update:modelValue', colorValue)"
        ></div>
      </div>
    </template>
  </BIMDataCard>
</template>

<script>
import { colors } from "./colors.js";
import BIMDataCard from "../BIMDataCard/BIMDataCard.vue";

const colorLines = Object.entries(colors).reduce((acc, cur, i) => {
  if (i % 5 === 0) {
    acc.push([cur]);
  } else {
    acc[acc.length - 1].push(cur);
  }
  return acc;
}, []);

export default {
  components: {
    BIMDataCard,
  },
  props: {
    modelValue: {
      type: String,
      default: null,
      validator: value => Object.values(colors).includes(value),
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      colorLines,
    };
  },
};
</script>

<style scoped src="./BIMDataColorSelector.css"></style>
