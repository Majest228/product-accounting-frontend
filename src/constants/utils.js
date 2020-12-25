import EventEmitter from './eventEmitter';

export const noop = () => {};
export const promiseNoop = () => new Promise((resolve) => resolve());
export const emptyEvents = new EventEmitter();

/**
 * @param {Promise} promise
 */
export const track = (promise) => new Promise((resolve) => promise.finally(resolve));
