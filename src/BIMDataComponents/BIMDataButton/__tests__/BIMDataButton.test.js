import { shallowMount } from "@vue/test-utils";
import BIMDataButton from "../BIMDataButton.vue";

describe("BIMDataButton", () => {
  it("should render component and match snapshot", () => {
    const wrapper = shallowMount(BIMDataButton);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a button with a slot and match snapshot", () => {
    const wrapper = shallowMount(BIMDataButton, {
      slots: {
        default: "<span>test</span>",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a button with a custom width and match snapshot", () => {
    const wrapper = shallowMount(BIMDataButton, {
      propsData: {
        width: "50px",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render a button with a custom height and match snapshot", () => {
    const wrapper = shallowMount(BIMDataButton, {
      propsData: {
        height: "50px",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emit a click event", () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(BIMDataButton, {
      listeners: {
        click: onClick,
      },
    });
    wrapper.trigger("click");
    expect(onClick).toHaveBeenCalled();
  });
});
