<template>
  <main class="article designers">
    <div class="article-wrapper">
      <BIMDataText component="h1" color="color-primary">
        Designers
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        Tooling
      </BIMDataText>
      <BIMDataText margin="5px 0">
        We use <a href="https://www.figma.com/" target="_blank">Figma</a> for
        our entire design workflow.
      </BIMDataText>
      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        Fonts
      </BIMDataText>
      <BIMDataText margin="5px 0">
        We use Roboto fonts, you can download and install them
        <a
          href="https://fonts.google.com/specimen/Roboto?query=Roboto"
          target="_blank"
        >
          here
        </a>
      </BIMDataText>

      <BIMDataText component="h4" color="color-primary" margin="20px 0 10px">
        Other important resources
      </BIMDataText>
      <BIMDataText margin="5px 0">
        You can also check our
        <router-link to="../guidelines-utilities/colors">
          brand colors
        </router-link>
      </BIMDataText>
    </div>
  </main>
</template>

<script>
import BIMDataText from "../../../BIMDataComponents/BIMDataText/BIMDataText.vue";

export default {
  components: {
    BIMDataText,
  },
};
</script>

<style scoped lang="scss" src="./_GettingStarted.scss"></style>
