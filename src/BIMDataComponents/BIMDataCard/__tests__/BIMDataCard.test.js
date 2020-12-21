import { shallowMount } from "@vue/test-utils";
import BIMDataCard from "../BIMDataCard.vue";

describe("BIMDataCard", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with title header", () => {
    const wrapper = shallowMount(BIMDataCard, {
      propsData: {
        titleHeader: "Hearder title card",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with submenu text", () => {
    const wrapper = shallowMount(BIMDataCard, {
      propsData: {
        submenuText: "Submenu text card",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with a custom width", () => {
    const wrapper = shallowMount(BIMDataCard, {
      propsData: {
        width: "350px",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a card with a headerIcons slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard, {
      slots: {
        headerIcons: "<span>header icons slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a card with a left slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard, {
      slots: {
        left: "<span>left slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a card with a left slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard, {
      slots: {
        right: "<span>right slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a card with a content slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard, {
      slots: {
        content: "<span>content slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a card with a footer slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCard, {
      slots: {
        footer: "<span>footer slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
