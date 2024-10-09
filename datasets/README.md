# 语法规范
- gfm-0.29: https://github.github.com/gfm

- commommark-0.31.2: https://spec.commonmark.org/0.31.2


# NOTE
下面那块`数据来源`的数据未使用，改为基于 https://commonmark.org/help/ 构建了example.md，并在此基础上构建测试数据。

- big_testdata = `500` * example.md

- small_testdata = `125` * example.md

```javascript
const fs = require('fs');

const md = fs.readFileSync('example.md', 'utf-8');
const writeTestData = (filename,num)=>{
    // 读取文件内容
    let result = Array(num).fill(md).join('\n');
    fs.writeFile(filename, result, (err) => {
        if (err) {
            console.error('写入Markdown时发生错误:', err);
            return;
        }
        console.log('Markdown已成功写入。');
    });
}

writeTestData("big_testdata.md",500);
writeTestData("small_testdata.md",125);
```
change_testdata为大模型生成的。

# ~~数据来源(因部分解析器处理后报错，不再使用)~~
- GFM 似乎没有直接下载测试集的接口，可以通过简单python爬虫将页面上的example全爬下来当测试集。
    ```python
    import requests
    from bs4 import BeautifulSoup
    import json
    
    def fetch_and_parse(url):
        response = requests.get(url=url)
        if response.status_code != 200:
            print(f"Failed to retrieve data from {url}, status code: {response.status_code}")
            return
        soup = BeautifulSoup(response.text, 'lxml')
        items = soup.select('.definition , .example')
        cur_section = ""
        cur_idx = 1
        json_data = []
        for item in items:
            className = item.get_attribute_list('class')[0]
            if className=="definition":
                section_tag = item.select_one('span')
                if section_tag is None:
                    continue
                cur_section = section_tag.next_sibling.get_text().strip()
            elif className=="example":
                md = item.select_one('div:nth-child(2) code')
                html = item.select_one('div:nth-child(3) code')
                json_data.append({
                    "markdown":md.get_text().replace('→','\t'),
                    "html":html.get_text().replace('→','\t'),
                    "example":cur_idx,
                    "section":cur_section,
                })
                cur_idx += 1
        with open('gfm.spec.json', 'w', encoding='utf-8') as f:
            f.write(json.dumps(json_data, indent=4, ensure_ascii=False))
    
    url = 'https://github.github.com/gfm/'
    fetch_and_parse(url)
    ```
    但是我改为使用了 https://github.com/markedjs/marked/blob/master/test/specs/gfm/gfm.0.29.json 中的数据，对应`gfm_ext.spec.json`，只包括了 gfm 相较 commonmark 新增的语法。

- 文本数据：基于commonmark.spec.json，小文本为 1 倍，大文本为 20 倍
    ```javascript
    const data = require('./commonmark.spec.json');
    
    let md = "";
    for(let _=0; _<10; _++){
        md += data.map(item => item.markdown).join('\n');
    }
    
    const fs = require('fs');
    fs.writeFile('big_commonmark.md', md, (err) => {
        if (err) {
            console.error('写入Markdown时发生错误:', err);
            return;
        }
        console.log('Markdown已成功写入。');
    });
    ```
    > 部分编辑器无法成功解析，并且报错

    ![](../assets/parse_error.jpg)