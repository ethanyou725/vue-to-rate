import vratings from './vratings/ratings.vue'

const vrate = {

  install(Vue, options) {
    Vue.component('vrate', vratings)
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default vrate;
