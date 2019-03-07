import { shape, number, string, oneOf } from 'prop-types';

export const phraseType = shape({
  id: number,
  text: string,
  cCount: number,
  rCount: number,
});
