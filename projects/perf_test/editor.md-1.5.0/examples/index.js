// 将datasets里的测试文件复制到当前文件夹
const fs = require('fs');
const path = require('path');
const filesToCopy = ['big_testdata.md', 'small_testdata.md', 'change_testdata.md'];

// 获取当前工作目录
const cwd = __dirname;

// 先删除当前目录下所有以.md结尾的文件
fs.readdir(cwd, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }
  files.forEach(file => {
    if (filesToCopy.includes(file)) {
      const filePath = path.join(cwd, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error('删除文件失败:', err);
        } else {
          console.log('已删除文件:', filePath);
        }
      });
    }
  });
});

// 要复制的文件路径
const sourceDir = '../../../../datasets';
const targetDir = cwd;

// 读取源目录并复制文件
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('读取源目录失败:', err);
    return;
  }
  files.forEach(file => {
    if (filesToCopy.includes(file)) {
      const sourceFilePath = path.join(sourceDir, file);
      const targetFilePath = path.join(targetDir, file);
      fs.copyFile(sourceFilePath, targetFilePath, (err) => {
        if (err) {
          console.error('复制文件失败:', err);
        } else {
          console.log('已复制文件:', sourceFilePath, '到', targetFilePath);
        }
      });
    }
  });
});