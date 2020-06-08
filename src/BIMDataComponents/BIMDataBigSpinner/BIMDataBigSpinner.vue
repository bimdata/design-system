<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    baseProfile="tiny"
  >
    <!-- blocs LOGO JAUNE -->
    <g id="draw-yellow-1" :class="{ 'animate-draw': animate }">
      <polygon
        class="st2"
        points="13.38,28.8 13.38,58.69 18.85,55.2 18.85,55.2 18.85,32.57 18.85,31.8 51,11.29 51,32.57 51,34.69 
      51,34.69 56.47,31.2 56.47,1.3 "
      />
    </g>
    <g id="draw-yellow-2" :class="{ 'animate-draw': animate }">
      <polygon
        class="st1"
        points="56.47,31.2 56.47,37.7 77.34,24.38 77.34,138.36 35.39,138.36 35.39,128.96 29.92,128.96 29.92,143.83 
      82.82,143.83 82.82,14.39 "
      />
    </g>
    <!-- bloc LOGO BLEU -->
    <g id="draw-blue" :class="{ 'animate-draw': animate }">
      <path
        class="st0"
        d="M4.45,64.39v64.57h52.03V31.2L4.45,64.39z M51,123.48H9.92V67.39L51,41.19V123.48z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    animate: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss">
@import "./_keyframes.scss";
@import "./_BIMDataBigSpinner.scss";
</style>
