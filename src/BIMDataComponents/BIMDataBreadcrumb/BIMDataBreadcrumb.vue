<script>
import BIMDataIconArrow from "../BIMDataIcon/BIMDataIconStandalone/BIMDataIconArrow.vue";
import BIMDataButton from "../BIMDataButton/BIMDataButton.vue";

export default {
  components: {
    BIMDataIconArrow,
  },
  props: {
    steps: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
    },
  },
  methods: {
    onStepClick(step) {
      this.$emit("click", step);
    },
    onBackClick() {
      this.$emit("back");
    },
  },
  render(h) {
    const children = [];

    if (this.steps.length > 1) {
      children.push(
        h(
          BIMDataButton,
          {
            class: "bimdata-breadcrumb__back",
            props: {
              color: "default",
              ripple: true,
              rounded: true,
              icon: true,
            },
            on: {
              click: () => this.onBackClick(),
            },
          },
          [h(BIMDataIconArrow)]
        )
      );

      this.steps.forEach((step, i) => {
        children.push(
          h(
            "div",
            {
              class: "bimdata-breadcrumb__step",
            },
            [
              h(
                "span",
                {
                  class: {
                    "bimdata-breadcrumb__step--last":
                      i === this.steps.length - 1,
                  },
                  attrs: {
                    title: this.label ? step[this.label] : step,
                  },
                  on: {
                    click: () => this.onStepClick(step),
                  },
                },
                this.label ? step[this.label] : step
              ),
              i < this.steps.length - 1
                ? h("div", [
                    h(BIMDataIcon, {
                      props: { name: "chevron", size: "xxs" },
                    }),
                  ])
                : undefined,
            ]
          )
        );
      });
    }

    return h(
      "div",
      {
        class: "bimdata-breadcrumb",
      },
      children
    );
  },
};
</script>

<style scoped lang="scss">
.bimdata-breadcrumb {
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  height: 32px;
  &__step {
    display: flex;
    align-items: center;
    * {
      margin-right: 6px;
    }
    span {
      text-align: center;
      &:not(.bimdata-breadcrumb__step--last) {
        cursor: pointer;
      }
      &:hover:not(.bimdata-breadcrumb__step--last) {
        font-weight: 700;
        text-decoration: underline;
      }
      &::before {
        display: block;
        content: attr(title);
        height: 0;
        overflow: hidden;
        visibility: hidden;
        font-weight: 700;
        text-decoration: underline;
      }
    }
  }

  &__back {
    cursor: pointer;
    display: flex;
    margin-right: 6px;
  }
}
</style>
