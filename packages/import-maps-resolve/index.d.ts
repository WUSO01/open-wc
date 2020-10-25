export type ImportMap = import("./src/types").ImportMap;
export type ScopesMap = {
    [x: string]: Record<string, string>;
};
export type SpecifierMap = {
    [x: string]: string;
};
export type ParsedImportMap = import("./src/types").ParsedImportMap;
export type ParsedScopesMap = {
    [x: string]: Record<string, URL>;
};
export type ParsedSpecifierMap = {
    [x: string]: URL;
};
export const parseFromString: (input: string, baseURL: URL) => import("./src/types").ParsedImportMap;
export const parse: (input: import("./src/types").ImportMap, baseURL: URL) => import("./src/types").ParsedImportMap;
export const resolve: (specifier: string, parsedImportMap: import("./src/types").ParsedImportMap, scriptURL: URL) => {
    resolvedImport: URL;
    matched: boolean;
};