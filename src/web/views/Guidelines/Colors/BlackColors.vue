<template>
  <div class="container-color">
    <div class="color-swatches">
      <div
        class="color-swatche"
        v-for="blackColor in blackColors"
        :key="blackColor.id"
      >
        <div
          class="color-swatche__header"
          :style="{
            'background-color': blackColor.hex,
            color: blackColor.textcolor,
          }"
        >
          <div class="color-swatche__header__item">
            <div class="label">Name</div>
            <div class="value">{{ blackColor.name }}</div>
          </div>
        </div>
        <div class="color-swatche__body">
          <div class="color-swatche__body__item">
            <div class="label">HEX</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.hex}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span> {{ blackColor.hex }} </span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">RGB</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.rgb}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.rgb }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">SCSS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.scss}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.scss }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">CSS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.css}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.css }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">BACKGROUND UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.background}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.background }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">COLOR UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.color}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.color }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">FILL UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.fill}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.fill }}</span>
              <BIMDataButton fill radius width="55px" height="24px"
                >copy</BIMDataButton
              >
            </div>
          </div>
          <div class="color-swatche__body__item">
            <div class="label">STROKE UTILITY CLASS</div>
            <div
              class="value"
              v-clipboard:copy="`${blackColor.stroke}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <span>{{ blackColor.stroke }}</span>
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
      blackColors: [
        {
          name: "Black",
          hex: "#000000",
          rgb: "0, 0, 0",
          scss: "$color-black",
          css: "var(--color-black)",
          background: "bg-black",
          color: "color-black",
          fill: "fill-black",
          stroke: "stroke-black",
          textcolor: "#ffffff",
        },
        {
          name: "Black 100",
          hex: "#0000001a",
          rgb: "0, 0, 0, .1",
          scss: "$color-black-100",
          css: "var(--color-black-100)",
          background: "bg-black-100",
          color: "color-black-100",
          fill: "fill-black-100",
          stroke: "stroke-black-100",
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
