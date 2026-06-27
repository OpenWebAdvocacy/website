import moment from 'moment';

export default value => {
  const dateObject = moment( new Date( value ) );
  return `${dateObject.format('Do')} of ${dateObject.format('MMMM YYYY')}`;
};
