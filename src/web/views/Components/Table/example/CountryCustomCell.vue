<template>
  <div class="country-custom-cell">
    <img :src="image" />
  </div>
</template>

<script>
import flagAustria from "./country-flags/austria.png";
import flagFrance from "./country-flags/france.png";
import flagGermany from "./country-flags/germany.png";
import flagItaly from "./country-flags/italy.png";
import flagRussia from "./country-flags/russia.png";

const flags = {
  austria: flagAustria,
  france: flagFrance,
  germany: flagGermany,
  italy: flagItaly,
  russia: flagRussia,
};

export default {
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      image: null,
    };
  },
  created() {
    this.image = flags[this.$props.country.toLowerCase()];
  },
};
</script>

<style scoped lang="scss">
.country-custom-cell {
  img {
    width: 36px;
    height: 36px;
  }
}
</style>
