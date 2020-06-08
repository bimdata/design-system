import { shallowMount } from '@vue/test-utils';
import BIMDataButton from './BIMDataButton.vue';

describe('BIMDataButton', () => {
  it('renders a button', () => {
    const wrapper = shallowMount(BIMDataButton)
    expect(wrapper.find('button'))
  })
})
