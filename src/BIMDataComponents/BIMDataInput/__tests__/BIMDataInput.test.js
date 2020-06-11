import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import BIMDataInput from "../BIMDataInput.vue";

describe("BIMDataInput", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with placeholder and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        placeholder: "input placeholder",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with error message and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        error: true,
        errorMessage: "error message",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with success message and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        success: true,
        successMessage: "success message",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render loading component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        loading: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render disabled component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with 'not empty' class and match snapshot", () => {
    const wrapper = shallowMount(BIMDataInput, {
      propsData: {
        text: "text message",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should work with v-model binding", async () => {
    const onInput = jest.fn();
    const wrapper = shallowMount(BIMDataInput, {
      listeners: {
        input: onInput,
      },
    });
    expect(wrapper.find("input").element.value).toBe("");

    wrapper.find("input").setValue("x");
    expect(onInput).toHaveBeenCalledWith("x");

    wrapper.setProps({ text: "message" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("input").element.value).toBe("message");
  });

  test("should render a button with a slot and match snapshot", () => {
    const wrapper = mount(BIMDataInput, {
      slots: {
        inputIcon: "test icon slot",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
