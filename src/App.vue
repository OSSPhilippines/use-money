<template>
<div style="display: flex; flex-direction: column;">
  <money input="1000" />
  <money show-symbol input="1000" />
  <money show-symbol show-fractional input="1000" />
  <money show-symbol show-fractional symbol="$" input="123123123123" />
</div>
</template>

<script>
import Money from './components/Money';
export default {
  components: {
    Money,
  },
  setup () {
    return {
      // ...
    };
  },
};
</script>
