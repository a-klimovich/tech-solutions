import { CURRENCY_FORMATS } from '../config/currency';

export const currensyFormatter = (value, format) => {
  const { locales, currency } = CURRENCY_FORMATS[format];
  
  return Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
  }).format(value);
}