此为各项目进行性能测试的文件夹

测试数据在 [datasets文件夹](../datasets)

版本：

- Node: v20.16.0
- Golang: go1.22.1 windows/amd64

TODO：尽量保持相同，不要有的 sanitize 有的不弄

# lute

见 [test.js](./lute-1.7.6/javascript/test.js)

似乎需要golang环境(lute是用go写的)

```javascript
cd lute-1.7.6/javascript
node test.js
```

# remark

见 [test-md.js](./remark-remark-cli-12.0.0/test-md.js)

```javascript
cd remark-remark-cli-12.0.0
npm install
node test-md.js
```

# marked

见 [test.js](./marked-14.0.0/test/test.js)

```
npm install --force
npm run build
node test\test.js
```

# tui.editor

见 [test.ts](./tui.editor-editor-3.2.2/libs/toastmark/src/__test__/test.ts)

```
cd tui.editor-editor-3.2.2
npm install
cd libs/toastmark
npx tsx src/__test__/test.ts
```

# cherry-markdown
见 [test.test.js](./cherry-markdown-0.8.46/test/test.test.js)
```
cd cherry-markdown-0.8.46
npm install
jest test.test.js
```

