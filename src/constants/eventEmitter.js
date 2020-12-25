export default class EventEmitter {
  /**
   * Создает механизм вызова и добавления пользовательских событий.
   */
  constructor() {
    /**
     * @type Map<string, function (...args): void>
     * @private
     */
    this.handlers = new Map();
  }

  /**
   * Вызывает событие `name` с переданными аргументами.
   * @param {string} name Название события
   * @param {...any} args Аргументы
   */
  emit(name, ...args) {
    if (this.handlers.has(name)) {
      const handler = this.handlers.get(name);

      handler(...args);
    }
  }

  /**
   * Добавляет прослушивание нового события.
   * @param {string} name Название события
   * @param {function (...args): void} handler Функция-обработчик
   */
  on(name, handler) {
    this.handlers.set(name, handler);
  }
}
