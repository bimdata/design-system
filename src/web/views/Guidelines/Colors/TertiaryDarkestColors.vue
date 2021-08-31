<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="tertiaryDarkestColor in tertiaryDarkestColors"
        :key="tertiaryDarkestColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': tertiaryDarkestColor.hex,
            color: tertiaryDarkestColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ tertiaryDarkestColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ tertiaryDarkestColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${tertiaryDarkestColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ tertiaryDarkestColor.stroke }}</span>
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
      tertiaryDarkestColors: [
        {
          name: "Tertiary Darkest",
          hex: "#606060",
          rgb: "96, 96, 96",
          scss: "$color-tertiary-darkest",
          css: "var(--color-tertiary-darkest)",
          background: "bg-tertiary-darkest",
          color: "color-tertiary-darkest",
          fill: "fill-tertiary-darkest",
          stroke: "stroke-tertiary-darkest",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Darkest 100",
          hex: "#f7f7f7",
          rgb: "247, 247, 247",
          scss: "$color-tertiary-darkest-100",
          css: "var(--color-tertiary-darkest-100)",
          background: "bg-tertiary-darkest-100",
          color: "color-tertiary-darkest-100",
          fill: "fill-tertiary-darkest-100",
          stroke: "stroke-tertiary-darkest-100",
          textcolor: "#2f374a",
        },
        {
          name: "Tertiary Darkest 400",
          hex: "#797979",
          rgb: "121, 121, 121",
          scss: "$color-tertiary-darkest-400",
          css: "var(--color-tertiary-darkest-400)",
          background: "bg-tertiary-darkest-400",
          color: "color-tertiary-darkest-400",
          fill: "fill-tertiary-darkest-400",
          stroke: "stroke-tertiary-darkest-400",
          textcolor: "#ffffff",
        },
        {
          name: "Tertiary Darkest 600",
          hex: "#464646",
          rgb: "70, 70, 70",
          scss: "$color-tertiary-darkest-600",
          css: "var(--color-tertiary-darkest-600)",
          background: "bg-tertiary-darkest-600",
          color: "color-tertiary-darkest-600",
          fill: "fill-tertiary-darkest-600",
          stroke: "stroke-tertiary-darkest-600",
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
