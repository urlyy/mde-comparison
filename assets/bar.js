// https://echarts.apache.org/examples/zh/editor.html?c=dataset-simple0
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['项目', 'star/100','npm下载量/k',"2024/9/16距离上一次commit的时间/month"],
      ['tui.editor', 170.94, 328, 18],
      ['editor.md', 137.95, 4.8, 111],
      ['milkdown', 88.17, 1.2, 0.75],
      ['vditor', 82.74, 93, 5],
      ['cherry-markdown', 35.01, 2.4, 1],
      ['EasyMDE', 23.87, 288, 20],
      ['bytemd', 7.14, 9.9, 8],
    ]
  },
  xAxis: { type: 'category' },
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
 series: [
    { 
      type: 'bar', 
      color: '#8ECFC9' // 使用特定的颜色
    },
    { 
      type: 'bar', 
      color: '#FFBE7A' // 使用特定的颜色
    },
    { 
      type: 'bar', 
      color: '#FA7F6F' // 使用特定的颜色
    }
  ],
};