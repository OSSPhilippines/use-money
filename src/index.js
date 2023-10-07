import Money from './components/Money.vue';
import useMoney from './composables/use-money';

export {
  Money,
  useMoney,
};

export default {
  install (app, options) {
    app.component('Money', Money);
    app.config.globalProperties.$useMoney = useMoney;
  }
};