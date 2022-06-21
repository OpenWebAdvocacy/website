const fsPromises = require('node:fs/promises');
const path = require('path');


function formatBytesToSizeString(bytes) {
  const suffixes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const suffixIndex = Math.floor((String(bytes).length - 1) / 3);
  const scaledBytes = bytes / Math.pow(1000, suffixIndex);
  const decimals = (scaledBytes > 100 || suffixIndex === 0) ? 0 : 1;
  return `${scaledBytes.toFixed(decimals)}${suffixes[suffixIndex]}`;
}

async function fileToDetails(fileDir, fileName) {

  const fullPath = path.join(fileDir, fileName);
  const details = await fsPromises.stat(fullPath);

  return {
    name: fileName,
    size: formatBytesToSizeString(details.size),
    uri: `/files/${encodeURIComponent(fileName)}`
  }
}

module.exports = async function() {

  const filesDir = path.join(__dirname, '../files');
  const fileNames = await fsPromises.readdir(filesDir);
  const filePromises = fileNames.map(name => fileToDetails(filesDir, name));
  const files = await Promise.all(filePromises);
  files.sort((a, b) => a.name - b.name);

  return files;
};