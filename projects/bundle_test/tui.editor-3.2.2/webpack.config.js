const path = require('path');

module.exports = {
    mode: 'production', // 使用生产模式以优化输出
    entry: './src/index.js', // 入口文件
    output: {
        filename: 'bundle.js', // 输出文件名
        path: path.resolve(__dirname, 'dist'), // 输出路径
        clean: true, // 清理输出目录
    },
};