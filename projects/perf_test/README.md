# 页面性能测试

环境：chrome (版本: 129.0.6668.90 (64位))

## 1. 构建



### editor.md

```shell
cd editor.md-1.5.0/examples
node index.js
```

打开`examples/test.html`

- 大文本初次渲染

![](./assets/editormd_big.jpg)

- 大文本下变更
![](./assets/editormd_big_change.jpg)

- 小文本初次渲染
![](./assets/editormd_small.jpg)

- 小文本下变更
![](./assets/editormd_small_change.jpg)



### tui.editor

```shell
cd tui.editor-3.2.2
npm i
npm run build # 将 src/index.js 打包为 dist/bundle.js
```
然后使用 `vscode` 的 `liveserver` 插件打开`dist/index.html`

- 大文本初次渲染(浏览器内存超限)

![](./assets/tui_big.jpg)

- 大文本下变更
N/A

- 小文本初次渲染
![](./assets/tui_small.jpg)

- 小文本下变更
![](./assets/tui_small_change.jpg)

### milkdown

```shell
cd milkdown-7.5.4
npm i
npm run build # 将 src/index.js 打包为 dist/bundle.js
```
然后使用 `vscode` 的 `liveserver` 插件打开`dist/index.html`

- 大文本初次渲染

![](./assets/milkdown_big.jpg)

- 大文本下变更
![](./assets/milkdown_big_change.jpg)


- 小文本下
![](./assets/milkdown_small.jpg)

- 小文本下变更
![](./assets/milkdown_small_change.jpg)


### vditor

```shell
cd vditor-3.10.4
npm i
npm run build # 将 src/index.js 打包为 dist/bundle.js
```
然后使用 `vscode` 的 `liveserver` 插件打开`dist/index.html`

- 大文本初次渲染

![](./assets/vditor_big.jpg)

- 大文本下变更
![](./assets/vditor_big_change.jpg)


- 小文本下
![](./assets/vditor_small.jpg)

- 小文本下变更
![](./assets/vditor_small_change.jpg)

### bytemd

```shell
cd bytemd-1.21.0
npm i
npm run build # 将 src/index.js 打包为 dist/bundle.js
```
然后使用 `vscode` 的 `liveserver` 插件打开`dist/index.html`

- 大文本初次渲染

![](./assets/bytemd_big.jpg)

- 大文本下变更
![](./assets/bytemd_big_change.jpg)


- 小文本下
![](./assets/bytemd_small.jpg)

- 小文本下变更
![](./assets/bytemd_small_change.jpg)

### EasyMDE

```shell
cd EasyMDE-2.18.0
node index.js
```

然后使用 `vscode` 的 `liveserver` 插件打开`examples/test.html`

- 大文本初次渲染

![](./assets/easymde_big.jpg)

- 大文本下变更
![](./assets/easymde_big_change.jpg)


- 小文本下
![](./assets/easymde_small.jpg)

- 小文本下变更
![](./assets/easymde_small_change.jpg)

### cherry-markdown

```shell
cd cherry-markdown-0.8.46
npm i
npm run build # 将 src/index.js 打包为 dist/bundle.js
```
然后使用 `vscode` 的 `liveserver` 插件打开`dist/index.html`

- 大文本初次渲染

![](./assets/cherry_big.jpg)

- 大文本下变更(内存超限)
![](./assets/cherry_big_change.jpg)


- 小文本下
![](./assets/cherry_small.jpg)

- 小文本下变更
![](./assets/cherry_small_change.jpg)

## 2. 打开页面后测试方法

1. 点击 `加载大文本` 按钮，查看初次渲染大文本的性能
2. 在第一行上新建一个空行，使光标落在第一个空行的开头(即手动将光标移到第一行)
3. 点击 `文本变更`按钮，查看大文本下变更文本的性能
4. 刷新页面
5. 点击 `加载小文本` 按钮，查看初次渲染小文本的性能
6. 点击 `文本变更`按钮，查看小文本下变更文本的性能



## 性能查看方法

从点击事件开始，到第一次显示出预览区出现稳定的内容的帧截图附近任务基本结束的时刻，统计这段时间间隔以进行不同项目的比较。(所以可能有200ms左右之内，可以容忍的误差)
