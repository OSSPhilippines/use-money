import { ref } from 'vue';

export default (value, options = { showFractional: true, showSymbol: true, symbol: '$' }) => {
  const money = ref('');

  if (isNaN(value)) {
    money.value = '';
    return {
      moneyValue: '',
      moneyFractional: '',
      moneySymbol: options.showSymbol ? options.symbol : '',
      moneyConcatenated: options.showSymbol ? options.symbol : '',
    };
  }

  const formattedValue = Number.parseFloat(value).toFixed(2);
  const [integerPart, fractionalPart] = formattedValue.split('.');
  const formattedInteger = parseInt(integerPart).toLocaleString();
  const formattedFractional = fractionalPart;

  const outputParts = [formattedInteger];

  if (options.showFractional) {
    outputParts.push(formattedFractional);
  }

  const moneyValue = outputParts.join('.');
  const symbolPart = options.showSymbol ? options.symbol : '';
  const concatenatedValue = symbolPart + moneyValue;

  money.value = concatenatedValue;

  return {
    moneyValue: moneyValue,
    moneyFractional: formattedFractional,
    moneySymbol: symbolPart,
    moneyConcatenated: concatenatedValue,
  };
};
