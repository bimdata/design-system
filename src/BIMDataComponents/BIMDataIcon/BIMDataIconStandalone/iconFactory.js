import iconsColors from "../../../assets/iconsColors.js";

const sizeToPixel = {
  xxxs: 10,
  xxs: 13,
  xs: 16,
  s: 18,
  m: 22,
  l: 28,
  xl: 36,
  xxl: 45,
  xxxl: 60,
};

export default (iconName, Icon) => ({
  name: `BIMDataIcon${iconName}`,
  components: {
    [iconName]: Icon,
  },
  props: {
    color: {
      type: String,
      default: "default",
      validator: color => iconsColors.includes(color),
    },
    fillColor: {
      type: String,
      default: "currentColor",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    stroke: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "s",
      validator(value) {
        return Object.keys(sizeToPixel).includes(value);
      },
    },
    customSize: {
      type: [Number, String],
      default: null,
    },
    rotate: {
      type: Number,
      default: 0,
    },
    margin: {
      type: String,
      default: "0px",
    },
  },
  computed: {
    classes() {
      return {
        "icon-fill": this.fill,
        "icon-stroke": this.stroke,
        [`icon-fill--${this.color}`]: this.fill && this.color,
        [`icon-stroke--${this.color}`]: this.stroke && this.color,
      };
    },
    style() {
      const pixelSize = this.getPixelSize(this.size);
      const style = {
        width: `${pixelSize}px`,
        minWidth: `${pixelSize}px`,
        height: `${pixelSize}px`,
        minHeight: `${pixelSize}px`,
        margin: `${this.margin}`,
        transform: `rotate(${this.rotate}deg)`,
      };
      return style;
    },
  },
  methods: {
    getPixelSize() {
      return this.customSize ? this.customSize : sizeToPixel[this.size];
    },
  },
});
