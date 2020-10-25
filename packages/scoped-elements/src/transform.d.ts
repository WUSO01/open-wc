/**
 * Obtains the cached strings array with resolved scoped elements or creates it
 *
 * @exports
 * @param {TemplateStringsArray} strings
 * @param {ScopedElementsMap} scopedElements
 * @param {Map<TemplateStringsArray, TemplateStringsArray>} templateCache
 * @param {Map<string, string>} tagsCache
 * @returns {TemplateStringsArray}
 */
export function transform(strings: TemplateStringsArray, scopedElements: ScopedElementsMap, templateCache: Map<TemplateStringsArray, TemplateStringsArray>, tagsCache: Map<string, string>): TemplateStringsArray;
export type ScopedElementsMap = {
    [key: string]: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
};
