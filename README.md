# 💸 Use Money 💰

## Installation

Install the @ossph/use-money package using npm or yarn:

```bash
npm install @ossph/use-money

```
or 

```bash
yarn add @ossph/use-money

```

## Money Component

### Importing the Component

To use the **Money** component, import it as follows:

```js
import { Money } from '@ossph/use-money';
```

### Example Usage

Use the **Money** component in your Vue templates as follows:

```html
<template>
  <div>
    <Money :input="123456.78" />
  </div>
</template>

<script>
import { Money } from '@ossph/use-money';

export default {
  components: {
    Money
  }
};
</script>

```

### Props API

The `Money` component accepts the following props:

| Prop Name      | Type                | Default | Description                                        |
|----------------|---------------------|---------|----------------------------------------------------|
| `input`        | Number/String       |         | The input money value to be formatted.            |
| `symbol`       | String              | '$'     | The currency symbol.                              |
| `symbolStyles` | Object              | {}      | CSS styles for the currency symbol.               |
| `symbolClasses`| Array               | []      | CSS classes for the currency symbol.              |
| `textStyle`    | Object              | {}      | CSS styles for the text.                          |
| `showSymbol`   | Boolean             |         | Whether to show the currency symbol.              |
| `showFractional` | Boolean            |         | Whether to show the fractional part of the money value. |



## Money Composable

### Importing the Composable

To use the **useMoney** composable, import it as follows:

```js
import { useMoney } from '@ossph/use-money';
```

### Example Usage

Use the useMoney composable in your Vue composition functions as follows:

```js
<template>
  <div>
    <p>Formatted Money Value: {{ formattedMoney }}</p>
  </div>
</template>

<script>
import { useMoney } from '@ossph/use-money';

export default {
  setup() {
    const { moneyValue } = useMoney(123456.78);
    
    return {
      formattedMoney: moneyValue
    };
  }
};
</script>
```

### Composable API

The `useMoney` composable takes the following parameters:

| Prop Name  | Type               | Default                                          | Description                                        |
|------------|--------------------|--------------------------------------------------|----------------------------------------------------|
| `value`    | Number/String      |                                                  | The input money value to be formatted.            |
| `options`  | Object             | `{ showFractional: true, showSymbol: true, symbol: '$' }` | Formatting options for money value.        |
| `showFractional` | Boolean        | `true`                                           | Whether to show the fractional part of the money value. |
| `showSymbol`     | Boolean        | `true`                                           | Whether to show the currency symbol.               |
| `symbol`         | String         | `'$'`                                            | The currency symbol.                              |


It returns an object with the following properties:

| Property           | Type   | Description                                        |
|--------------------|--------|----------------------------------------------------|
| `moneyValue`       | String | The formatted integer part of the money value.    |
| `moneyFractional`  | String | The original fractional part.                     |
| `moneySymbol`      | String | The currency symbol.                              |
| `moneyConcatenated`| String | The concatenated value with the currency symbol.  |
