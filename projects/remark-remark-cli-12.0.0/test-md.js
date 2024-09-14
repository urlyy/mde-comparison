import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
// import remarkGfm from 'remark-gfm'
import {unified} from 'unified'
import fs from 'fs'

const processor = unified()
  .use(remarkParse)
  // .use(remarkGfm)
  .use(remarkRehype,{allowDangerousHtml: true})
  .use(rehypeStringify)
  ;

const parse = async (md)=>{
  const res = await processor.process(md);
  return String(res);
}

const testSyntax = async()=>{
  console.log("Test Syntax:");
  const commonmark = JSON.parse(fs.readFileSync('../../datasets/commonmark.spec.json', 'utf8'));
  // const gfm = JSON.parse(fs.readFileSync('../../datasets/gfm_ext.spec.json', 'utf8'));
  // 测试commonmark通过率
  let commonmarkPass = 0;
  let commonmarkTotal = 0;
  for(const item of commonmark){
    commonmarkTotal += 1;
    let result = await parse(item.markdown);
    if(result == item.html.trimEnd()){
      commonmarkPass += 1;
    }
  }
  console.log(`commonmark: ${commonmarkPass}/${commonmarkTotal}`);
  // 测试gfm通过率
  // let gfmPass = 0;
  // let gfmTotal = 0;
  // for(const item of gfm){
  //   gfmTotal += 1;
  //   let result = await parse(item.markdown);
  //   if(result == item.html.trimEnd()){
  //     gfmPass += 1;
  //   }
  // }
  // console.log(`gfm: ${gfmPass}/${gfmTotal}`);
}

const testPerformance = async()=>{
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
  const parsePerformance = async(md,type)=>{
    // 测试cnt次，取平均值
    const cnt = 10;
    let totalSecond = 0;
    for(let _=0; _<cnt; _++){
      const start = process.hrtime.bigint();
      let result = await parse(md);
      const end = process.hrtime.bigint();
      const second = Number(end - start);
      totalSecond += second;
    }
    console.log(`parse ${type}耗时: ${(totalSecond / 1e6 / cnt).toFixed(5)} 毫秒`);
  }
  await parsePerformance(smallMD,"中小文本");
  await parsePerformance(bigMD,"大文本");
}

await testSyntax()
await testPerformance();