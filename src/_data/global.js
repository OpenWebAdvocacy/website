
export function isProd() {
  return process.env.NODE_ENV === 'production';
}

export function hash() {
  return Date.now().toString(16);
}

export function random() {
  const segment = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return `${segment()}-${segment()}-${segment()}`;
}
