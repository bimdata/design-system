<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="neutralColor in neutralColors"
        :key="neutralColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': neutralColor.hex,
            color: neutralColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ neutralColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ neutralColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${neutralColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ neutralColor.stroke }}</span>
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
      neutralColors: [
        {
          name: "Neutral",
          hex: "#205dbd",
          rgb: "32, 93, 189",
          scss: "$color-neutral",
          css: "var(--color-neutral)",
          background: "bg-neutral",
          color: "color-neutral",
          fill: "fill-neutral",
          stroke: "stroke-neutral",
          textcolor: "#ffffff",
        },
        {
          name: "Neutral 100",
          hex: "#e2ebfa",
          rgb: "226, 235, 250",
          scss: "$color-neutral-100",
          css: "var(--color-neutral-100)",
          background: "bg-neutral-100",
          color: "color-neutral-100",
          fill: "fill-neutral-100",
          stroke: "stroke-neutral-100",
          textcolor: "#2f374a",
        },
        {
          name: "Neutral 400",
          hex: "#3374dd",
          rgb: "51, 116, 221",
          scss: "$color-neutral-400",
          css: "var(--color-neutral-400)",
          background: "bg-neutral-400",
          color: "color-neutral-400",
          fill: "fill-neutral-400",
          stroke: "stroke-neutral-400",
          textcolor: "#ffffff",
        },
        {
          name: "Neutral 600",
          hex: "#194791",
          rgb: "25, 71, 145",
          scss: "$color-neutral-600",
          css: "var(--color-neutral-600)",
          background: "bg-neutral-600",
          color: "color-neutral-600",
          fill: "fill-neutral-600",
          stroke: "stroke-neutral-600",
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