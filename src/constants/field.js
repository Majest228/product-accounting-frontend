export default class Field {
  /**
   * @param {string} name
   * @param {string} text
   * @param {boolean} [required]
   */
  constructor(name, text, required = true) {
    this.name = name;
    this.text = text;
    this.required = required;
    this.reference = null;
  }

  setReference(reference) {
    this.reference = reference;
    return this;
  }

  get isReference() {
    return this.reference !== null;
  }
}
