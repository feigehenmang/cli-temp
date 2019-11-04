# cli-temp
一个用来简化操作的命令行工具
[掘金文章地址](https://juejin.im/post/5db9bbc0518825646350037c?utm_source=gold_browser_extension)
## 创建步骤即详解
1. npm init -y // 初始化项目
2. 创建index.js
3. 创建bin文件夹, 并且新建可执行文件
4. 下载 esm  `yarn add esm`, 为了可以使用 es6 的模块语法
5. 编辑 package.json 中的bin字段, 和可执行文件对应
6. npm link  创建本地链接
7. yarn add commander 为了解析参数

