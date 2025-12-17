import {readdir, stat} from 'node:fs/promises';
import {join} from 'path';

const __dirname = import.meta.dirname;

function formatBytesToSizeString(bytes) {
  const suffixes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const suffixIndex = Math.floor((String(bytes).length - 1) / 3);
  const scaledBytes = bytes / Math.pow(1000, suffixIndex);
  const decimals = scaledBytes > 100 || suffixIndex === 0 ? 0 : 1;
  return `${scaledBytes.toFixed(decimals)}${suffixes[suffixIndex]}`;
}

async function fileToDetails(fileDir, fileName) {
  const fullPath = join(fileDir, fileName);
  const details = await stat(fullPath);

  return {
    name: fileName,
    size: formatBytesToSizeString(details.size),
    uri: `/files/${encodeURIComponent(fileName)}`
  };
}

export default async function () {
  const filesDir = join(__dirname, '../files');
  const fileNames = await readdir(filesDir);
  const filePromises = fileNames.map(name => fileToDetails(filesDir, name));
  const files = await Promise.all(filePromises);
  files.sort((a, b) => a.name - b.name);

  return files;
}
