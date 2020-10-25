/**
 * Gets a scoped tag name from the cache or generates a new one and defines the element if needed
 *
 * @exports
 * @param {string} tagName
 * @param {typeof HTMLElement} klass
 * @param {Map<string, string>} tagsCache
 * @returns {string}
 */
export function registerElement(tagName: string, klass: typeof HTMLElement, tagsCache?: Map<string, string>): string;
/**
 * Defines a lazy element
 *
 * @param {string} tagName
 * @param {typeof HTMLElement} klass
 * @param {Map<string, string>} tagsCache
 */
export function defineScopedElement(tagName: string, klass: typeof HTMLElement, tagsCache: Map<string, string>): void;
