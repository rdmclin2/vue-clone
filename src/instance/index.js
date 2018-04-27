
/**
 * options: {
 *   el: '#el',
 *   data: {
 *
 *   }
 * }
 */
export default class Component {
  constructor(options) {
    this.$options = options;
    this._data = options.data;
    const el = this._el = document.querySelector(options.el);
    // const render = compile();
  }
}
