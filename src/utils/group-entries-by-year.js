module.exports = entries => {
  const yearlyMap = entries.reduce((acc, item) => {
    const year = new Date(item.date).getFullYear();
    if (!acc.has(year)) acc.set(year, []);
    acc.get(year).push(item);
    return acc;
  }, new Map());
  const yearlyData = Array.from(yearlyMap.entries()).map(([ year, entries ]) => ({
    year,
    entries: entries.sort((a, b) => new Date(b.date) - new Date(a.date))
  })).sort((a, b) => b.year - a.year);
  return yearlyData;
}