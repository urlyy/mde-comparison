import Vditor from "vditor";

const editor = new Vditor('editor',{
    mode: "sv",
    minHeight: 700,
    cache: {
        enable: false
    },
});

const bigText = await import("../../../../datasets/big_testdata.md")
const smallText = await import("../../../../datasets/small_testdata.md")
const changeText = await import("../../../../datasets/change_testdata.md")

console.log("加载完成")

document.getElementById("load-big").addEventListener("click", ()=>{
    editor.insertValue(bigText.default);
});

document.getElementById("load-small").addEventListener("click", ()=>{
    editor.insertValue(smallText.default);
});

document.getElementById("change").addEventListener("click", ()=>{
    editor.insertValue(changeText.default);
});