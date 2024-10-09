
# 打包体积测试


各测试案例的建立方式为：
1. `npm init -y`
2. `npm install --save-dev webpack webpack-cli`
2. `npm install 待测项目@版本`
3. 创建 `webpack.config.js` 并写入
```javascript
const path = require('path');

module.exports = {
    mode: 'production', // 使用生产模式以优化输出
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出路径
        clean: true, // 清理输出目录
    },
};
```

4. 创建`src/index.js`并写入使用一下待测项目的代码。如

```
import Cherry from 'cherry-markdown';

const cherryInstance = new Cherry({
  id: '',
  value: '',
});
```

5. 进行打包和压缩

```
npx webpack
gzip -k dist/bundle.js
```

6. 查看`bundle.js` 和 `bundle.js.gz` 文件的大小

```
# for Windows
dir dist
# for Linux
ls -lh dist/
```

