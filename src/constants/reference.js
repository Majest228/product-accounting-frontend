const defaultRenderOption = (option) => option.label;
const defaultGetLabel = (option) => option.id;
const defaultToOption = (value) => ({ label: value });

export default class Reference {
  constructor(
    getOptions,
    getLabel = defaultGetLabel,
    toOption = defaultToOption,
    renderOption = defaultRenderOption
  ) {
    this.getOptions = getOptions;
    this.getLabel = getLabel;
    this.toOption = toOption;
    this.renderOption = renderOption;
  }
}
