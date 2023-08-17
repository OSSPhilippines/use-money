import { mount } from '@vue/test-utils';
import Money from '../components/Money';

describe('Money.vue', () => {
  it('renders money value and symbol correctly', () => {
    const propsData = {
      input: 1000,
      symbol: '$',
      showSymbol: true,
    };

    const wrapper = mount(Money, {
      propsData,
    });

    const moneySymbol = wrapper.find('[data-testid="money-symbol"]');
    const moneyValue = wrapper.find('[data-testid="money-value"]');

    expect(moneySymbol.exists()).toBe(true);
    expect(moneySymbol.text()).toBe('$');

    expect(moneyValue.exists()).toBe(true);
    expect(moneyValue.text()).toBe('1,000');
  });

  // Add more test cases as needed
});
