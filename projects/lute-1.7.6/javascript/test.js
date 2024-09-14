require("./lute.min.js");

const lute = Lute.New();

const testSyntax = ()=>{
  console.log("Test Syntax:");
  const commonmark = require('../../../datasets/commonmark.spec.json');
  // const gfm = require('../../../datasets/gfm_ext.spec.json');
  // 测试commonmark通过率
  let commonmarkPass = 0;
  let commonmarkTotal = 0;
  commonmark.forEach(item=>{
    commonmarkTotal += 1;
    let result = lute.MarkdownStr("", item.markdown);
    if(result === item.html){
      commonmarkPass += 1;
    }
  })
  console.log(`commonmark: ${commonmarkPass}/${commonmarkTotal}`);
  // 测试gfm通过率
  // let gfmPass = 0;
  // let gfmTotal = 0;
  // gfm.forEach(item=>{
  //   gfmTotal += 1;
  //   let result = lute.MarkdownStr("", item.markdown);
  //   if(result === item.html){
  //     gfmPass += 1;
  //   }
  //   console.log("==="+result + "\n");
  //   console.log("---"+item.html)
  // })
  // console.log(`gfm: ${gfmPass}/${gfmTotal}`);
}

const testPerformance = ()=>{
  console.log("Test Performance:");
  const fs = require('fs');
  const bigMDPath = '../../../datasets/big_commonmark.md';
  const smallMDPath = '../../../datasets/small_commonmark.md';
  let bigMD;
  let smallMD;
  try {
      bigMD = fs.readFileSync(bigMDPath, 'utf8');
      smallMD = fs.readFileSync(smallMDPath, 'utf8');
  } catch (err) {
      console.error('读取文件时发生错误:', err);
  }
  const parse = (md,type)=>{
    // 测试cnt次，取平均值
    const cnt = 10;
    let totalSecond = 0;
    for(let _=0; _<cnt; _++){
      const start = process.hrtime.bigint();
      let result = lute.MarkdownStr("", md);
      const end = process.hrtime.bigint();
      const second = Number(end - start);
      totalSecond += second;
    }
    console.log(`parse ${type}耗时: ${(totalSecond / 1e6 / cnt).toFixed(5)} 毫秒`);
  }
  parse(smallMD,"中小文本");
  parse(bigMD,"大文本");
}

testSyntax();
testPerformance();