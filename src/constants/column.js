export default class Column {
  /**
   * @param {string} name
   * @param {string} text
   * @param {boolean} [sortable]
   */
  constructor(name, text, sortable = true) {
    this.name = name;
    this.text = text;
    this.sortable = sortable;
  }
}
