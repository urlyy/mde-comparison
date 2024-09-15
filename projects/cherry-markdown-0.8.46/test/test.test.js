
import fs from 'fs'
import CherryEngine from '../src/index.engine.core.js';

const cherryEngine = new CherryEngine({
    engine: {
      global: {
        classicBr: false
      },
      syntax: {
        header: {
          anchorStyle: 'none',
        },
      }
    }
});
const cleanHTML = (raw) => {
    // 处理换行回车
    let html = raw.replace(/\s*<br>\s*/gm, '\n');
    html = html.replace(/\s*<br \/>\s*/gm, '\n');
    html = html.replace(/(?<=>)\n(?=<)/gm, '');
    // 清理属性
    html = html.replace(/(?<=<)([^\/\s>]+)[^<]*?(?=>)/gm, (match, tag) => tag);
    // 清理首尾的多余空格
    html = html.trim();
    return html;
}
const parse = (md)=>{
    const html = cherryEngine.makeHtml(md)
    return html;
}


const testSyntax = ()=>{
    console.log("Test Syntax:");
    const commonmark = JSON.parse(fs.readFileSync('../../datasets/commonmark.spec.json', 'utf8'));
    // const gfm = JSON.parse(fs.readFileSync('../../datasets/gfm_ext.spec.json', 'utf8'));
    // 测试commonmark通过率
    let commonmarkPass = 0;
    let commonmarkTotal = 0;
    for(const item of commonmark){
        commonmarkTotal += 1;
        let result = cleanHTML(parse(item.markdown));
        if(result == cleanHTML(item.html)){
            commonmarkPass += 1;
        }
    }
    console.log(`commonmark: ${commonmarkPass}/${commonmarkTotal}`);
    // 测试gfm通过率
    // let gfmPass = 0;
    // let gfmTotal = 0;
    // for(const item of gfm){
    //   gfmTotal += 1;
    //   let result = cleanHTML(parse(item.markdown));
    //   if(result == cleanHTML(item.html)){
    //       gfmPass += 1;
    //   }
    // }
    // console.log(`gfm: ${gfmPass}/${gfmTotal}`);
}

const testPerformance = ()=>{
    console.log("Test Performance:");
    const bigMDPath = '../../datasets/big_commonmark.md';
    const smallMDPath = '../../datasets/small_commonmark.md';
    let bigMD;
    let smallMD;
    try {
        bigMD = fs.readFileSync(bigMDPath, 'utf8');
        smallMD = fs.readFileSync(smallMDPath, 'utf8');
    } catch (err) {
        console.error('读取文件时发生错误:', err);
    }
    const parsePerformance = (md,type)=>{
        // 测试cnt次，取平均值
        const cnt = 10;
        let totalSecond = 0;
        for(let _=0; _<cnt; _++){
            const start = process.hrtime.bigint();
            let result = parse(md);
            const end = process.hrtime.bigint();
            const second = Number(end - start);
            totalSecond += second;
        }
        console.log(`parse ${type}耗时: ${(totalSecond / 1e6 / cnt).toFixed(5)} 毫秒`);
    }
    parsePerformance(smallMD,"中小文本");
    parsePerformance(bigMD,"大文本");
}

test(`cherry-markdown test`, () => {
  testSyntax();
  testPerformance();
});
