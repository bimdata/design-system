<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="secondaryColor in secondaryColors"
        :key="secondaryColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': secondaryColor.hex,
            color: secondaryColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ secondaryColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ secondaryColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${secondaryColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ secondaryColor.stroke }}</span>
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
      secondaryColors: [
        {
          name: "Secondary",
          hex: "#f9c72c",
          rgb: "249, 199, 44",
          scss: "$color-secondary",
          css: "var(--color-secondary)",
          background: "bg-secondary",
          color: "color-secondary",
          fill: "fill-secondary",
          stroke: "stroke-secondary",
          textcolor: "#2f374a",
        },
        {
          name: "Secondary 100",
          hex: "#fffcf2",
          rgb: "255, 252, 242",
          scss: "$color-secondary-100",
          css: "var(--color-secondary-100)",
          background: "bg-secondary-100",
          color: "color-secondary-100",
          fill: "fill-secondary-100",
          stroke: "stroke-secondary-100",
          textcolor: "#2f374a",
        },
        {
          name: "Secondary 400",
          hex: "#fad35e",
          rgb: "250, 211, 94",
          scss: "$color-secondary-400",
          css: "var(--color-secondary-400)",
          background: "bg-secondary-400",
          color: "color-secondary-400",
          fill: "fill-secondary-400",
          stroke: "stroke-secondary-400",
          textcolor: "#2f374a",
        },
        {
          name: "Secondary 600",
          hex: "#ebb607",
          rgb: "235, 182, 7",
          scss: "$color-secondary-600",
          css: "var(--color-secondary-600)",
          background: "bg-secondary-600",
          color: "color-secondary-600",
          fill: "fill-secondary-600",
          stroke: "stroke-secondary-600",
          textcolor: "#2f374a",
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