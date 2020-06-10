import { shallowMount } from "@vue/test-utils";
import BIMDataCheckbox from "../BIMDataCheckbox.vue";

describe("BIMDataCheckbox", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render component with text and match snapshot", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: false,
        text: "text checkbox",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-checkbox' class when state false", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: false,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-chekbox' and 'checked' class when state true", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: true,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should contain 'bimdata-chekbox', 'checked' and 'indeterminate' class when state null", () => {
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: null,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit change with true if state is false", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: false,
      },
      listeners: {
        change: onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(true);
  });

  it("should emit change with false if state is true", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: true,
      },
      listeners: {
        change: onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(false);
  });

  it("should emit change with false if state is null", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataCheckbox, {
      propsData: {
        state: null,
      },
      listeners: {
        change: onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalledWith(false);
  });
});
