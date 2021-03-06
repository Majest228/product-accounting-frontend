import EventEmitter from './eventEmitter';

export const noop = () => {};
export const promiseNoop = () => new Promise((resolve) => resolve());
export const emptyEvents = new EventEmitter();
export const prepareDataForExport = (data, columns) => {
  return data.map((entry) => columns.map((column) => entry[column.name]));
};
/**
 * @param {Promise} promise
 */
export const track = (promise) => new Promise((resolve) => promise.finally(resolve));
export const debounce = (handle, duration = 0) => {
  let timeout = null;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => handle.apply(this, args), duration);
  };
};
