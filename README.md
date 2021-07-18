# Vue npm组件库框架

该框架用于快速建立npm组件库

### 主要文件结构

```
|-lib //打包后的文件
|-packages // 组件源文件
|-src // 用于测试验证
```



## 安装依赖

```
npm install
```

### 本地启动
```
npm run serve
```

### 打包
```
npm run build-pkg
```

### Lints and fixes files
```
npm run lint
```
### 发布
```
npm publish --access public
```

## npm
```
npm login

npm whoami // 查询登录状态
```


### 组件库全部引用

```js
import PersonalComponents from '@luxiaodan/personal-component'
import '@luxiaodan/personal-component/lib/personal-component.css'

Vue.use(PersonalComponents)
```

### 组件库按需引入
```js
// babel.config.js

'plugins': [
  [
    'component',
     {
       libraryName: "@luxiaodan/personal-component",
       style: true
     }
   ]
  ],

// main.js

import { Message } from '@luxiaodan/personal-component'
Vue.component(Message.name, Message);

```

