import { parse } from './html-parser';
import { generate } from './codegen';

const cache = Object.create(null);

export function compile(html) {
  const htmlTrim = html.trim();
  const hit = cache[htmlTrim];
  if (hit) return hit;
  const genData = cache[htmlTrim] = generate(parse(htmlTrim));
  return genData;  // eslint-disable-line
}
