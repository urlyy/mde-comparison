# 语法规范
- gfm-0.29: https://github.github.com/gfm

- commommark-0.31.2: https://spec.commonmark.org/0.31.2

# Note
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
    但是我改为使用了 https://github.com/markedjs/marked/blob/master/test/specs/gfm/gfm.0.29.json 中的数据，只包括了 gfm 相较commonmark新增的语法。

- 中小文本：在每个section中选取2个
    ```javascript
    const data = require('./commonmark.spec.json');
    
    const groupData = data.reduce((groups, item) => {
        const section = item.section;
        if (!groups[section]) {
        	groups[section] = [];
        }
        groups[section].push(item);
        return groups;
    }, {});
    
    let md = "";
    for(let k in groupData){
        for(let _=0; _<2; _++){
            const items = groupData[k];
            const idx = Math.floor(Math.random() * items.length);
            md += items[idx].markdown + '\n';
            data.push(items[idx]);
        }
    }
    
    const fs = require('fs');
    fs.writeFile('small_commonmark.md', md, (err) => {
        if (err) {
            console.error('写入Markdown时发生错误:', err);
            return;
        }
        console.log('Markdown已成功写入。');
    });
    ```

- 超大文本：10倍 xx.spec.json
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