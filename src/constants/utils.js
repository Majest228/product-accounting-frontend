export const noop = () => {};

/**
 * @param {Promise} promise
 */
export const track = (promise) => new Promise((resolve) => promise.finally(resolve));
