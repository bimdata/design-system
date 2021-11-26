import { shallowMount } from "@vue/test-utils";
import BIMDataTextarea from "../BIMDataTextarea.vue";

describe("BIMDataTextarea", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with custom name, match with id and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        name: "placeholderName",
      },
    });
    expect(wrapper.find("textarea").element.name).toBe("placeholderName");
    expect(wrapper.find("textarea").element.id).toBe("placeholderName");
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with message and 'not-empty' class", async () => {
    const onInput = jest.fn();
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        modelValue: null,
      },
      listeners: {
        "update:modelValue": onInput,
      },
    });
    expect(wrapper.find("textarea").element.value).toBe("");

    wrapper.find("textarea").setValue("x");
    expect(onInput).toHaveBeenCalledWith("x");

    wrapper.setProps({ modelValue: "message" });
    await wrapper.vm.$nextTick();
    expect(wrapper.classes("not-empty")).toBe(true);
    expect(wrapper.find("textarea").element.value).toBe("message");
  });

  it("should render component with custom placeholder, contains 'not-empty' class and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        placeholder: "textarea placeholder",
      },
    });
    expect(wrapper.classes("not-empty")).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with custom label and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        label: "textarea label",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with a custom width and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        width: "50px",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with a custom height and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        height: "50px",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a disabled component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataTextarea, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
