<template>
  <span :style="textStyle">
    <span v-if="showSymbol" :style="symbolStyles" :class="symbolClasses" data-testid="money-symbol">{{ moneySymbol }}</span><span data-testid="money-value">{{ moneyValue }}</span>
  </span>
</template>

<script>
import useMoney from '../composables/use-money';
export default {
  props: {
    input: {
      type: [Number, String],
      default: 0,
    },
    symbol: {
      type: String,
      default: '₱',
    },
    symbolStyles: {
      type: Object,
      default: () => ({}),
    },
    symbolClasses: {
      type: Array,
      default: () => ([]),
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    showSymbol: Boolean,
    showFractional: Boolean,
  },
  setup (props) {
    const {
      moneyValue,
      moneyFractional,
      moneySymbol,
      moneyConcatenated,
    } = useMoney(props.input, props);

    return {
      moneyValue,
      moneyFractional,
      moneySymbol,
      moneyConcatenated,
    };
  },
};
</script>
