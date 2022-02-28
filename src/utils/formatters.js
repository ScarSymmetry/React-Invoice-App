export const numberFormatter = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
});
export const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'medium',
});
