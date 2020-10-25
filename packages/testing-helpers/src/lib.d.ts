export function isValidRenderArg(x: any): boolean;
export function isIterable(object: any): boolean;
/**
 * Node#nodeType enum
 */
export type NODE_TYPES = number;
/**
 * Node#nodeType enum
 * @readonly
 * @enum {number}
 */
export const NODE_TYPES: Readonly<{
    ELEMENT_NODE: number;
    TEXT_NODE: number;
    COMMENT_NODE: number;
    DOCUMENT_FRAGMENT_NODE: number;
}>;