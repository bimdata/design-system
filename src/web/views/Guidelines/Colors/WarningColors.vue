<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="highColor in highColors"
        :key="highColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': highColor.hex,
            color: highColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ highColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ highColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${highColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ highColor.stroke }}</span>
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
import BIMDataButton from "../../../../../src/BIMDataComponents/BIMDataButton/BIMDataButton.vue";
export default {
  components: {
    BIMDataButton,
  },
  data() {
    return {
      alerts: false,
      alertType: null,
      message: "",
      highColors: [
        {
          name: "High",
          hex: "#ff9100",
          rgb: "255, 145, 0",
          scss: "$color-high",
          css: "var(--color-high)",
          background: "bg-high",
          color: "color-high",
          fill: "fill-high",
          stroke: "stroke-high",
          textcolor: "#ffffff",
        },
        {
          name: "High 100",
          hex: "#ffe9cc",
          rgb: "255, 233, 204",
          scss: "$color-high-100",
          css: "var(--color-high-100)",
          background: "bg-high-100",
          color: "color-high-100",
          fill: "fill-high-100",
          stroke: "stroke-high-100",
          textcolor: "#2f374a",
        },
        {
          name: "High 400",
          hex: "#ffa733",
          rgb: "255, 167, 51",
          scss: "$color-high-400",
          css: "var(--color-high-400)",
          background: "bg-high-400",
          color: "color-high-400",
          fill: "fill-high-400",
          stroke: "stroke-high-400",
          textcolor: "#ffffff",
        },
        {
          name: "High 600",
          hex: "#cc7400",
          rgb: "204, 116, 0",
          scss: "$color-high-600",
          css: "var(--color-high-600)",
          background: "bg-high-600",
          color: "color-high-600",
          fill: "fill-high-600",
          stroke: "stroke-high-600",
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