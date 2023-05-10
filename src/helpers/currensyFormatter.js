import { CURRENCY_FORMATS } from '../config/currency';

export const currensyFormatter = (value, format) => {
  let currency = Intl.NumberFormat(CURRENCY_FORMATS[format].locales, {
    style: 'currency',
    currency: CURRENCY_FORMATS[format].currency,
  });

  return currency.format(value);
}