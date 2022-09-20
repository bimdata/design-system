import { shallowMount } from "@vue/test-utils";
import BIMDataNavigation from "../BIMDataNavigation.vue";
import BIMDataButton from "../../BIMDataButton/BIMDataButton.vue";

describe("BIMDataNavigation", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataNavigation);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a navigation with a left slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataNavigation, {
      slots: {
        left: "<span>left slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a navigation with a right slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataNavigation, {
      slots: {
        right: "<span>right slot</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render li tag", () => {
    const wrapper = shallowMount(BIMDataNavigation);
    expect(wrapper.find(".bimdata-navigation__item").element).toBeTruthy();
  });

  it("should not render BIMDataButton", () => {
    const wrapper = shallowMount(BIMDataNavigation, {
      propsData: {
        first: false,
        last: false,
        previous: false,
        next: false,
      },
    });
    expect(wrapper.findComponent(BIMDataButton).exists()).toBe(false);
  });

  it("should render BIMDataButton disabled", () => {
    const wrapper = shallowMount(BIMDataNavigation, {
      propsData: {
        firstDisabled: true,
        previousDisabled: true,
        nextDisabled: true,
        lastDisabled: true,
      },
    });
    expect(wrapper.findComponent(BIMDataButton).classes("disabled")).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit first event", async () => {
    const wrapper = shallowMount(BIMDataNavigation);
    wrapper.vm.$emit("first");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("first")).toBeTruthy();
  });

  it("should emit previous event", async () => {
    const wrapper = shallowMount(BIMDataNavigation);
    wrapper.vm.$emit("previous");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("previous")).toBeTruthy();
  });

  it("should emit next event", async () => {
    const wrapper = shallowMount(BIMDataNavigation);
    wrapper.vm.$emit("next");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("next")).toBeTruthy();
  });

  it("should emit last event", async () => {
    const wrapper = shallowMount(BIMDataNavigation);
    wrapper.vm.$emit("last");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted("last")).toBeTruthy();
  });
});
