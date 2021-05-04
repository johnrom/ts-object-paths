/**
 * Legacy Path Helpers that use simple string / any correlation for old TypeScript versions.
 *
 * TypeScript >=4.1 will use `path-helpers.ts`. See that file for actual documentation of these methods.
 */

/**
 * For TypeScript<4.1, this returns string or any
 */
export type PathOf<Values> = object extends Values ? any : string;

/**
 * For TypeScript<4.1, this returns any
 */
// @ts-ignore none of these are used
export type ValueMatchingPath<Values, Path extends string> = any;

/**
 * For TypeScript<4.1, this returns string or any
 */
// @ts-ignore none of these are used
export type PathMatchingValue<Value, Values> = object extends Values
  ? any
  : // infer individual paths
    string;
