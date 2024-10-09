import Editor from '@toast-ui/editor';

const editor = new Editor({
    el: document.querySelector('#editor'),
    previewStyle: 'vertical',
    height: "650px",
    minHeight: "650px"
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
    // editor.moveCursorToStart();
    editor.setMarkdown(changeText.default);
});