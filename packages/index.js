
import LuMessage from './message/index.js';
import LuTag from './tag/index.js';

const components = [
  LuMessage,
  LuTag
];

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component);
  });

  // components.forEach(component => {
  //   Vue.component(component.name, component);
  // });
};

export default {
  install,
  LuMessage,
  LuTag
};
