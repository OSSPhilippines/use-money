# 💸 Money Component 💰

Vue.js 2 component for displaying hindu arabic money figures

## Usage

```html
<money :value="100" show-symbol /> // ₱100.00
<money :value="1000" show-symbol /> // ₱1,000.00
<money :value="1000" /> // 1,000.00

// Using $ as symbol

<money :value="1000" symbol="$" show-symbol /> // $1,000.00
```

## The component

```vue
<template>
  <span :style="textStyle">
    <spanv-if="showSymbol">{{ symbol }}</span><span>{{ value | money }}</span>
  </span>
</template>

<script>
export default {
  filters: {
    money (num) {
      const [characteristic, mantissa] = Number.parseFloat(num).toFixed(2).split('.');
      const integer = parseInt(characteristic).toLocaleString();
      const fractional = mantissa;
      return [integer, fractional].join('.');
    },
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
    symbol: {
      type: String,
      default: '₱',
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    showSymbol: Boolean,
  },
};
</script>
```

Code snippet by [Joff Tiquez](https://twitter.com/jrtiquez)
