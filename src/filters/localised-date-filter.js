import dateFilter from "./date-filter.js";

export default (date, locale) => {
  const dateObject = new Date(date)

  if (locale == "en") {
    return dateFilter(date)
  }

  return dateObject.toLocaleString(locale, {dateStyle: "long"});
};