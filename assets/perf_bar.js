// https://echarts.apache.org/examples/zh/editor.html?c=dataset-simple0
option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ['项目', '小文本初次渲染','小文本变更后渲染',"大文本初次渲染","大文本变更后渲染"],
      ['tui.editor', 4.024,0.332,0,0],
      ['editor.md', 1.606,0.344,5.110,0.476],

      ['vditor', 4.700,3.075,45.342,33.797],
      ['cherry-markdown', 0.786,3.759,2.657,0],
      ['EasyMDE', 1.107,0.150,4.252,0.574],
      ['bytemd', 1.367,0.329,8.556,0.365],
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
    },
    { 
      type: 'bar', 
      color: '#23BAC5' // 使用特定的颜色
    }
  ],
};