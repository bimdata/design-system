<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="tertiaryDarkColor in tertiaryDarkColors"
        :key="tertiaryDarkColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': tertiaryDarkColor.hex,
            color: tertiaryDarkColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ tertiaryDarkColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ tertiaryDarkColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkColor.stroke }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        class="alerts"
        :class="{
          success: alertType === 'success',
          error: alertType === 'error',
        }"
        v-if="alerts"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script>
import BIMDataButton from "../../../../BIMDataComponents/BIMDataButton/BIMDataButton.vue";
export default {
  components: {
    BIMDataButton,
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
      tertiaryDarkColors: [
        {
          name: "Tertiary Dark",
          hex: "#7b7b7b",
          rgb: "123, 123, 123",
          scss: "$color-tertiary-dark",
          css: "var(--color-tertiary-dark)",
          background: "bg-tertiary-dark",
          color: "color-tertiary-dark",
          fill: "fill-tertiary-dark",
          stroke: "stroke-tertiary-dark",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Dark 100",
          hex: "#eeeeee",
          rgb: "238, 238, 238",
          scss: "$color-tertiary-dark-100",
          css: "var(--color-tertiary-dark-100)",
          background: "bg-tertiary-dark-100",
          color: "color-tertiary-dark-100",
          fill: "fill-tertiary-dark-100",
          stroke: "stroke-tertiary-dark-100",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary Dark 400",
          hex: "#949494",
          rgb: "148, 148, 148",
          scss: "$color-tertiary-dark-400",
          css: "var(--color-tertiary-dark-400)",
          background: "bg-tertiary-dark-400",
          color: "color-tertiary-dark-400",
          fill: "fill-tertiary-dark-400",
          stroke: "stroke-tertiary-dark-400",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Dark 600",
          hex: "#616161",
          rgb: "97, 97, 97",
          scss: "$color-tertiary-dark-600",
          css: "var(--color-tertiary-dark-600)",
          background: "bg-tertiary-dark-600",
          color: "color-tertiary-dark-600",
          fill: "fill-tertiary-dark-600",
          stroke: "stroke-tertiary-dark-600",
          textcolor: "#ffffff",
        },
      ],
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
