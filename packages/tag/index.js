
import LuTag from './src/main';

/* istanbul ignore next */
LuTag.install = function(Vue) {
  Vue.component(LuTag.name, LuTag);
};

export default LuTag;