# `ts-object-paths` EXPERIMENTAL!

Given a Nested Object, relate paths with values. Uses template literal types -- it will fall back to `string` | `any` situationally on `TS<4.1`.

Uhh, not to be confused with `ts-object-path`. I should do better.

### Check out the API Reference

- [Api Reference](./docs/API.md)

### Code examples

```ts
interface BasePerson = {
  name: {
    first: string;
    last: string;
  };
  motto: string;
  nicknames: string[];
  age: number;
  favoriteNumbers: number[];
  rootStrPath: 'rootStrValue';
  arrayStrPath: 'arrayStrValue'[];
};

interface Person extends BasePerson {
  partner: BasePerson;
  friends: BasePerson[];
};

//
// Get all possible paths of an object
//
const anyPath: PathOf<Person>[] = [
  'name.first',
  'name.last',
  'motto',
  'nicknames.0',
  // etc
]

//
// Get paths that are assignable to a given value type, e.g., `string`:
//
const strMatches: PathMatchingValue<string, Person>[] = [
  'name.first',
  'name.last',
  'motto',
  'nicknames.0', // etc
  'partner.name.first', // etc
  'friends.0.nicknames.0', // etc
];
// @ts-expect-error these paths don't match `string`!
const badMatches: PathMatchingValue<string, Person>[] = [
  // nope, it's a number
  'age',
  // nope, not a "string", 'rootStrValue' is a constant
  'rootStrPath'
];

//
// Get the value of a given path:
//
const value: ValueMatchingPath<Person, "name.first"> = "it's a string";
// @ts-expect-error
const value: ValueMatchingPath<Person, "age"> = "NOT A STRING! ERROR!";
```

## Authors

- [John Rom](https://johnrom.com)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- TypeScript team for landing something as insane as template literal types.
- TypeScript discord community for putting up with a million questions.
