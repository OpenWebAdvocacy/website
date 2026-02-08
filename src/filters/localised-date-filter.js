export default (date, locale) => {
    let dateObject = new Date(date)

    return dateObject.toLocaleString(locale, {dateStyle: "long"});
};