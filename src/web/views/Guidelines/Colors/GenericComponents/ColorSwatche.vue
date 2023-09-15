<template>
  <div class="container-color">
    <div class="color-swatches">
      <div class="color-swatche" v-for="color in colors" :key="color.id">
        <div
          class="color-swatche__header"
          :style="{
            'background-color': color.hex,
            color: color.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ color.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${color.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ color.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${color.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${color.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${color.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${color.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${color.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${color.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ color.stroke }}</span>
              <BIMDataButton fill radius width="55px" height="24px">
                copy
              </BIMDataButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="alerts"
        class="alerts"
        :class="{
          success: alertType === 'success',
          error: alertType === 'error',
        }"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import BIMDataButton from "../../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataButton,
  },
  props: {
    colors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
    };
  },
  methods: {
    onCopy(e) {
      this.alerts = true;
      this.message = e.text + " " + "copied !";
      this.alertType = "success";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
    onError() {
      this.alerts = true;
      this.message = "Failed to copy texts";
      this.alertType = "error";
      setTimeout(() => {
        this.alerts = false;
      }, 3000);
    },
  },
};
</script>

<style scoped lang="scss" src="./_ColorSwatche.scss"></style>
