<template>
  <main class="article autocomplete-search">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        {{ $route.name }}
      </BIMDataText>

      <BIMDataSearchAutocomplete
        :items="apps"
        @item-click="test"
        @all-results-click="test2"
        class="m-t-24"
      />
    </div>
  </main>
</template>

<script>
import BIMDataText from "../../../../BIMDataComponents/BIMDataText/BIMDataText.vue";
import BIMDataSearchAutocomplete from "../../../../BIMDataComponents/BIMDataSearchAutocomplete/BIMDataSearchAutocomplete.vue";

export default {
  components: {
    BIMDataText,
    BIMDataSearchAutocomplete,
  },
  data: function () {
    return {
      apps: [
        {
          title: "App 01",
          text: "Ceci est une première longue description pour faire un test",
          icon: "test",
        },
        {
          title: "App 02",
          text: "Description here",
          icon: "test",
        },
        {
          title: "App 03",
          text: "Description here",
          icon: "test",
        },
        {
          title: "App 04",
          text: "Description here",
        },
      ],
    };
  },
  methods: {
    test($event) {
      console.log($event);
    },
    test2($event) {
      console.log($event);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "./_YourFileStyle.scss";
</style>
