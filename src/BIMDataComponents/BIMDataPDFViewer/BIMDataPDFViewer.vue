<template>
  <div class="pdf-viewer">
    <template v-if="loading">
      <BIMDataLoading />
    </template>

    <template v-else>
      <div v-if="header" class="pdf-viewer__header">
        <div class="pdf-viewer__header--left">
          <slot name="header-left"></slot>
        </div>
        <div class="pdf-viewer__header--title">
          <BIMDataTextbox :text="pdf.name" />
        </div>
        <div class="pdf-viewer__header--right">
          <slot name="header-right"></slot>
        </div>
      </div>

      <object
        v-if="pdfUrl"
        width="100%"
        height="100%"
        type="application/pdf"
        :data="pdfUrl"
      ></object>
    </template>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import BIMDataLoading from "../BIMDataLoading/BIMDataLoading.vue";
import BIMDataTextbox from "../BIMDataTextbox/BIMDataTextbox.vue";

export default {
  components: {
    BIMDataLoading,
    BIMDataTextbox,
  },
  props: {
    header: {
      type: Boolean,
      default: false,
    },
    pdf: {
      type: [Object, File],
    },
  },
  setup(props) {
    const loading = ref(false);
    const pdfUrl = ref(null);

    watch(
      () => props.pdf,
      async pdf => {
        loading.value = true;
        if (pdf.file) {
          try {
            const blob = await fetch(pdf.file).then(res => res.blob());
            pdfUrl.value = URL.createObjectURL(blob);
          } catch (error) {
            console.err(
              "[BIMDataPDFViewer] Error fetching the pdf file.",
              error
            );
          }
        } else {
          pdfUrl.value = URL.createObjectURL(pdf);
        }
        loading.value = false;
      },
      { immediate: true }
    );

    return {
      loading,
      pdfUrl,
    };
  },
};
</script>

<style scoped lang="scss">
.pdf-viewer {
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  overflow: hidden;

  &__header {
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    &--title {
      width: 0;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      padding: 0 var(--spacing-unit);
    }
  }

  object {
    height: 100%;
  }

  &__header ~ object {
    height: calc(100% - 42px);
  }
}
</style>
