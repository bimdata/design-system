<template>
  <div class="country-custom-cell">
    <img :src="image" />
  </div>
</template>

<script>
const flags = {
  austria: require("./country-flags/austria.png"),
  france: require("./country-flags/france.png"),
  germany: require("./country-flags/germany.png"),
  italy: require("./country-flags/italy.png"),
  russia: require("./country-flags/russia.png"),
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
