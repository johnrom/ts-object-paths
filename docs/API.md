
<a name="readmemd"></a>

@johnrom/path-helpers

# @johnrom/path-helpers

## Table of contents

### Modules

- [path-helpers](#modulespath_helpersmd)
- [path-helpers.untyped](#modulespath_helpers_untypedmd)


<a name="modulespath_helpersmd"></a>

[@johnrom/path-helpers](#readmemd) / path-helpers

# Module: path-helpers

## Table of contents

### Type aliases

- [PathMatchingValue](#pathmatchingvalue)
- [PathOf](#pathof)
- [ValueMatchingPath](#valuematchingpath)

## Type aliases

### PathMatchingValue

Ƭ **PathMatchingValue**<Value, Values\>: *object* *extends* Values ? *any* : *StringOnlyPathOf*<Values\> *extends* *infer* Path ? Path *extends* *StringOnlyPathOf*<Values\> ? [*ValueMatchingPath*](#valuematchingpath)<Values, Path\> *extends* Value ? *RenumerateTemplate*<Path\> & [*PathOf*](#pathof)<Values\> : *never* : *never* : *never*

Gets PathOf<Values> which match the requested type. Given:

`Values = { name: { first: string, last: string } }`,

`PathMatchingValue<Values, string> = "name.first" | "name.last"`

#### Type parameters:

Name |
:------ |
`Value` |
`Values` |

Defined in: path-helpers.ts:51

___

### PathOf

Ƭ **PathOf**<Values\>: *object* *extends* Values ? *any* : *FlattenPathTuples*<RecursivelyTuplePaths<Values\>\> & *string*

Gets any path of a given Values object. Given:

`Values = { name: { first: string } }`,

`PathOf<Values> = "name" | "name.first"`

#### Type parameters:

Name |
:------ |
`Values` |

Defined in: path-helpers.ts:8

___

### ValueMatchingPath

Ƭ **ValueMatchingPath**<Values, Path\>: *string* *extends* Path ? *any* : *object* *extends* Values ? *any* : Values *extends* readonly *infer* SingleValue[] ? Path *extends* \`${number}.${infer NextPath}\` ? NextPath *extends* [*PathOf*](#pathof)<Values[*number*]\> ? [*ValueMatchingPath*](#valuematchingpath)<Values[*number*], NextPath\> : *never* : SingleValue : Path *extends* keyof Values ? Values[Path] : Path *extends* \`${infer Key}.${infer NextPath}\` ? Key *extends* keyof Values ? NextPath *extends* [*PathOf*](#pathof)<Values[Key]\> ? [*ValueMatchingPath*](#valuematchingpath)<Values[Key], NextPath\> : *never* : *never* : *never*

Gets the Value at a nested Path. Given:

`Values = { name: { first: string } }`,

`ValueMatchingPath<Values, "name.first"> = string`

#### Type parameters:

Name | Type |
:------ | :------ |
`Values` | - |
`Path` | [*PathOf*](#pathof)<Values\> |

Defined in: path-helpers.ts:19


<a name="modulespath_helpers_untypedmd"></a>

[@johnrom/path-helpers](#readmemd) / path-helpers.untyped

# Module: path-helpers.untyped

Legacy Path Helpers that use simple string / any correlation for old TypeScript versions.

TypeScript >=4.1 will use `path-helpers.ts`. See that file for actual documentation of these methods.

## Table of contents

### Type aliases

- [PathMatchingValue](#pathmatchingvalue)
- [PathOf](#pathof)
- [ValueMatchingPath](#valuematchingpath)

## Type aliases

### PathMatchingValue

Ƭ **PathMatchingValue**<Value, Values\>: *object* *extends* Values ? *any* : *string*

For TypeScript<4.1, this returns string or any

#### Type parameters:

Name |
:------ |
`Value` |
`Values` |

Defined in: path-helpers.untyped.ts:22

___

### PathOf

Ƭ **PathOf**<Values\>: *object* *extends* Values ? *any* : *string*

For TypeScript<4.1, this returns string or any

#### Type parameters:

Name |
:------ |
`Values` |

Defined in: path-helpers.untyped.ts:10

___

### ValueMatchingPath

Ƭ **ValueMatchingPath**<Values, Path\>: *any*

For TypeScript<4.1, this returns any

#### Type parameters:

Name | Type |
:------ | :------ |
`Values` | - |
`Path` | *string* |

Defined in: path-helpers.untyped.ts:16
