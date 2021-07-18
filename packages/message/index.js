
import LuMessage from './src/main';

/* istanbul ignore next */
LuMessage.install = function(Vue) {
  Vue.component(LuMessage.name, LuMessage);
};

export default LuMessage;