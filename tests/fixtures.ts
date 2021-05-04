import {
  PathMatchingValue,
  PathOf,
  ValueMatchingPath,
} from '../src/path-helpers';

type BasePerson = {
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

type Person = BasePerson & {
  partner: BasePerson;
  friends: BasePerson[];
};

const basePerson: BasePerson = {
  name: {
    first: '',
    last: '',
  },
  motto: '',
  nicknames: [''],
  age: 21,
  favoriteNumbers: [1],
  rootStrPath: 'rootStrValue',
  arrayStrPath: ['arrayStrValue'],
};

const person: Person = {
  ...basePerson,
  partner: basePerson,
  friends: [basePerson, basePerson],
};

const strMatches: PathMatchingValue<string, Person> = 'motto';
const strsMatches: PathMatchingValue<string[], Person> = 'nicknames';
const str1Matches: PathMatchingValue<string, Person> = 'nicknames.1';
const numMatches: PathMatchingValue<number, Person> = 'age';
const numsMatches: PathMatchingValue<number[], Person> = 'favoriteNumbers';
const num1Matches: PathMatchingValue<number, Person> = 'favoriteNumbers.1';
const objMatches: PathMatchingValue<BasePerson, Person> = 'partner';
const objstrMatches: PathMatchingValue<string, Person> = 'partner.motto';
const objstrsMatches: PathMatchingValue<string[], Person> = 'partner.nicknames';
const objstr1Matches: PathMatchingValue<string, Person> = 'partner.nicknames.1';
const objnumMatches: PathMatchingValue<number, Person> = 'partner.age';
const objnumsMatches: PathMatchingValue<number[], Person> =
  'partner.favoriteNumbers';
const objnum1Matches: PathMatchingValue<number, Person> =
  'partner.favoriteNumbers.1';
const obj1Matches: PathMatchingValue<BasePerson, Person> = 'friends.1';
const obj1strMatches: PathMatchingValue<string, Person> = 'friends.1.motto';
const obj1numMatches: PathMatchingValue<number, Person> = 'friends.1.age';
const obj1numsMatches: PathMatchingValue<number[], Person> =
  'friends.1.favoriteNumbers';
const obj1num1Matches: PathMatchingValue<number, Person> =
  'friends.1.favoriteNumbers.1';

// @ts-expect-error
const strFails: PathMatchingValue<number, Person> = 'motto';
// @ts-expect-error
const strsFails: PathMatchingValue<number, Person[]> = 'nicknames';

// @ts-expect-error paths aren't assignable to values that don't exist
const invalidValueFails: PathMatchingValue<'notARealValue', Person> =
  'partner.age';
// @ts-expect-error unexpected paths aren't assignable to invalid values
const invalidPathFailsForInvalidValue: PathMatchingValue<
  'notARealValue',
  Person
> = 'notARealPath';
// @ts-expect-error unexpected paths aren't assignable to invalid values
const invalidArrayPathFailsForInvalidValue: PathMatchingValue<
  'notARealValue',
  Person
> = 'friends.1';

// @ts-expect-error
const str1Fails: PathMatchingValue<number, Person> = 'nicknames.1';
// @ts-expect-error
const numFails: PathMatchingValue<string, Person> = 'age';
// @ts-expect-error
const numsFails: PathMatchingValue<string[], Person> = 'favoriteNumbers';
// @ts-expect-error
const num1Fails: PathMatchingValue<string, Person> = 'favoriteNumbers.1';
// @ts-expect-error
const objFails: PathMatchingValue<Person, Person> = 'partner';
// @ts-expect-error
const objstrFails: PathMatchingValue<number, Person> = 'partner.motto';
// @ts-expect-error
const objstrsFails: PathMatchingValue<number, Person[]> = 'partner.nicknames';
// @ts-expect-error
const objstr1Fails: PathMatchingValue<number, Person> = 'partner.nicknames.1';
// @ts-expect-error
const objnumFails: PathMatchingValue<string, Person> = 'partner.age';
// @ts-expect-error
const objnumsFails: PathMatchingValue<string[], Person> =
  'partner.favoriteNumbers';
// @ts-expect-error
const objnum1Fails: PathMatchingValue<string, Person> =
  'partner.favoriteNumbers.1';
// @ts-expect-error
const obj1Fails: PathMatchingValue<Person, Person> = 'friends.1';
// @ts-expect-error
const obj1strFails: PathMatchingValue<number, Person> = 'friends.1.motto';
// @ts-expect-error
const obj1numFails: PathMatchingValue<string, Person> = 'friends.1.age';
// @ts-expect-error
const obj1numsFails: PathMatchingValue<string[], Person> =
  'friends.1.favoriteNumbers';
// @ts-expect-error
const obj1num1Fails: PathMatchingValue<string, Person> =
  'friends.1.favoriteNumbers.1';

type TinyTest = {
  favoriteNumbers: number[];
};

// simple path
const pathOf: PathOf<TinyTest> | undefined = 'favoriteNumbers';
const strongValue: ValueMatchingPath<Person, 'rootStrPath'> | undefined =
  'rootStrValue';
const rootStrPath: PathMatchingValue<'rootStrValue', Person> | undefined =
  'partner.rootStrPath';
const arrayStrPath: PathMatchingValue<'arrayStrValue', Person> | undefined =
  'arrayStrPath.1';
// @ts-expect-error
const arrayStrPathFails:
  | PathMatchingValue<'arrayStrValue', Person>
  | undefined = 'friends.1';
const arrayRootValue:
  | ValueMatchingPath<Person['arrayStrPath'], '1'>
  | undefined = 'arrayStrValue';

// @ts-expect-error
const strongFails: PathMatchingValue<'valid', Person> = 'weak';
// @ts-expect-error array values aren't assignable to unexpected paths
const invalidPathFails: PathMatchingValue<'notARealValue', Person> =
  'partner.nicknames.1';
