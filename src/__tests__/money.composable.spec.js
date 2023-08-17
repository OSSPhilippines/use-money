import useMoney from '../composables/use-money'; // Update the path accordingly

describe('useMoney', () => {
  it('formats money value correctly with default options', () => {
    const value = 12345.67;

    const result = useMoney(value);

    expect(result.moneyValue).toBe('12,345.67');
    expect(result.moneyFractional).toBe('67');
    expect(result.moneySymbol).toBe('$');
    expect(result.moneyConcatenated).toBe('$12,345.67');
  });

  it('formats money value correctly with custom options', () => {
    const value = 54321.89;
    const customOptions = {
      showFractional: false,
      showSymbol: false,
    };

    const result = useMoney(value, customOptions);

    expect(result.moneyValue).toBe('54,321');
    expect(result.moneyFractional).toBe('89');
    expect(result.moneySymbol).toBe('');
    expect(result.moneyConcatenated).toBe('54,321');
  });

  it('handles invalid input value', () => {
    const value = 'invalid';

    const result = useMoney(value);

    expect(result.moneyValue).toBe('');
    expect(result.moneyFractional).toBe('');
    expect(result.moneySymbol).toBe('$');
    expect(result.moneyConcatenated).toBe('$');
  });

  it('handles zero value with fractional part', () => {
    const value = 0.99;

    const result = useMoney(value);

    expect(result.moneyValue).toBe('0.99');
    expect(result.moneyFractional).toBe('99');
    expect(result.moneySymbol).toBe('$');
    expect(result.moneyConcatenated).toBe('$0.99');
  });
});
