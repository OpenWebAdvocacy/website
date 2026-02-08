export default (date, locale) => {
  const dateObject = new Date(date)

  return dateObject.toLocaleString(locale, {dateStyle: "long"});
};