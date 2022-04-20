export declare type Nullable<T> = T | null | undefined;
export declare type List<A = any> = ReadonlyArray<A>;
export declare type ArrayOrSingle<T> = T | T[];
export interface Constructor<T extends object> {
    new (...args: any[]): T;
    prototype: T;
}
export declare type Key = string | number | symbol;
export declare type GenericObject = Record<string, any>;
export declare type JsonObject = {
    [Key in string]?: JsonValue;
};
export declare type JsonArray = JsonValue[];
export declare type JsonPrimitive = string | number | boolean | null;
export declare type JsonValue = JsonPrimitive | JsonObject | JsonArray;
export declare type AnyFunction<Params extends any[] = any[], Result = any> = (...args: Params) => Result;
export declare type AnyObject = Record<Key, any>;
export declare type PlainObject = Record<string, any>;
export declare type RecordOf<T = any> = Record<Key, T>;
export declare type AnyArray<T = any> = Array<T> | ReadonlyArray<T>;
export declare type Literal = string | number | bigint | boolean;
export declare type Numeric = number | bigint;
export declare type True = true | '1';
export declare type False = false | '0';
export declare type Bool = False | True;
export declare type PromiseOr<T> = Promise<T> | T;
export declare type Falsy = false | '' | 0 | null | undefined;
export declare type Nullish = null | undefined;
export declare type Tuple<T = any> = [T] | T[];
export declare type Arrayable<T> = T | Array<T>;
