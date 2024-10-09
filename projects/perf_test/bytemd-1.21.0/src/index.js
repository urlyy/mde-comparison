import highlight  from '@bytemd/plugin-highlight'
import { Editor } from 'bytemd'
import 'bytemd/dist/index.css'
import 'highlight.js/styles/default.css'

const plugins = [
  highlight(),
]

const editor = new Editor({
  target: document.getElementById("editor"), // DOM to render
  props: {
    value: '',
    plugins,
  },
  mode: "split"
})

editor.$on('change', (e) => {
  editor.$set({ value: e.detail.value })
})

const bigText = await import("../../../../datasets/big_testdata.md")
const smallText = await import("../../../../datasets/small_testdata.md")
const changeText = await import("../../../../datasets/change_testdata.md")

console.log("加载完成")

document.getElementById("load-big").addEventListener("click", ()=>{
    editor.$set({ value: bigText.default })
});

document.getElementById("load-small").addEventListener("click", ()=>{
    editor.$set({ value: smallText.default })
});

document.getElementById("change").addEventListener("click", ()=>{
    editor.$set({ value: changeText.default })
});