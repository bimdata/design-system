import { shallowMount } from "@vue/test-utils";
import BIMDataCheckbox from "../BIMDataCheckbox.vue";

describe("BIMDataCheckbox", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with text and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: false,
        text: "text checkbox",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-checkbox' class when state false", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-chekbox' and 'checked' class when state true", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-chekbox', 'checked' and 'indeterminate' class when state null", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: null,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit change with true if state is false", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: false,
      },
      listeners: {
        'update:modelValue': onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(true);
  });

  it("should emit change with false if state is true", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: true,
      },
      listeners: {
        'update:modelValue': onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(false);
  });

  it("should emit change with false if state is null", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        modelValue: null,
      },
      listeners: {
        'update:modelValue': onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(false);
  });
});
