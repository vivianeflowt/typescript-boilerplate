/* eslint-disable no-unused-vars */
export type Nullable<T> = T | null | undefined;

export type List<A = any> = ReadonlyArray<A>;
export type ArrayOrSingle<T> = T | T[];

export interface Constructor<T extends object> {
  new (...args: any[]): T;
  prototype: T;
}

export type Key = string | number | symbol;

export type GenericObject = Record<string, any>;

export type JsonObject = { [Key in string]?: JsonValue };
export type JsonArray = JsonValue[];
export type JsonPrimitive = string | number | boolean | null;
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;

export type AnyFunction<Params extends any[] = any[], Result = any> = (
  ...args: Params
) => Result;

export type AnyObject = Record<Key, any>;

export type PlainObject = Record<string, any>;

export type RecordOf<T = any> = Record<Key, T>;

export type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;

export type Literal = string | number | bigint | boolean;

export type Numeric = number | bigint;

export type True = true | '1';
export type False = false | '0';

export type Bool = False | True;

export type PromiseOr<T> = Promise<T> | T;

export type Falsy = false | '' | 0 | null | undefined;

export type Nullish = null | undefined;

export type Tuple<T = any> = [T] | T[];

export type Arrayable<T> = T | Array<T>;
