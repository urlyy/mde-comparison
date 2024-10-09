import Cherry from 'cherry-markdown';
import 'cherry-markdown/dist/cherry-markdown.css';

const editor = new Cherry({
    id: 'editor',
});

const bigText = await import("../../../../datasets/big_testdata.md")
const smallText = await import("../../../../datasets/small_testdata.md")
const changeText = await import("../../../../datasets/change_testdata.md")

console.log("加载完成")

document.getElementById("load-big").addEventListener("click", ()=>{
    editor.setMarkdown(bigText.default);
});

document.getElementById("load-small").addEventListener("click", ()=>{
    editor.setMarkdown(smallText.default);
});

document.getElementById("change").addEventListener("click", ()=>{
    editor.setMarkdown(changeText.default);
});