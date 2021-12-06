<template>
  <div class="folder-creation-form" v-clickaway="close">
    <div class="folder-creation-form__title">
      <BIMDataIcon name="addFolder" size="xs" />
      <span>{{ $translate("creationFormTitle") }}</span>
    </div>
    <BIMDataInput
      ref="nameInput"
      class="folder-creation-form__input"
      :placeholder="$translate('nameInputPlaceholder')"
      v-model="name"
      :error="hasError"
      :errorMessage="$translate('nameInputErrorMessage')"
      @keyup.esc.stop="close"
      @keyup.enter.stop="submit"
      margin="24px 0px"
      :loading="loading"
    />
    <BIMDataButton
      class="folder-creation-form__btn-cancel"
      width="80px"
      ghost
      radius
      @click.stop="close"
    >
      {{ $translate("cancel") }}
    </BIMDataButton>
    <BIMDataButton
      class="folder-creation-form__btn-submit"
      width="80px"
      color="primary"
      fill
      radius
      @click.stop="submit"
    >
      {{ $translate("submit") }}
    </BIMDataButton>
  </div>
</template>

<script>
import BIMDataIcon from "../../../../BIMDataComponents/BIMDataIcon/BIMDataIcon.vue";
import BIMDataInput from "../../../../BIMDataComponents/BIMDataInput/BIMDataInput.vue";
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";

import clickaway from "../../../../BIMDataDirectives/click-away.js";

export default {
  components: {
    BIMDataIcon,
    BIMDataInput,
    BIMDataButton,
  },
  directives: { clickaway },
  inject: ["$translate"],
  props: {
    projectId: {
      type: Number,
      required: true,
    },
    spaceId: {
      type: Number,
      required: true,
    },
    apiClient: {
      type: Object,
      required: true,
    },
    folder: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      hasError: false,
      loading: false,
    };
  },
  created() {
    document.addEventListener("keydown", this.onKeyDown);
  },
  mounted() {
    this.timeoutId = setTimeout(() => this.$refs.nameInput.focus(), 200);
  },
  destroyed() {
    document.removeEventListener("keydown", this.onKeyDown);
    clearTimeout(this.timeoutId);
  },
  methods: {
    onKeyDown(e) {
      if (e.key === "Enter") {
        this.submit();
      }
    },
    reset() {
      this.name = "";
      this.hasError = false;
    },
    close() {
      this.reset();
      this.$emit("close");
    },
    async submit() {
      if (this.name) {
        this.loading = true;
        try {
          const folderData = {
            parentId: this.folder.id,
            name: this.name,
          };
          const folder = await this.apiClient.collaborationApi.createFolder({
            cloudPk: this.spaceId,
            projectPk: this.projectId,
            data: folderData,
          });
          this.$emit("success", folder);
        } catch (error) {
          this.$emit("error", error);
        } finally {
          this.reset();
          this.loading = false;
        }
      } else {
        this.$refs.nameInput.focus();
        this.hasError = true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
// import BIMDATA VARIABLES
@import "../../../../assets/scss/_BIMDataVariables.scss";

.folder-creation-form {
  padding: $spacing-unit;
  background-color: $color-white;

  display: flex;
  flex-wrap: wrap;

  &__title {
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: calc($spacing-unit) / 2;
    color: $color-primary;

    span {
      font-size: small;
      margin-left: $spacing-unit / 2;
    }
  }

  &__input {
    width: 100%;
    font-size: 1rem;
  }

  &__btn-cancel {
    margin-left: auto;
  }

  &__btn-submit {
    margin-left: $spacing-unit;
  }
}
</style>
