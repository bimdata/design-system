<template>
  <div class="pdf-viewer">
    <BIMDataLoading v-if="isLoading" />
    <div v-else class="pdf-viewer__header">
      <BIMDataButton
        width="32px"
        height="32px"
        color="primary"
        ghost
        radius
        icon
        @click="onCloseClick"
      >
        <BIMDataIcon name="arrow" size="xxs" />
      </BIMDataButton>
      <div class="pdf-viewer__header--text text-center">
        <BIMDataTextbox :text="pdf.name" width="70%" />
      </div>
    </div>
    <object
      v-if="pdfUrl"
      type="application/pdf"
      :data="pdfUrl"
      width="100%"
      height="100%"
    ></object>
  </div>
</template>

<script>
import BIMDataIcon from "../BIMDataIcon/BIMDataIcon.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";
import BIMDataTextbox from "../BIMDataTextbox/BIMDataTextbox.vue";
import BIMDataLoading from "../BIMDataLoading/BIMDataLoading.vue";

export default {
  components: { BIMDataIcon, BIMDataButton, BIMDataTextbox, BIMDataLoading },
  props: {
    pdf: {
      type: [Object, File],
    },
  },
  emits: ["close-pdf"],
  data() {
    return {
      loading: false,
      pdfUrl: null,
    };
  },
  async created() {
    this.isLoading = true;
    if (this.pdf.file) {
      try {
        const res = await fetch(this.pdf.file);
        const blob = await res.blob();
        this.pdfUrl = window.URL.createObjectURL(blob);
      } catch (err) {
        console.err("Error fetching the pdf file", err);
      }
    } else {
      this.pdfUrl = window.URL.createObjectURL(this.pdf);
    }
    this.isLoading = false;
  },

  methods: {
    onCloseClick() {
      this.$emit("close-pdf");
      this.pdfUrl = null;
    },
  },
};
</script>

<style scoped lang="scss">
// import BIMDATA VARIABLES
@import "../../assets/scss/_BIMDataVariables.scss";

.pdf-viewer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--color-white);
  overflow: hidden;
  z-index: 2;
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 42px;
    font-size: 12px;
    &--text {
      width: calc(100% - 32px);
    }
  }
  object {
    height: calc(100% - 42px);
  }
}
</style>
