import { parse } from './html-parser';
import { generate } from './codegen';

const cache = Object.create(null);

export default function compile(html) {
  const htmlTrim = html.trim();
  const hit = cache[htmlTrim];
  return hit || (cache[htmlTrim] = generate(parse(htmlTrim))); // eslint-disable-line
}
