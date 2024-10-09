// https://echarts.apache.org/examples/zh/editor.html?c=dataset-simple0
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['项目', '中小文本解析','大文本解析'],
      ['lute', 408.20,7131.92],
      ['remark', 363.83,1702.94],
      ['marked', 30.12,105.21],
      ['tui.editor', 78.59,274.12],
      ['cherry-markdown', 706.99,2967.54],
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
  ],
};