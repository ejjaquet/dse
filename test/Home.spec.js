import { mount } from '@vue/test-utils'
import Home from '../src/views/Home.vue'


test('displays message', () => {
  const wrapper = mount(Home)

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Erik-Jan')
})