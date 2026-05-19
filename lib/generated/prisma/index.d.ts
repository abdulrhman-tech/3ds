
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Screen
 * A registered physical showroom screen.
 * Each screen has its own daily render budget and cooldown, so one screen's
 * usage cannot exhaust another screen's quota.
 */
export type Screen = $Result.DefaultSelection<Prisma.$ScreenPayload>
/**
 * Model RoomPreviewSession
 * 
 */
export type RoomPreviewSession = $Result.DefaultSelection<Prisma.$RoomPreviewSessionPayload>
/**
 * Model RenderJob
 * 
 */
export type RenderJob = $Result.DefaultSelection<Prisma.$RenderJobPayload>
/**
 * Model SessionEvent
 * 
 */
export type SessionEvent = $Result.DefaultSelection<Prisma.$SessionEventPayload>
/**
 * Model SessionIssue
 * 
 */
export type SessionIssue = $Result.DefaultSelection<Prisma.$SessionIssuePayload>
/**
 * Model UserSession
 * An identified visitor who passed through the pre-access gate.
 * One-to-one with RoomPreviewSession (userSession.roomSession).
 */
export type UserSession = $Result.DefaultSelection<Prisma.$UserSessionPayload>
/**
 * Model Customer
 * A returning customer identified by their E.164 phone number.
 * Created/refreshed on every successful customer gate completion.
 * Expires after 60 days of inactivity (expiresAt = lastSeenAt + 60d).
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerExperience
 * One render result saved per customer per completed session.
 * Persists independently of session lifetime (no FK cascade from session).
 */
export type CustomerExperience = $Result.DefaultSelection<Prisma.$CustomerExperiencePayload>
/**
 * Model Event
 * A single tracked event in a user's journey.
 * Written fire-and-forget — never blocks the main request pipeline.
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Screens
 * const screens = await prisma.screen.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Screens
   * const screens = await prisma.screen.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.screen`: Exposes CRUD operations for the **Screen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Screens
    * const screens = await prisma.screen.findMany()
    * ```
    */
  get screen(): Prisma.ScreenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomPreviewSession`: Exposes CRUD operations for the **RoomPreviewSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomPreviewSessions
    * const roomPreviewSessions = await prisma.roomPreviewSession.findMany()
    * ```
    */
  get roomPreviewSession(): Prisma.RoomPreviewSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.renderJob`: Exposes CRUD operations for the **RenderJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RenderJobs
    * const renderJobs = await prisma.renderJob.findMany()
    * ```
    */
  get renderJob(): Prisma.RenderJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionEvent`: Exposes CRUD operations for the **SessionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionEvents
    * const sessionEvents = await prisma.sessionEvent.findMany()
    * ```
    */
  get sessionEvent(): Prisma.SessionEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionIssue`: Exposes CRUD operations for the **SessionIssue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionIssues
    * const sessionIssues = await prisma.sessionIssue.findMany()
    * ```
    */
  get sessionIssue(): Prisma.SessionIssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSession`: Exposes CRUD operations for the **UserSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSessions
    * const userSessions = await prisma.userSession.findMany()
    * ```
    */
  get userSession(): Prisma.UserSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerExperience`: Exposes CRUD operations for the **CustomerExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerExperiences
    * const customerExperiences = await prisma.customerExperience.findMany()
    * ```
    */
  get customerExperience(): Prisma.CustomerExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Screen: 'Screen',
    RoomPreviewSession: 'RoomPreviewSession',
    RenderJob: 'RenderJob',
    SessionEvent: 'SessionEvent',
    SessionIssue: 'SessionIssue',
    UserSession: 'UserSession',
    Customer: 'Customer',
    CustomerExperience: 'CustomerExperience',
    Event: 'Event'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "screen" | "roomPreviewSession" | "renderJob" | "sessionEvent" | "sessionIssue" | "userSession" | "customer" | "customerExperience" | "event"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Screen: {
        payload: Prisma.$ScreenPayload<ExtArgs>
        fields: Prisma.ScreenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScreenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScreenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          findFirst: {
            args: Prisma.ScreenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScreenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          findMany: {
            args: Prisma.ScreenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>[]
          }
          create: {
            args: Prisma.ScreenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          createMany: {
            args: Prisma.ScreenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScreenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>[]
          }
          delete: {
            args: Prisma.ScreenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          update: {
            args: Prisma.ScreenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          deleteMany: {
            args: Prisma.ScreenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScreenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScreenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>[]
          }
          upsert: {
            args: Prisma.ScreenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScreenPayload>
          }
          aggregate: {
            args: Prisma.ScreenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScreen>
          }
          groupBy: {
            args: Prisma.ScreenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScreenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScreenCountArgs<ExtArgs>
            result: $Utils.Optional<ScreenCountAggregateOutputType> | number
          }
        }
      }
      RoomPreviewSession: {
        payload: Prisma.$RoomPreviewSessionPayload<ExtArgs>
        fields: Prisma.RoomPreviewSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomPreviewSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomPreviewSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          findFirst: {
            args: Prisma.RoomPreviewSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomPreviewSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          findMany: {
            args: Prisma.RoomPreviewSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>[]
          }
          create: {
            args: Prisma.RoomPreviewSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          createMany: {
            args: Prisma.RoomPreviewSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomPreviewSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>[]
          }
          delete: {
            args: Prisma.RoomPreviewSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          update: {
            args: Prisma.RoomPreviewSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          deleteMany: {
            args: Prisma.RoomPreviewSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomPreviewSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomPreviewSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>[]
          }
          upsert: {
            args: Prisma.RoomPreviewSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPreviewSessionPayload>
          }
          aggregate: {
            args: Prisma.RoomPreviewSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomPreviewSession>
          }
          groupBy: {
            args: Prisma.RoomPreviewSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomPreviewSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomPreviewSessionCountArgs<ExtArgs>
            result: $Utils.Optional<RoomPreviewSessionCountAggregateOutputType> | number
          }
        }
      }
      RenderJob: {
        payload: Prisma.$RenderJobPayload<ExtArgs>
        fields: Prisma.RenderJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RenderJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RenderJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          findFirst: {
            args: Prisma.RenderJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RenderJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          findMany: {
            args: Prisma.RenderJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          create: {
            args: Prisma.RenderJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          createMany: {
            args: Prisma.RenderJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RenderJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          delete: {
            args: Prisma.RenderJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          update: {
            args: Prisma.RenderJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          deleteMany: {
            args: Prisma.RenderJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RenderJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RenderJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>[]
          }
          upsert: {
            args: Prisma.RenderJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RenderJobPayload>
          }
          aggregate: {
            args: Prisma.RenderJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRenderJob>
          }
          groupBy: {
            args: Prisma.RenderJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<RenderJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.RenderJobCountArgs<ExtArgs>
            result: $Utils.Optional<RenderJobCountAggregateOutputType> | number
          }
        }
      }
      SessionEvent: {
        payload: Prisma.$SessionEventPayload<ExtArgs>
        fields: Prisma.SessionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          findFirst: {
            args: Prisma.SessionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          findMany: {
            args: Prisma.SessionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          create: {
            args: Prisma.SessionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          createMany: {
            args: Prisma.SessionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          delete: {
            args: Prisma.SessionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          update: {
            args: Prisma.SessionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          deleteMany: {
            args: Prisma.SessionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>[]
          }
          upsert: {
            args: Prisma.SessionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionEventPayload>
          }
          aggregate: {
            args: Prisma.SessionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionEvent>
          }
          groupBy: {
            args: Prisma.SessionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionEventCountArgs<ExtArgs>
            result: $Utils.Optional<SessionEventCountAggregateOutputType> | number
          }
        }
      }
      SessionIssue: {
        payload: Prisma.$SessionIssuePayload<ExtArgs>
        fields: Prisma.SessionIssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionIssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionIssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          findFirst: {
            args: Prisma.SessionIssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionIssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          findMany: {
            args: Prisma.SessionIssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>[]
          }
          create: {
            args: Prisma.SessionIssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          createMany: {
            args: Prisma.SessionIssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionIssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>[]
          }
          delete: {
            args: Prisma.SessionIssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          update: {
            args: Prisma.SessionIssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          deleteMany: {
            args: Prisma.SessionIssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionIssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionIssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>[]
          }
          upsert: {
            args: Prisma.SessionIssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionIssuePayload>
          }
          aggregate: {
            args: Prisma.SessionIssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionIssue>
          }
          groupBy: {
            args: Prisma.SessionIssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionIssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionIssueCountArgs<ExtArgs>
            result: $Utils.Optional<SessionIssueCountAggregateOutputType> | number
          }
        }
      }
      UserSession: {
        payload: Prisma.$UserSessionPayload<ExtArgs>
        fields: Prisma.UserSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findFirst: {
            args: Prisma.UserSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          findMany: {
            args: Prisma.UserSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          create: {
            args: Prisma.UserSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          createMany: {
            args: Prisma.UserSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          delete: {
            args: Prisma.UserSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          update: {
            args: Prisma.UserSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          deleteMany: {
            args: Prisma.UserSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>[]
          }
          upsert: {
            args: Prisma.UserSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSessionPayload>
          }
          aggregate: {
            args: Prisma.UserSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSession>
          }
          groupBy: {
            args: Prisma.UserSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSessionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSessionCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerExperience: {
        payload: Prisma.$CustomerExperiencePayload<ExtArgs>
        fields: Prisma.CustomerExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          findFirst: {
            args: Prisma.CustomerExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          findMany: {
            args: Prisma.CustomerExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>[]
          }
          create: {
            args: Prisma.CustomerExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          createMany: {
            args: Prisma.CustomerExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>[]
          }
          delete: {
            args: Prisma.CustomerExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          update: {
            args: Prisma.CustomerExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          deleteMany: {
            args: Prisma.CustomerExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>[]
          }
          upsert: {
            args: Prisma.CustomerExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerExperiencePayload>
          }
          aggregate: {
            args: Prisma.CustomerExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerExperience>
          }
          groupBy: {
            args: Prisma.CustomerExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerExperienceCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    screen?: ScreenOmit
    roomPreviewSession?: RoomPreviewSessionOmit
    renderJob?: RenderJobOmit
    sessionEvent?: SessionEventOmit
    sessionIssue?: SessionIssueOmit
    userSession?: UserSessionOmit
    customer?: CustomerOmit
    customerExperience?: CustomerExperienceOmit
    event?: EventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ScreenCountOutputType
   */

  export type ScreenCountOutputType = {
    sessions: number
  }

  export type ScreenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | ScreenCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * ScreenCountOutputType without action
   */
  export type ScreenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScreenCountOutputType
     */
    select?: ScreenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScreenCountOutputType without action
   */
  export type ScreenCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPreviewSessionWhereInput
  }


  /**
   * Count Type RoomPreviewSessionCountOutputType
   */

  export type RoomPreviewSessionCountOutputType = {
    renderJobs: number
    sessionEvents: number
    sessionIssues: number
  }

  export type RoomPreviewSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renderJobs?: boolean | RoomPreviewSessionCountOutputTypeCountRenderJobsArgs
    sessionEvents?: boolean | RoomPreviewSessionCountOutputTypeCountSessionEventsArgs
    sessionIssues?: boolean | RoomPreviewSessionCountOutputTypeCountSessionIssuesArgs
  }

  // Custom InputTypes
  /**
   * RoomPreviewSessionCountOutputType without action
   */
  export type RoomPreviewSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSessionCountOutputType
     */
    select?: RoomPreviewSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomPreviewSessionCountOutputType without action
   */
  export type RoomPreviewSessionCountOutputTypeCountRenderJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderJobWhereInput
  }

  /**
   * RoomPreviewSessionCountOutputType without action
   */
  export type RoomPreviewSessionCountOutputTypeCountSessionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionEventWhereInput
  }

  /**
   * RoomPreviewSessionCountOutputType without action
   */
  export type RoomPreviewSessionCountOutputTypeCountSessionIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionIssueWhereInput
  }


  /**
   * Count Type UserSessionCountOutputType
   */

  export type UserSessionCountOutputType = {
    events: number
  }

  export type UserSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserSessionCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * UserSessionCountOutputType without action
   */
  export type UserSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSessionCountOutputType
     */
    select?: UserSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserSessionCountOutputType without action
   */
  export type UserSessionCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sessions: number
    experiences: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | CustomerCountOutputTypeCountSessionsArgs
    experiences?: boolean | CustomerCountOutputTypeCountExperiencesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPreviewSessionWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerExperienceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Screen
   */

  export type AggregateScreen = {
    _count: ScreenCountAggregateOutputType | null
    _avg: ScreenAvgAggregateOutputType | null
    _sum: ScreenSumAggregateOutputType | null
    _min: ScreenMinAggregateOutputType | null
    _max: ScreenMaxAggregateOutputType | null
  }

  export type ScreenAvgAggregateOutputType = {
    dailyBudget: number | null
  }

  export type ScreenSumAggregateOutputType = {
    dailyBudget: number | null
  }

  export type ScreenMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    secretHash: string | null
    dailyBudget: number | null
    isActive: boolean | null
    lastRenderAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScreenMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    secretHash: string | null
    dailyBudget: number | null
    isActive: boolean | null
    lastRenderAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScreenCountAggregateOutputType = {
    id: number
    name: number
    location: number
    secretHash: number
    dailyBudget: number
    isActive: number
    lastRenderAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScreenAvgAggregateInputType = {
    dailyBudget?: true
  }

  export type ScreenSumAggregateInputType = {
    dailyBudget?: true
  }

  export type ScreenMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    secretHash?: true
    dailyBudget?: true
    isActive?: true
    lastRenderAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScreenMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    secretHash?: true
    dailyBudget?: true
    isActive?: true
    lastRenderAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScreenCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    secretHash?: true
    dailyBudget?: true
    isActive?: true
    lastRenderAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScreenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screen to aggregate.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Screens
    **/
    _count?: true | ScreenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScreenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScreenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScreenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScreenMaxAggregateInputType
  }

  export type GetScreenAggregateType<T extends ScreenAggregateArgs> = {
        [P in keyof T & keyof AggregateScreen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScreen[P]>
      : GetScalarType<T[P], AggregateScreen[P]>
  }




  export type ScreenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScreenWhereInput
    orderBy?: ScreenOrderByWithAggregationInput | ScreenOrderByWithAggregationInput[]
    by: ScreenScalarFieldEnum[] | ScreenScalarFieldEnum
    having?: ScreenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScreenCountAggregateInputType | true
    _avg?: ScreenAvgAggregateInputType
    _sum?: ScreenSumAggregateInputType
    _min?: ScreenMinAggregateInputType
    _max?: ScreenMaxAggregateInputType
  }

  export type ScreenGroupByOutputType = {
    id: string
    name: string
    location: string | null
    secretHash: string
    dailyBudget: number
    isActive: boolean
    lastRenderAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ScreenCountAggregateOutputType | null
    _avg: ScreenAvgAggregateOutputType | null
    _sum: ScreenSumAggregateOutputType | null
    _min: ScreenMinAggregateOutputType | null
    _max: ScreenMaxAggregateOutputType | null
  }

  type GetScreenGroupByPayload<T extends ScreenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScreenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScreenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScreenGroupByOutputType[P]>
            : GetScalarType<T[P], ScreenGroupByOutputType[P]>
        }
      >
    >


  export type ScreenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    secretHash?: boolean
    dailyBudget?: boolean
    isActive?: boolean
    lastRenderAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | Screen$sessionsArgs<ExtArgs>
    _count?: boolean | ScreenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["screen"]>

  export type ScreenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    secretHash?: boolean
    dailyBudget?: boolean
    isActive?: boolean
    lastRenderAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["screen"]>

  export type ScreenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    secretHash?: boolean
    dailyBudget?: boolean
    isActive?: boolean
    lastRenderAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["screen"]>

  export type ScreenSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    secretHash?: boolean
    dailyBudget?: boolean
    isActive?: boolean
    lastRenderAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScreenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "secretHash" | "dailyBudget" | "isActive" | "lastRenderAt" | "createdAt" | "updatedAt", ExtArgs["result"]["screen"]>
  export type ScreenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Screen$sessionsArgs<ExtArgs>
    _count?: boolean | ScreenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScreenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScreenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScreenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Screen"
    objects: {
      sessions: Prisma.$RoomPreviewSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      /**
       * SHA-256 hash of the screen's secret token (token shown once at creation).
       */
      secretHash: string
      /**
       * Max renders allowed per calendar day (UTC). Admin-configurable.
       */
      dailyBudget: number
      isActive: boolean
      /**
       * Set to now() each time a render starts. Used to enforce cooldown in DB
       * (Redis cooldown is belt-and-suspenders; this survives Redis restarts).
       */
      lastRenderAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["screen"]>
    composites: {}
  }

  type ScreenGetPayload<S extends boolean | null | undefined | ScreenDefaultArgs> = $Result.GetResult<Prisma.$ScreenPayload, S>

  type ScreenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScreenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScreenCountAggregateInputType | true
    }

  export interface ScreenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Screen'], meta: { name: 'Screen' } }
    /**
     * Find zero or one Screen that matches the filter.
     * @param {ScreenFindUniqueArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScreenFindUniqueArgs>(args: SelectSubset<T, ScreenFindUniqueArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Screen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScreenFindUniqueOrThrowArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScreenFindUniqueOrThrowArgs>(args: SelectSubset<T, ScreenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindFirstArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScreenFindFirstArgs>(args?: SelectSubset<T, ScreenFindFirstArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Screen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindFirstOrThrowArgs} args - Arguments to find a Screen
     * @example
     * // Get one Screen
     * const screen = await prisma.screen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScreenFindFirstOrThrowArgs>(args?: SelectSubset<T, ScreenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Screens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Screens
     * const screens = await prisma.screen.findMany()
     * 
     * // Get first 10 Screens
     * const screens = await prisma.screen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const screenWithIdOnly = await prisma.screen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScreenFindManyArgs>(args?: SelectSubset<T, ScreenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Screen.
     * @param {ScreenCreateArgs} args - Arguments to create a Screen.
     * @example
     * // Create one Screen
     * const Screen = await prisma.screen.create({
     *   data: {
     *     // ... data to create a Screen
     *   }
     * })
     * 
     */
    create<T extends ScreenCreateArgs>(args: SelectSubset<T, ScreenCreateArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Screens.
     * @param {ScreenCreateManyArgs} args - Arguments to create many Screens.
     * @example
     * // Create many Screens
     * const screen = await prisma.screen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScreenCreateManyArgs>(args?: SelectSubset<T, ScreenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Screens and returns the data saved in the database.
     * @param {ScreenCreateManyAndReturnArgs} args - Arguments to create many Screens.
     * @example
     * // Create many Screens
     * const screen = await prisma.screen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Screens and only return the `id`
     * const screenWithIdOnly = await prisma.screen.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScreenCreateManyAndReturnArgs>(args?: SelectSubset<T, ScreenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Screen.
     * @param {ScreenDeleteArgs} args - Arguments to delete one Screen.
     * @example
     * // Delete one Screen
     * const Screen = await prisma.screen.delete({
     *   where: {
     *     // ... filter to delete one Screen
     *   }
     * })
     * 
     */
    delete<T extends ScreenDeleteArgs>(args: SelectSubset<T, ScreenDeleteArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Screen.
     * @param {ScreenUpdateArgs} args - Arguments to update one Screen.
     * @example
     * // Update one Screen
     * const screen = await prisma.screen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScreenUpdateArgs>(args: SelectSubset<T, ScreenUpdateArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Screens.
     * @param {ScreenDeleteManyArgs} args - Arguments to filter Screens to delete.
     * @example
     * // Delete a few Screens
     * const { count } = await prisma.screen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScreenDeleteManyArgs>(args?: SelectSubset<T, ScreenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Screens
     * const screen = await prisma.screen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScreenUpdateManyArgs>(args: SelectSubset<T, ScreenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Screens and returns the data updated in the database.
     * @param {ScreenUpdateManyAndReturnArgs} args - Arguments to update many Screens.
     * @example
     * // Update many Screens
     * const screen = await prisma.screen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Screens and only return the `id`
     * const screenWithIdOnly = await prisma.screen.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScreenUpdateManyAndReturnArgs>(args: SelectSubset<T, ScreenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Screen.
     * @param {ScreenUpsertArgs} args - Arguments to update or create a Screen.
     * @example
     * // Update or create a Screen
     * const screen = await prisma.screen.upsert({
     *   create: {
     *     // ... data to create a Screen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Screen we want to update
     *   }
     * })
     */
    upsert<T extends ScreenUpsertArgs>(args: SelectSubset<T, ScreenUpsertArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Screens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenCountArgs} args - Arguments to filter Screens to count.
     * @example
     * // Count the number of Screens
     * const count = await prisma.screen.count({
     *   where: {
     *     // ... the filter for the Screens we want to count
     *   }
     * })
    **/
    count<T extends ScreenCountArgs>(
      args?: Subset<T, ScreenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScreenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Screen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScreenAggregateArgs>(args: Subset<T, ScreenAggregateArgs>): Prisma.PrismaPromise<GetScreenAggregateType<T>>

    /**
     * Group by Screen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScreenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScreenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScreenGroupByArgs['orderBy'] }
        : { orderBy?: ScreenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScreenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Screen model
   */
  readonly fields: ScreenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Screen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScreenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Screen$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Screen$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Screen model
   */
  interface ScreenFieldRefs {
    readonly id: FieldRef<"Screen", 'String'>
    readonly name: FieldRef<"Screen", 'String'>
    readonly location: FieldRef<"Screen", 'String'>
    readonly secretHash: FieldRef<"Screen", 'String'>
    readonly dailyBudget: FieldRef<"Screen", 'Int'>
    readonly isActive: FieldRef<"Screen", 'Boolean'>
    readonly lastRenderAt: FieldRef<"Screen", 'DateTime'>
    readonly createdAt: FieldRef<"Screen", 'DateTime'>
    readonly updatedAt: FieldRef<"Screen", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Screen findUnique
   */
  export type ScreenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen findUniqueOrThrow
   */
  export type ScreenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen findFirst
   */
  export type ScreenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screens.
     */
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen findFirstOrThrow
   */
  export type ScreenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screen to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screens.
     */
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen findMany
   */
  export type ScreenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter, which Screens to fetch.
     */
    where?: ScreenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Screens to fetch.
     */
    orderBy?: ScreenOrderByWithRelationInput | ScreenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Screens.
     */
    cursor?: ScreenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Screens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Screens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Screens.
     */
    distinct?: ScreenScalarFieldEnum | ScreenScalarFieldEnum[]
  }

  /**
   * Screen create
   */
  export type ScreenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The data needed to create a Screen.
     */
    data: XOR<ScreenCreateInput, ScreenUncheckedCreateInput>
  }

  /**
   * Screen createMany
   */
  export type ScreenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Screens.
     */
    data: ScreenCreateManyInput | ScreenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screen createManyAndReturn
   */
  export type ScreenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * The data used to create many Screens.
     */
    data: ScreenCreateManyInput | ScreenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Screen update
   */
  export type ScreenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The data needed to update a Screen.
     */
    data: XOR<ScreenUpdateInput, ScreenUncheckedUpdateInput>
    /**
     * Choose, which Screen to update.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen updateMany
   */
  export type ScreenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Screens.
     */
    data: XOR<ScreenUpdateManyMutationInput, ScreenUncheckedUpdateManyInput>
    /**
     * Filter which Screens to update
     */
    where?: ScreenWhereInput
    /**
     * Limit how many Screens to update.
     */
    limit?: number
  }

  /**
   * Screen updateManyAndReturn
   */
  export type ScreenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * The data used to update Screens.
     */
    data: XOR<ScreenUpdateManyMutationInput, ScreenUncheckedUpdateManyInput>
    /**
     * Filter which Screens to update
     */
    where?: ScreenWhereInput
    /**
     * Limit how many Screens to update.
     */
    limit?: number
  }

  /**
   * Screen upsert
   */
  export type ScreenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * The filter to search for the Screen to update in case it exists.
     */
    where: ScreenWhereUniqueInput
    /**
     * In case the Screen found by the `where` argument doesn't exist, create a new Screen with this data.
     */
    create: XOR<ScreenCreateInput, ScreenUncheckedCreateInput>
    /**
     * In case the Screen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScreenUpdateInput, ScreenUncheckedUpdateInput>
  }

  /**
   * Screen delete
   */
  export type ScreenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    /**
     * Filter which Screen to delete.
     */
    where: ScreenWhereUniqueInput
  }

  /**
   * Screen deleteMany
   */
  export type ScreenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Screens to delete
     */
    where?: ScreenWhereInput
    /**
     * Limit how many Screens to delete.
     */
    limit?: number
  }

  /**
   * Screen.sessions
   */
  export type Screen$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    where?: RoomPreviewSessionWhereInput
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    cursor?: RoomPreviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPreviewSessionScalarFieldEnum | RoomPreviewSessionScalarFieldEnum[]
  }

  /**
   * Screen without action
   */
  export type ScreenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
  }


  /**
   * Model RoomPreviewSession
   */

  export type AggregateRoomPreviewSession = {
    _count: RoomPreviewSessionCountAggregateOutputType | null
    _avg: RoomPreviewSessionAvgAggregateOutputType | null
    _sum: RoomPreviewSessionSumAggregateOutputType | null
    _min: RoomPreviewSessionMinAggregateOutputType | null
    _max: RoomPreviewSessionMaxAggregateOutputType | null
  }

  export type RoomPreviewSessionAvgAggregateOutputType = {
    renderCount: number | null
  }

  export type RoomPreviewSessionSumAggregateOutputType = {
    renderCount: number | null
  }

  export type RoomPreviewSessionMinAggregateOutputType = {
    id: string | null
    status: string | null
    mobileConnected: boolean | null
    renderCount: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    screenId: string | null
    lastRenderHash: string | null
    userSessionId: string | null
    customerId: string | null
    lastMobileSeenAt: Date | null
    lastScreenSeenAt: Date | null
  }

  export type RoomPreviewSessionMaxAggregateOutputType = {
    id: string | null
    status: string | null
    mobileConnected: boolean | null
    renderCount: number | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    screenId: string | null
    lastRenderHash: string | null
    userSessionId: string | null
    customerId: string | null
    lastMobileSeenAt: Date | null
    lastScreenSeenAt: Date | null
  }

  export type RoomPreviewSessionCountAggregateOutputType = {
    id: number
    status: number
    mobileConnected: number
    renderCount: number
    selectedRoom: number
    selectedProduct: number
    renderResult: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    screenId: number
    lastRenderHash: number
    userSessionId: number
    customerId: number
    lastMobileSeenAt: number
    lastScreenSeenAt: number
    _all: number
  }


  export type RoomPreviewSessionAvgAggregateInputType = {
    renderCount?: true
  }

  export type RoomPreviewSessionSumAggregateInputType = {
    renderCount?: true
  }

  export type RoomPreviewSessionMinAggregateInputType = {
    id?: true
    status?: true
    mobileConnected?: true
    renderCount?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    screenId?: true
    lastRenderHash?: true
    userSessionId?: true
    customerId?: true
    lastMobileSeenAt?: true
    lastScreenSeenAt?: true
  }

  export type RoomPreviewSessionMaxAggregateInputType = {
    id?: true
    status?: true
    mobileConnected?: true
    renderCount?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    screenId?: true
    lastRenderHash?: true
    userSessionId?: true
    customerId?: true
    lastMobileSeenAt?: true
    lastScreenSeenAt?: true
  }

  export type RoomPreviewSessionCountAggregateInputType = {
    id?: true
    status?: true
    mobileConnected?: true
    renderCount?: true
    selectedRoom?: true
    selectedProduct?: true
    renderResult?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    screenId?: true
    lastRenderHash?: true
    userSessionId?: true
    customerId?: true
    lastMobileSeenAt?: true
    lastScreenSeenAt?: true
    _all?: true
  }

  export type RoomPreviewSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPreviewSession to aggregate.
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPreviewSessions to fetch.
     */
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomPreviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPreviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPreviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomPreviewSessions
    **/
    _count?: true | RoomPreviewSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomPreviewSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomPreviewSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomPreviewSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomPreviewSessionMaxAggregateInputType
  }

  export type GetRoomPreviewSessionAggregateType<T extends RoomPreviewSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomPreviewSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomPreviewSession[P]>
      : GetScalarType<T[P], AggregateRoomPreviewSession[P]>
  }




  export type RoomPreviewSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPreviewSessionWhereInput
    orderBy?: RoomPreviewSessionOrderByWithAggregationInput | RoomPreviewSessionOrderByWithAggregationInput[]
    by: RoomPreviewSessionScalarFieldEnum[] | RoomPreviewSessionScalarFieldEnum
    having?: RoomPreviewSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomPreviewSessionCountAggregateInputType | true
    _avg?: RoomPreviewSessionAvgAggregateInputType
    _sum?: RoomPreviewSessionSumAggregateInputType
    _min?: RoomPreviewSessionMinAggregateInputType
    _max?: RoomPreviewSessionMaxAggregateInputType
  }

  export type RoomPreviewSessionGroupByOutputType = {
    id: string
    status: string
    mobileConnected: boolean
    renderCount: number
    selectedRoom: JsonValue | null
    selectedProduct: JsonValue | null
    renderResult: JsonValue | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    screenId: string | null
    lastRenderHash: string | null
    userSessionId: string | null
    customerId: string | null
    lastMobileSeenAt: Date | null
    lastScreenSeenAt: Date | null
    _count: RoomPreviewSessionCountAggregateOutputType | null
    _avg: RoomPreviewSessionAvgAggregateOutputType | null
    _sum: RoomPreviewSessionSumAggregateOutputType | null
    _min: RoomPreviewSessionMinAggregateOutputType | null
    _max: RoomPreviewSessionMaxAggregateOutputType | null
  }

  type GetRoomPreviewSessionGroupByPayload<T extends RoomPreviewSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomPreviewSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomPreviewSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomPreviewSessionGroupByOutputType[P]>
            : GetScalarType<T[P], RoomPreviewSessionGroupByOutputType[P]>
        }
      >
    >


  export type RoomPreviewSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    mobileConnected?: boolean
    renderCount?: boolean
    selectedRoom?: boolean
    selectedProduct?: boolean
    renderResult?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenId?: boolean
    lastRenderHash?: boolean
    userSessionId?: boolean
    customerId?: boolean
    lastMobileSeenAt?: boolean
    lastScreenSeenAt?: boolean
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
    renderJobs?: boolean | RoomPreviewSession$renderJobsArgs<ExtArgs>
    sessionEvents?: boolean | RoomPreviewSession$sessionEventsArgs<ExtArgs>
    sessionIssues?: boolean | RoomPreviewSession$sessionIssuesArgs<ExtArgs>
    _count?: boolean | RoomPreviewSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPreviewSession"]>

  export type RoomPreviewSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    mobileConnected?: boolean
    renderCount?: boolean
    selectedRoom?: boolean
    selectedProduct?: boolean
    renderResult?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenId?: boolean
    lastRenderHash?: boolean
    userSessionId?: boolean
    customerId?: boolean
    lastMobileSeenAt?: boolean
    lastScreenSeenAt?: boolean
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
  }, ExtArgs["result"]["roomPreviewSession"]>

  export type RoomPreviewSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    mobileConnected?: boolean
    renderCount?: boolean
    selectedRoom?: boolean
    selectedProduct?: boolean
    renderResult?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenId?: boolean
    lastRenderHash?: boolean
    userSessionId?: boolean
    customerId?: boolean
    lastMobileSeenAt?: boolean
    lastScreenSeenAt?: boolean
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
  }, ExtArgs["result"]["roomPreviewSession"]>

  export type RoomPreviewSessionSelectScalar = {
    id?: boolean
    status?: boolean
    mobileConnected?: boolean
    renderCount?: boolean
    selectedRoom?: boolean
    selectedProduct?: boolean
    renderResult?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    screenId?: boolean
    lastRenderHash?: boolean
    userSessionId?: boolean
    customerId?: boolean
    lastMobileSeenAt?: boolean
    lastScreenSeenAt?: boolean
  }

  export type RoomPreviewSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "mobileConnected" | "renderCount" | "selectedRoom" | "selectedProduct" | "renderResult" | "expiresAt" | "createdAt" | "updatedAt" | "screenId" | "lastRenderHash" | "userSessionId" | "customerId" | "lastMobileSeenAt" | "lastScreenSeenAt", ExtArgs["result"]["roomPreviewSession"]>
  export type RoomPreviewSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
    renderJobs?: boolean | RoomPreviewSession$renderJobsArgs<ExtArgs>
    sessionEvents?: boolean | RoomPreviewSession$sessionEventsArgs<ExtArgs>
    sessionIssues?: boolean | RoomPreviewSession$sessionIssuesArgs<ExtArgs>
    _count?: boolean | RoomPreviewSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomPreviewSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
  }
  export type RoomPreviewSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    screen?: boolean | RoomPreviewSession$screenArgs<ExtArgs>
    userSession?: boolean | RoomPreviewSession$userSessionArgs<ExtArgs>
    customer?: boolean | RoomPreviewSession$customerArgs<ExtArgs>
  }

  export type $RoomPreviewSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomPreviewSession"
    objects: {
      screen: Prisma.$ScreenPayload<ExtArgs> | null
      userSession: Prisma.$UserSessionPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      renderJobs: Prisma.$RenderJobPayload<ExtArgs>[]
      sessionEvents: Prisma.$SessionEventPayload<ExtArgs>[]
      sessionIssues: Prisma.$SessionIssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      mobileConnected: boolean
      renderCount: number
      selectedRoom: Prisma.JsonValue | null
      selectedProduct: Prisma.JsonValue | null
      renderResult: Prisma.JsonValue | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
      /**
       * Which physical screen created this session. Null for unregistered screens.
       */
      screenId: string | null
      /**
       * SHA-256(roomImageUrl::productId) of the last successful render.
       * Used to return a cached result when the customer re-renders with the same inputs.
       */
      lastRenderHash: string | null
      userSessionId: string | null
      /**
       * Linked after customer gate completes. Null for employee sessions.
       */
      customerId: string | null
      /**
       * Last time the mobile client sent a heartbeat ping. Null until first ping.
       */
      lastMobileSeenAt: Date | null
      /**
       * Last time the screen client sent a heartbeat ping. Null until first ping.
       */
      lastScreenSeenAt: Date | null
    }, ExtArgs["result"]["roomPreviewSession"]>
    composites: {}
  }

  type RoomPreviewSessionGetPayload<S extends boolean | null | undefined | RoomPreviewSessionDefaultArgs> = $Result.GetResult<Prisma.$RoomPreviewSessionPayload, S>

  type RoomPreviewSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomPreviewSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomPreviewSessionCountAggregateInputType | true
    }

  export interface RoomPreviewSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomPreviewSession'], meta: { name: 'RoomPreviewSession' } }
    /**
     * Find zero or one RoomPreviewSession that matches the filter.
     * @param {RoomPreviewSessionFindUniqueArgs} args - Arguments to find a RoomPreviewSession
     * @example
     * // Get one RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomPreviewSessionFindUniqueArgs>(args: SelectSubset<T, RoomPreviewSessionFindUniqueArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomPreviewSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomPreviewSessionFindUniqueOrThrowArgs} args - Arguments to find a RoomPreviewSession
     * @example
     * // Get one RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomPreviewSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomPreviewSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPreviewSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionFindFirstArgs} args - Arguments to find a RoomPreviewSession
     * @example
     * // Get one RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomPreviewSessionFindFirstArgs>(args?: SelectSubset<T, RoomPreviewSessionFindFirstArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPreviewSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionFindFirstOrThrowArgs} args - Arguments to find a RoomPreviewSession
     * @example
     * // Get one RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomPreviewSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomPreviewSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPreviewSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomPreviewSessions
     * const roomPreviewSessions = await prisma.roomPreviewSession.findMany()
     * 
     * // Get first 10 RoomPreviewSessions
     * const roomPreviewSessions = await prisma.roomPreviewSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomPreviewSessionWithIdOnly = await prisma.roomPreviewSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomPreviewSessionFindManyArgs>(args?: SelectSubset<T, RoomPreviewSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomPreviewSession.
     * @param {RoomPreviewSessionCreateArgs} args - Arguments to create a RoomPreviewSession.
     * @example
     * // Create one RoomPreviewSession
     * const RoomPreviewSession = await prisma.roomPreviewSession.create({
     *   data: {
     *     // ... data to create a RoomPreviewSession
     *   }
     * })
     * 
     */
    create<T extends RoomPreviewSessionCreateArgs>(args: SelectSubset<T, RoomPreviewSessionCreateArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomPreviewSessions.
     * @param {RoomPreviewSessionCreateManyArgs} args - Arguments to create many RoomPreviewSessions.
     * @example
     * // Create many RoomPreviewSessions
     * const roomPreviewSession = await prisma.roomPreviewSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomPreviewSessionCreateManyArgs>(args?: SelectSubset<T, RoomPreviewSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomPreviewSessions and returns the data saved in the database.
     * @param {RoomPreviewSessionCreateManyAndReturnArgs} args - Arguments to create many RoomPreviewSessions.
     * @example
     * // Create many RoomPreviewSessions
     * const roomPreviewSession = await prisma.roomPreviewSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomPreviewSessions and only return the `id`
     * const roomPreviewSessionWithIdOnly = await prisma.roomPreviewSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomPreviewSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomPreviewSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomPreviewSession.
     * @param {RoomPreviewSessionDeleteArgs} args - Arguments to delete one RoomPreviewSession.
     * @example
     * // Delete one RoomPreviewSession
     * const RoomPreviewSession = await prisma.roomPreviewSession.delete({
     *   where: {
     *     // ... filter to delete one RoomPreviewSession
     *   }
     * })
     * 
     */
    delete<T extends RoomPreviewSessionDeleteArgs>(args: SelectSubset<T, RoomPreviewSessionDeleteArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomPreviewSession.
     * @param {RoomPreviewSessionUpdateArgs} args - Arguments to update one RoomPreviewSession.
     * @example
     * // Update one RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomPreviewSessionUpdateArgs>(args: SelectSubset<T, RoomPreviewSessionUpdateArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomPreviewSessions.
     * @param {RoomPreviewSessionDeleteManyArgs} args - Arguments to filter RoomPreviewSessions to delete.
     * @example
     * // Delete a few RoomPreviewSessions
     * const { count } = await prisma.roomPreviewSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomPreviewSessionDeleteManyArgs>(args?: SelectSubset<T, RoomPreviewSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPreviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomPreviewSessions
     * const roomPreviewSession = await prisma.roomPreviewSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomPreviewSessionUpdateManyArgs>(args: SelectSubset<T, RoomPreviewSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPreviewSessions and returns the data updated in the database.
     * @param {RoomPreviewSessionUpdateManyAndReturnArgs} args - Arguments to update many RoomPreviewSessions.
     * @example
     * // Update many RoomPreviewSessions
     * const roomPreviewSession = await prisma.roomPreviewSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomPreviewSessions and only return the `id`
     * const roomPreviewSessionWithIdOnly = await prisma.roomPreviewSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomPreviewSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomPreviewSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomPreviewSession.
     * @param {RoomPreviewSessionUpsertArgs} args - Arguments to update or create a RoomPreviewSession.
     * @example
     * // Update or create a RoomPreviewSession
     * const roomPreviewSession = await prisma.roomPreviewSession.upsert({
     *   create: {
     *     // ... data to create a RoomPreviewSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomPreviewSession we want to update
     *   }
     * })
     */
    upsert<T extends RoomPreviewSessionUpsertArgs>(args: SelectSubset<T, RoomPreviewSessionUpsertArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomPreviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionCountArgs} args - Arguments to filter RoomPreviewSessions to count.
     * @example
     * // Count the number of RoomPreviewSessions
     * const count = await prisma.roomPreviewSession.count({
     *   where: {
     *     // ... the filter for the RoomPreviewSessions we want to count
     *   }
     * })
    **/
    count<T extends RoomPreviewSessionCountArgs>(
      args?: Subset<T, RoomPreviewSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomPreviewSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomPreviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomPreviewSessionAggregateArgs>(args: Subset<T, RoomPreviewSessionAggregateArgs>): Prisma.PrismaPromise<GetRoomPreviewSessionAggregateType<T>>

    /**
     * Group by RoomPreviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPreviewSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomPreviewSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomPreviewSessionGroupByArgs['orderBy'] }
        : { orderBy?: RoomPreviewSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomPreviewSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomPreviewSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomPreviewSession model
   */
  readonly fields: RoomPreviewSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomPreviewSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomPreviewSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    screen<T extends RoomPreviewSession$screenArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$screenArgs<ExtArgs>>): Prisma__ScreenClient<$Result.GetResult<Prisma.$ScreenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userSession<T extends RoomPreviewSession$userSessionArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$userSessionArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends RoomPreviewSession$customerArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    renderJobs<T extends RoomPreviewSession$renderJobsArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$renderJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionEvents<T extends RoomPreviewSession$sessionEventsArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$sessionEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionIssues<T extends RoomPreviewSession$sessionIssuesArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSession$sessionIssuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomPreviewSession model
   */
  interface RoomPreviewSessionFieldRefs {
    readonly id: FieldRef<"RoomPreviewSession", 'String'>
    readonly status: FieldRef<"RoomPreviewSession", 'String'>
    readonly mobileConnected: FieldRef<"RoomPreviewSession", 'Boolean'>
    readonly renderCount: FieldRef<"RoomPreviewSession", 'Int'>
    readonly selectedRoom: FieldRef<"RoomPreviewSession", 'Json'>
    readonly selectedProduct: FieldRef<"RoomPreviewSession", 'Json'>
    readonly renderResult: FieldRef<"RoomPreviewSession", 'Json'>
    readonly expiresAt: FieldRef<"RoomPreviewSession", 'DateTime'>
    readonly createdAt: FieldRef<"RoomPreviewSession", 'DateTime'>
    readonly updatedAt: FieldRef<"RoomPreviewSession", 'DateTime'>
    readonly screenId: FieldRef<"RoomPreviewSession", 'String'>
    readonly lastRenderHash: FieldRef<"RoomPreviewSession", 'String'>
    readonly userSessionId: FieldRef<"RoomPreviewSession", 'String'>
    readonly customerId: FieldRef<"RoomPreviewSession", 'String'>
    readonly lastMobileSeenAt: FieldRef<"RoomPreviewSession", 'DateTime'>
    readonly lastScreenSeenAt: FieldRef<"RoomPreviewSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomPreviewSession findUnique
   */
  export type RoomPreviewSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which RoomPreviewSession to fetch.
     */
    where: RoomPreviewSessionWhereUniqueInput
  }

  /**
   * RoomPreviewSession findUniqueOrThrow
   */
  export type RoomPreviewSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which RoomPreviewSession to fetch.
     */
    where: RoomPreviewSessionWhereUniqueInput
  }

  /**
   * RoomPreviewSession findFirst
   */
  export type RoomPreviewSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which RoomPreviewSession to fetch.
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPreviewSessions to fetch.
     */
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPreviewSessions.
     */
    cursor?: RoomPreviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPreviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPreviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPreviewSessions.
     */
    distinct?: RoomPreviewSessionScalarFieldEnum | RoomPreviewSessionScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession findFirstOrThrow
   */
  export type RoomPreviewSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which RoomPreviewSession to fetch.
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPreviewSessions to fetch.
     */
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPreviewSessions.
     */
    cursor?: RoomPreviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPreviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPreviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPreviewSessions.
     */
    distinct?: RoomPreviewSessionScalarFieldEnum | RoomPreviewSessionScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession findMany
   */
  export type RoomPreviewSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which RoomPreviewSessions to fetch.
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPreviewSessions to fetch.
     */
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomPreviewSessions.
     */
    cursor?: RoomPreviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPreviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPreviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPreviewSessions.
     */
    distinct?: RoomPreviewSessionScalarFieldEnum | RoomPreviewSessionScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession create
   */
  export type RoomPreviewSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomPreviewSession.
     */
    data: XOR<RoomPreviewSessionCreateInput, RoomPreviewSessionUncheckedCreateInput>
  }

  /**
   * RoomPreviewSession createMany
   */
  export type RoomPreviewSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomPreviewSessions.
     */
    data: RoomPreviewSessionCreateManyInput | RoomPreviewSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomPreviewSession createManyAndReturn
   */
  export type RoomPreviewSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * The data used to create many RoomPreviewSessions.
     */
    data: RoomPreviewSessionCreateManyInput | RoomPreviewSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomPreviewSession update
   */
  export type RoomPreviewSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomPreviewSession.
     */
    data: XOR<RoomPreviewSessionUpdateInput, RoomPreviewSessionUncheckedUpdateInput>
    /**
     * Choose, which RoomPreviewSession to update.
     */
    where: RoomPreviewSessionWhereUniqueInput
  }

  /**
   * RoomPreviewSession updateMany
   */
  export type RoomPreviewSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomPreviewSessions.
     */
    data: XOR<RoomPreviewSessionUpdateManyMutationInput, RoomPreviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which RoomPreviewSessions to update
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * Limit how many RoomPreviewSessions to update.
     */
    limit?: number
  }

  /**
   * RoomPreviewSession updateManyAndReturn
   */
  export type RoomPreviewSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * The data used to update RoomPreviewSessions.
     */
    data: XOR<RoomPreviewSessionUpdateManyMutationInput, RoomPreviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which RoomPreviewSessions to update
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * Limit how many RoomPreviewSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomPreviewSession upsert
   */
  export type RoomPreviewSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomPreviewSession to update in case it exists.
     */
    where: RoomPreviewSessionWhereUniqueInput
    /**
     * In case the RoomPreviewSession found by the `where` argument doesn't exist, create a new RoomPreviewSession with this data.
     */
    create: XOR<RoomPreviewSessionCreateInput, RoomPreviewSessionUncheckedCreateInput>
    /**
     * In case the RoomPreviewSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomPreviewSessionUpdateInput, RoomPreviewSessionUncheckedUpdateInput>
  }

  /**
   * RoomPreviewSession delete
   */
  export type RoomPreviewSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    /**
     * Filter which RoomPreviewSession to delete.
     */
    where: RoomPreviewSessionWhereUniqueInput
  }

  /**
   * RoomPreviewSession deleteMany
   */
  export type RoomPreviewSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPreviewSessions to delete
     */
    where?: RoomPreviewSessionWhereInput
    /**
     * Limit how many RoomPreviewSessions to delete.
     */
    limit?: number
  }

  /**
   * RoomPreviewSession.screen
   */
  export type RoomPreviewSession$screenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Screen
     */
    select?: ScreenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Screen
     */
    omit?: ScreenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScreenInclude<ExtArgs> | null
    where?: ScreenWhereInput
  }

  /**
   * RoomPreviewSession.userSession
   */
  export type RoomPreviewSession$userSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    where?: UserSessionWhereInput
  }

  /**
   * RoomPreviewSession.customer
   */
  export type RoomPreviewSession$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * RoomPreviewSession.renderJobs
   */
  export type RoomPreviewSession$renderJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    where?: RenderJobWhereInput
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    cursor?: RenderJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession.sessionEvents
   */
  export type RoomPreviewSession$sessionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    where?: SessionEventWhereInput
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    cursor?: SessionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession.sessionIssues
   */
  export type RoomPreviewSession$sessionIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    where?: SessionIssueWhereInput
    orderBy?: SessionIssueOrderByWithRelationInput | SessionIssueOrderByWithRelationInput[]
    cursor?: SessionIssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionIssueScalarFieldEnum | SessionIssueScalarFieldEnum[]
  }

  /**
   * RoomPreviewSession without action
   */
  export type RoomPreviewSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
  }


  /**
   * Model RenderJob
   */

  export type AggregateRenderJob = {
    _count: RenderJobCountAggregateOutputType | null
    _min: RenderJobMinAggregateOutputType | null
    _max: RenderJobMaxAggregateOutputType | null
  }

  export type RenderJobMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    status: string | null
    failureReason: string | null
    inputHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderJobMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    status: string | null
    failureReason: string | null
    inputHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RenderJobCountAggregateOutputType = {
    id: number
    sessionId: number
    status: number
    input: number
    result: number
    failureReason: number
    inputHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RenderJobMinAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    failureReason?: true
    inputHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderJobMaxAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    failureReason?: true
    inputHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RenderJobCountAggregateInputType = {
    id?: true
    sessionId?: true
    status?: true
    input?: true
    result?: true
    failureReason?: true
    inputHash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RenderJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderJob to aggregate.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RenderJobs
    **/
    _count?: true | RenderJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RenderJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RenderJobMaxAggregateInputType
  }

  export type GetRenderJobAggregateType<T extends RenderJobAggregateArgs> = {
        [P in keyof T & keyof AggregateRenderJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenderJob[P]>
      : GetScalarType<T[P], AggregateRenderJob[P]>
  }




  export type RenderJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenderJobWhereInput
    orderBy?: RenderJobOrderByWithAggregationInput | RenderJobOrderByWithAggregationInput[]
    by: RenderJobScalarFieldEnum[] | RenderJobScalarFieldEnum
    having?: RenderJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RenderJobCountAggregateInputType | true
    _min?: RenderJobMinAggregateInputType
    _max?: RenderJobMaxAggregateInputType
  }

  export type RenderJobGroupByOutputType = {
    id: string
    sessionId: string
    status: string
    input: JsonValue
    result: JsonValue | null
    failureReason: string | null
    inputHash: string | null
    createdAt: Date
    updatedAt: Date
    _count: RenderJobCountAggregateOutputType | null
    _min: RenderJobMinAggregateOutputType | null
    _max: RenderJobMaxAggregateOutputType | null
  }

  type GetRenderJobGroupByPayload<T extends RenderJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenderJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RenderJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RenderJobGroupByOutputType[P]>
            : GetScalarType<T[P], RenderJobGroupByOutputType[P]>
        }
      >
    >


  export type RenderJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    input?: boolean
    result?: boolean
    failureReason?: boolean
    inputHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    input?: boolean
    result?: boolean
    failureReason?: boolean
    inputHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    status?: boolean
    input?: boolean
    result?: boolean
    failureReason?: boolean
    inputHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["renderJob"]>

  export type RenderJobSelectScalar = {
    id?: boolean
    sessionId?: boolean
    status?: boolean
    input?: boolean
    result?: boolean
    failureReason?: boolean
    inputHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RenderJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "status" | "input" | "result" | "failureReason" | "inputHash" | "createdAt" | "updatedAt", ExtArgs["result"]["renderJob"]>
  export type RenderJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type RenderJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type RenderJobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }

  export type $RenderJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RenderJob"
    objects: {
      session: Prisma.$RoomPreviewSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      status: string
      input: Prisma.JsonValue
      result: Prisma.JsonValue | null
      failureReason: string | null
      /**
       * SHA-256(roomImageUrl::productId) — used for budget counting and audit.
       */
      inputHash: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["renderJob"]>
    composites: {}
  }

  type RenderJobGetPayload<S extends boolean | null | undefined | RenderJobDefaultArgs> = $Result.GetResult<Prisma.$RenderJobPayload, S>

  type RenderJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RenderJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RenderJobCountAggregateInputType | true
    }

  export interface RenderJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RenderJob'], meta: { name: 'RenderJob' } }
    /**
     * Find zero or one RenderJob that matches the filter.
     * @param {RenderJobFindUniqueArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RenderJobFindUniqueArgs>(args: SelectSubset<T, RenderJobFindUniqueArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RenderJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RenderJobFindUniqueOrThrowArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RenderJobFindUniqueOrThrowArgs>(args: SelectSubset<T, RenderJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindFirstArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RenderJobFindFirstArgs>(args?: SelectSubset<T, RenderJobFindFirstArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RenderJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindFirstOrThrowArgs} args - Arguments to find a RenderJob
     * @example
     * // Get one RenderJob
     * const renderJob = await prisma.renderJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RenderJobFindFirstOrThrowArgs>(args?: SelectSubset<T, RenderJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RenderJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RenderJobs
     * const renderJobs = await prisma.renderJob.findMany()
     * 
     * // Get first 10 RenderJobs
     * const renderJobs = await prisma.renderJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RenderJobFindManyArgs>(args?: SelectSubset<T, RenderJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RenderJob.
     * @param {RenderJobCreateArgs} args - Arguments to create a RenderJob.
     * @example
     * // Create one RenderJob
     * const RenderJob = await prisma.renderJob.create({
     *   data: {
     *     // ... data to create a RenderJob
     *   }
     * })
     * 
     */
    create<T extends RenderJobCreateArgs>(args: SelectSubset<T, RenderJobCreateArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RenderJobs.
     * @param {RenderJobCreateManyArgs} args - Arguments to create many RenderJobs.
     * @example
     * // Create many RenderJobs
     * const renderJob = await prisma.renderJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RenderJobCreateManyArgs>(args?: SelectSubset<T, RenderJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RenderJobs and returns the data saved in the database.
     * @param {RenderJobCreateManyAndReturnArgs} args - Arguments to create many RenderJobs.
     * @example
     * // Create many RenderJobs
     * const renderJob = await prisma.renderJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RenderJobs and only return the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RenderJobCreateManyAndReturnArgs>(args?: SelectSubset<T, RenderJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RenderJob.
     * @param {RenderJobDeleteArgs} args - Arguments to delete one RenderJob.
     * @example
     * // Delete one RenderJob
     * const RenderJob = await prisma.renderJob.delete({
     *   where: {
     *     // ... filter to delete one RenderJob
     *   }
     * })
     * 
     */
    delete<T extends RenderJobDeleteArgs>(args: SelectSubset<T, RenderJobDeleteArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RenderJob.
     * @param {RenderJobUpdateArgs} args - Arguments to update one RenderJob.
     * @example
     * // Update one RenderJob
     * const renderJob = await prisma.renderJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RenderJobUpdateArgs>(args: SelectSubset<T, RenderJobUpdateArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RenderJobs.
     * @param {RenderJobDeleteManyArgs} args - Arguments to filter RenderJobs to delete.
     * @example
     * // Delete a few RenderJobs
     * const { count } = await prisma.renderJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RenderJobDeleteManyArgs>(args?: SelectSubset<T, RenderJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RenderJobs
     * const renderJob = await prisma.renderJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RenderJobUpdateManyArgs>(args: SelectSubset<T, RenderJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RenderJobs and returns the data updated in the database.
     * @param {RenderJobUpdateManyAndReturnArgs} args - Arguments to update many RenderJobs.
     * @example
     * // Update many RenderJobs
     * const renderJob = await prisma.renderJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RenderJobs and only return the `id`
     * const renderJobWithIdOnly = await prisma.renderJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RenderJobUpdateManyAndReturnArgs>(args: SelectSubset<T, RenderJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RenderJob.
     * @param {RenderJobUpsertArgs} args - Arguments to update or create a RenderJob.
     * @example
     * // Update or create a RenderJob
     * const renderJob = await prisma.renderJob.upsert({
     *   create: {
     *     // ... data to create a RenderJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RenderJob we want to update
     *   }
     * })
     */
    upsert<T extends RenderJobUpsertArgs>(args: SelectSubset<T, RenderJobUpsertArgs<ExtArgs>>): Prisma__RenderJobClient<$Result.GetResult<Prisma.$RenderJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RenderJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobCountArgs} args - Arguments to filter RenderJobs to count.
     * @example
     * // Count the number of RenderJobs
     * const count = await prisma.renderJob.count({
     *   where: {
     *     // ... the filter for the RenderJobs we want to count
     *   }
     * })
    **/
    count<T extends RenderJobCountArgs>(
      args?: Subset<T, RenderJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenderJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RenderJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RenderJobAggregateArgs>(args: Subset<T, RenderJobAggregateArgs>): Prisma.PrismaPromise<GetRenderJobAggregateType<T>>

    /**
     * Group by RenderJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenderJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RenderJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenderJobGroupByArgs['orderBy'] }
        : { orderBy?: RenderJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RenderJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRenderJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RenderJob model
   */
  readonly fields: RenderJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RenderJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenderJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends RoomPreviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSessionDefaultArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RenderJob model
   */
  interface RenderJobFieldRefs {
    readonly id: FieldRef<"RenderJob", 'String'>
    readonly sessionId: FieldRef<"RenderJob", 'String'>
    readonly status: FieldRef<"RenderJob", 'String'>
    readonly input: FieldRef<"RenderJob", 'Json'>
    readonly result: FieldRef<"RenderJob", 'Json'>
    readonly failureReason: FieldRef<"RenderJob", 'String'>
    readonly inputHash: FieldRef<"RenderJob", 'String'>
    readonly createdAt: FieldRef<"RenderJob", 'DateTime'>
    readonly updatedAt: FieldRef<"RenderJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RenderJob findUnique
   */
  export type RenderJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob findUniqueOrThrow
   */
  export type RenderJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob findFirst
   */
  export type RenderJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderJobs.
     */
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob findFirstOrThrow
   */
  export type RenderJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJob to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderJobs.
     */
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob findMany
   */
  export type RenderJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter, which RenderJobs to fetch.
     */
    where?: RenderJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RenderJobs to fetch.
     */
    orderBy?: RenderJobOrderByWithRelationInput | RenderJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RenderJobs.
     */
    cursor?: RenderJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RenderJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RenderJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RenderJobs.
     */
    distinct?: RenderJobScalarFieldEnum | RenderJobScalarFieldEnum[]
  }

  /**
   * RenderJob create
   */
  export type RenderJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The data needed to create a RenderJob.
     */
    data: XOR<RenderJobCreateInput, RenderJobUncheckedCreateInput>
  }

  /**
   * RenderJob createMany
   */
  export type RenderJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RenderJobs.
     */
    data: RenderJobCreateManyInput | RenderJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RenderJob createManyAndReturn
   */
  export type RenderJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * The data used to create many RenderJobs.
     */
    data: RenderJobCreateManyInput | RenderJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderJob update
   */
  export type RenderJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The data needed to update a RenderJob.
     */
    data: XOR<RenderJobUpdateInput, RenderJobUncheckedUpdateInput>
    /**
     * Choose, which RenderJob to update.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob updateMany
   */
  export type RenderJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RenderJobs.
     */
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyInput>
    /**
     * Filter which RenderJobs to update
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to update.
     */
    limit?: number
  }

  /**
   * RenderJob updateManyAndReturn
   */
  export type RenderJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * The data used to update RenderJobs.
     */
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyInput>
    /**
     * Filter which RenderJobs to update
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RenderJob upsert
   */
  export type RenderJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * The filter to search for the RenderJob to update in case it exists.
     */
    where: RenderJobWhereUniqueInput
    /**
     * In case the RenderJob found by the `where` argument doesn't exist, create a new RenderJob with this data.
     */
    create: XOR<RenderJobCreateInput, RenderJobUncheckedCreateInput>
    /**
     * In case the RenderJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenderJobUpdateInput, RenderJobUncheckedUpdateInput>
  }

  /**
   * RenderJob delete
   */
  export type RenderJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
    /**
     * Filter which RenderJob to delete.
     */
    where: RenderJobWhereUniqueInput
  }

  /**
   * RenderJob deleteMany
   */
  export type RenderJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RenderJobs to delete
     */
    where?: RenderJobWhereInput
    /**
     * Limit how many RenderJobs to delete.
     */
    limit?: number
  }

  /**
   * RenderJob without action
   */
  export type RenderJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RenderJob
     */
    select?: RenderJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RenderJob
     */
    omit?: RenderJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RenderJobInclude<ExtArgs> | null
  }


  /**
   * Model SessionEvent
   */

  export type AggregateSessionEvent = {
    _count: SessionEventCountAggregateOutputType | null
    _min: SessionEventMinAggregateOutputType | null
    _max: SessionEventMaxAggregateOutputType | null
  }

  export type SessionEventMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    source: string | null
    eventType: string | null
    level: string | null
    statusBefore: string | null
    statusAfter: string | null
    code: string | null
    message: string | null
  }

  export type SessionEventMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    timestamp: Date | null
    source: string | null
    eventType: string | null
    level: string | null
    statusBefore: string | null
    statusAfter: string | null
    code: string | null
    message: string | null
  }

  export type SessionEventCountAggregateOutputType = {
    id: number
    sessionId: number
    timestamp: number
    source: number
    eventType: number
    level: number
    statusBefore: number
    statusAfter: number
    code: number
    message: number
    metadata: number
    _all: number
  }


  export type SessionEventMinAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    source?: true
    eventType?: true
    level?: true
    statusBefore?: true
    statusAfter?: true
    code?: true
    message?: true
  }

  export type SessionEventMaxAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    source?: true
    eventType?: true
    level?: true
    statusBefore?: true
    statusAfter?: true
    code?: true
    message?: true
  }

  export type SessionEventCountAggregateInputType = {
    id?: true
    sessionId?: true
    timestamp?: true
    source?: true
    eventType?: true
    level?: true
    statusBefore?: true
    statusAfter?: true
    code?: true
    message?: true
    metadata?: true
    _all?: true
  }

  export type SessionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionEvent to aggregate.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionEvents
    **/
    _count?: true | SessionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionEventMaxAggregateInputType
  }

  export type GetSessionEventAggregateType<T extends SessionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionEvent[P]>
      : GetScalarType<T[P], AggregateSessionEvent[P]>
  }




  export type SessionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionEventWhereInput
    orderBy?: SessionEventOrderByWithAggregationInput | SessionEventOrderByWithAggregationInput[]
    by: SessionEventScalarFieldEnum[] | SessionEventScalarFieldEnum
    having?: SessionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionEventCountAggregateInputType | true
    _min?: SessionEventMinAggregateInputType
    _max?: SessionEventMaxAggregateInputType
  }

  export type SessionEventGroupByOutputType = {
    id: string
    sessionId: string
    timestamp: Date
    source: string
    eventType: string
    level: string
    statusBefore: string | null
    statusAfter: string | null
    code: string | null
    message: string | null
    metadata: JsonValue | null
    _count: SessionEventCountAggregateOutputType | null
    _min: SessionEventMinAggregateOutputType | null
    _max: SessionEventMaxAggregateOutputType | null
  }

  type GetSessionEventGroupByPayload<T extends SessionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionEventGroupByOutputType[P]>
            : GetScalarType<T[P], SessionEventGroupByOutputType[P]>
        }
      >
    >


  export type SessionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    source?: boolean
    eventType?: boolean
    level?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    code?: boolean
    message?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    source?: boolean
    eventType?: boolean
    level?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    code?: boolean
    message?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    source?: boolean
    eventType?: boolean
    level?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    code?: boolean
    message?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionEvent"]>

  export type SessionEventSelectScalar = {
    id?: boolean
    sessionId?: boolean
    timestamp?: boolean
    source?: boolean
    eventType?: boolean
    level?: boolean
    statusBefore?: boolean
    statusAfter?: boolean
    code?: boolean
    message?: boolean
    metadata?: boolean
  }

  export type SessionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "timestamp" | "source" | "eventType" | "level" | "statusBefore" | "statusAfter" | "code" | "message" | "metadata", ExtArgs["result"]["sessionEvent"]>
  export type SessionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type SessionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type SessionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }

  export type $SessionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionEvent"
    objects: {
      session: Prisma.$RoomPreviewSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      timestamp: Date
      source: string
      eventType: string
      level: string
      statusBefore: string | null
      statusAfter: string | null
      code: string | null
      message: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["sessionEvent"]>
    composites: {}
  }

  type SessionEventGetPayload<S extends boolean | null | undefined | SessionEventDefaultArgs> = $Result.GetResult<Prisma.$SessionEventPayload, S>

  type SessionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionEventCountAggregateInputType | true
    }

  export interface SessionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionEvent'], meta: { name: 'SessionEvent' } }
    /**
     * Find zero or one SessionEvent that matches the filter.
     * @param {SessionEventFindUniqueArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionEventFindUniqueArgs>(args: SelectSubset<T, SessionEventFindUniqueArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionEventFindUniqueOrThrowArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindFirstArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionEventFindFirstArgs>(args?: SelectSubset<T, SessionEventFindFirstArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindFirstOrThrowArgs} args - Arguments to find a SessionEvent
     * @example
     * // Get one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionEvents
     * const sessionEvents = await prisma.sessionEvent.findMany()
     * 
     * // Get first 10 SessionEvents
     * const sessionEvents = await prisma.sessionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionEventFindManyArgs>(args?: SelectSubset<T, SessionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionEvent.
     * @param {SessionEventCreateArgs} args - Arguments to create a SessionEvent.
     * @example
     * // Create one SessionEvent
     * const SessionEvent = await prisma.sessionEvent.create({
     *   data: {
     *     // ... data to create a SessionEvent
     *   }
     * })
     * 
     */
    create<T extends SessionEventCreateArgs>(args: SelectSubset<T, SessionEventCreateArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionEvents.
     * @param {SessionEventCreateManyArgs} args - Arguments to create many SessionEvents.
     * @example
     * // Create many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionEventCreateManyArgs>(args?: SelectSubset<T, SessionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionEvents and returns the data saved in the database.
     * @param {SessionEventCreateManyAndReturnArgs} args - Arguments to create many SessionEvents.
     * @example
     * // Create many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionEvents and only return the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionEvent.
     * @param {SessionEventDeleteArgs} args - Arguments to delete one SessionEvent.
     * @example
     * // Delete one SessionEvent
     * const SessionEvent = await prisma.sessionEvent.delete({
     *   where: {
     *     // ... filter to delete one SessionEvent
     *   }
     * })
     * 
     */
    delete<T extends SessionEventDeleteArgs>(args: SelectSubset<T, SessionEventDeleteArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionEvent.
     * @param {SessionEventUpdateArgs} args - Arguments to update one SessionEvent.
     * @example
     * // Update one SessionEvent
     * const sessionEvent = await prisma.sessionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionEventUpdateArgs>(args: SelectSubset<T, SessionEventUpdateArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionEvents.
     * @param {SessionEventDeleteManyArgs} args - Arguments to filter SessionEvents to delete.
     * @example
     * // Delete a few SessionEvents
     * const { count } = await prisma.sessionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionEventDeleteManyArgs>(args?: SelectSubset<T, SessionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionEventUpdateManyArgs>(args: SelectSubset<T, SessionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionEvents and returns the data updated in the database.
     * @param {SessionEventUpdateManyAndReturnArgs} args - Arguments to update many SessionEvents.
     * @example
     * // Update many SessionEvents
     * const sessionEvent = await prisma.sessionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionEvents and only return the `id`
     * const sessionEventWithIdOnly = await prisma.sessionEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionEvent.
     * @param {SessionEventUpsertArgs} args - Arguments to update or create a SessionEvent.
     * @example
     * // Update or create a SessionEvent
     * const sessionEvent = await prisma.sessionEvent.upsert({
     *   create: {
     *     // ... data to create a SessionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionEvent we want to update
     *   }
     * })
     */
    upsert<T extends SessionEventUpsertArgs>(args: SelectSubset<T, SessionEventUpsertArgs<ExtArgs>>): Prisma__SessionEventClient<$Result.GetResult<Prisma.$SessionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventCountArgs} args - Arguments to filter SessionEvents to count.
     * @example
     * // Count the number of SessionEvents
     * const count = await prisma.sessionEvent.count({
     *   where: {
     *     // ... the filter for the SessionEvents we want to count
     *   }
     * })
    **/
    count<T extends SessionEventCountArgs>(
      args?: Subset<T, SessionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionEventAggregateArgs>(args: Subset<T, SessionEventAggregateArgs>): Prisma.PrismaPromise<GetSessionEventAggregateType<T>>

    /**
     * Group by SessionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionEventGroupByArgs['orderBy'] }
        : { orderBy?: SessionEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionEvent model
   */
  readonly fields: SessionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends RoomPreviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSessionDefaultArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionEvent model
   */
  interface SessionEventFieldRefs {
    readonly id: FieldRef<"SessionEvent", 'String'>
    readonly sessionId: FieldRef<"SessionEvent", 'String'>
    readonly timestamp: FieldRef<"SessionEvent", 'DateTime'>
    readonly source: FieldRef<"SessionEvent", 'String'>
    readonly eventType: FieldRef<"SessionEvent", 'String'>
    readonly level: FieldRef<"SessionEvent", 'String'>
    readonly statusBefore: FieldRef<"SessionEvent", 'String'>
    readonly statusAfter: FieldRef<"SessionEvent", 'String'>
    readonly code: FieldRef<"SessionEvent", 'String'>
    readonly message: FieldRef<"SessionEvent", 'String'>
    readonly metadata: FieldRef<"SessionEvent", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SessionEvent findUnique
   */
  export type SessionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent findUniqueOrThrow
   */
  export type SessionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent findFirst
   */
  export type SessionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionEvents.
     */
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent findFirstOrThrow
   */
  export type SessionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvent to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionEvents.
     */
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent findMany
   */
  export type SessionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter, which SessionEvents to fetch.
     */
    where?: SessionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionEvents to fetch.
     */
    orderBy?: SessionEventOrderByWithRelationInput | SessionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionEvents.
     */
    cursor?: SessionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionEvents.
     */
    distinct?: SessionEventScalarFieldEnum | SessionEventScalarFieldEnum[]
  }

  /**
   * SessionEvent create
   */
  export type SessionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionEvent.
     */
    data: XOR<SessionEventCreateInput, SessionEventUncheckedCreateInput>
  }

  /**
   * SessionEvent createMany
   */
  export type SessionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionEvents.
     */
    data: SessionEventCreateManyInput | SessionEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionEvent createManyAndReturn
   */
  export type SessionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * The data used to create many SessionEvents.
     */
    data: SessionEventCreateManyInput | SessionEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionEvent update
   */
  export type SessionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionEvent.
     */
    data: XOR<SessionEventUpdateInput, SessionEventUncheckedUpdateInput>
    /**
     * Choose, which SessionEvent to update.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent updateMany
   */
  export type SessionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionEvents.
     */
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyInput>
    /**
     * Filter which SessionEvents to update
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to update.
     */
    limit?: number
  }

  /**
   * SessionEvent updateManyAndReturn
   */
  export type SessionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * The data used to update SessionEvents.
     */
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyInput>
    /**
     * Filter which SessionEvents to update
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionEvent upsert
   */
  export type SessionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionEvent to update in case it exists.
     */
    where: SessionEventWhereUniqueInput
    /**
     * In case the SessionEvent found by the `where` argument doesn't exist, create a new SessionEvent with this data.
     */
    create: XOR<SessionEventCreateInput, SessionEventUncheckedCreateInput>
    /**
     * In case the SessionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionEventUpdateInput, SessionEventUncheckedUpdateInput>
  }

  /**
   * SessionEvent delete
   */
  export type SessionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
    /**
     * Filter which SessionEvent to delete.
     */
    where: SessionEventWhereUniqueInput
  }

  /**
   * SessionEvent deleteMany
   */
  export type SessionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionEvents to delete
     */
    where?: SessionEventWhereInput
    /**
     * Limit how many SessionEvents to delete.
     */
    limit?: number
  }

  /**
   * SessionEvent without action
   */
  export type SessionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionEvent
     */
    select?: SessionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionEvent
     */
    omit?: SessionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionEventInclude<ExtArgs> | null
  }


  /**
   * Model SessionIssue
   */

  export type AggregateSessionIssue = {
    _count: SessionIssueCountAggregateOutputType | null
    _avg: SessionIssueAvgAggregateOutputType | null
    _sum: SessionIssueSumAggregateOutputType | null
    _min: SessionIssueMinAggregateOutputType | null
    _max: SessionIssueMaxAggregateOutputType | null
  }

  export type SessionIssueAvgAggregateOutputType = {
    count: number | null
  }

  export type SessionIssueSumAggregateOutputType = {
    count: number | null
  }

  export type SessionIssueMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    issueType: string | null
    dedupeKey: string | null
    severity: string | null
    status: string | null
    userVisible: boolean | null
    customerMessageKey: string | null
    adminMessage: string | null
    recommendedAction: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    count: number | null
  }

  export type SessionIssueMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    issueType: string | null
    dedupeKey: string | null
    severity: string | null
    status: string | null
    userVisible: boolean | null
    customerMessageKey: string | null
    adminMessage: string | null
    recommendedAction: string | null
    firstSeenAt: Date | null
    lastSeenAt: Date | null
    count: number | null
  }

  export type SessionIssueCountAggregateOutputType = {
    id: number
    sessionId: number
    issueType: number
    dedupeKey: number
    severity: number
    status: number
    userVisible: number
    customerMessageKey: number
    adminMessage: number
    recommendedAction: number
    firstSeenAt: number
    lastSeenAt: number
    count: number
    metadata: number
    _all: number
  }


  export type SessionIssueAvgAggregateInputType = {
    count?: true
  }

  export type SessionIssueSumAggregateInputType = {
    count?: true
  }

  export type SessionIssueMinAggregateInputType = {
    id?: true
    sessionId?: true
    issueType?: true
    dedupeKey?: true
    severity?: true
    status?: true
    userVisible?: true
    customerMessageKey?: true
    adminMessage?: true
    recommendedAction?: true
    firstSeenAt?: true
    lastSeenAt?: true
    count?: true
  }

  export type SessionIssueMaxAggregateInputType = {
    id?: true
    sessionId?: true
    issueType?: true
    dedupeKey?: true
    severity?: true
    status?: true
    userVisible?: true
    customerMessageKey?: true
    adminMessage?: true
    recommendedAction?: true
    firstSeenAt?: true
    lastSeenAt?: true
    count?: true
  }

  export type SessionIssueCountAggregateInputType = {
    id?: true
    sessionId?: true
    issueType?: true
    dedupeKey?: true
    severity?: true
    status?: true
    userVisible?: true
    customerMessageKey?: true
    adminMessage?: true
    recommendedAction?: true
    firstSeenAt?: true
    lastSeenAt?: true
    count?: true
    metadata?: true
    _all?: true
  }

  export type SessionIssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionIssue to aggregate.
     */
    where?: SessionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionIssues to fetch.
     */
    orderBy?: SessionIssueOrderByWithRelationInput | SessionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionIssues
    **/
    _count?: true | SessionIssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionIssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionIssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionIssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionIssueMaxAggregateInputType
  }

  export type GetSessionIssueAggregateType<T extends SessionIssueAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionIssue[P]>
      : GetScalarType<T[P], AggregateSessionIssue[P]>
  }




  export type SessionIssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionIssueWhereInput
    orderBy?: SessionIssueOrderByWithAggregationInput | SessionIssueOrderByWithAggregationInput[]
    by: SessionIssueScalarFieldEnum[] | SessionIssueScalarFieldEnum
    having?: SessionIssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionIssueCountAggregateInputType | true
    _avg?: SessionIssueAvgAggregateInputType
    _sum?: SessionIssueSumAggregateInputType
    _min?: SessionIssueMinAggregateInputType
    _max?: SessionIssueMaxAggregateInputType
  }

  export type SessionIssueGroupByOutputType = {
    id: string
    sessionId: string
    issueType: string
    dedupeKey: string | null
    severity: string
    status: string
    userVisible: boolean
    customerMessageKey: string | null
    adminMessage: string
    recommendedAction: string | null
    firstSeenAt: Date
    lastSeenAt: Date
    count: number
    metadata: JsonValue | null
    _count: SessionIssueCountAggregateOutputType | null
    _avg: SessionIssueAvgAggregateOutputType | null
    _sum: SessionIssueSumAggregateOutputType | null
    _min: SessionIssueMinAggregateOutputType | null
    _max: SessionIssueMaxAggregateOutputType | null
  }

  type GetSessionIssueGroupByPayload<T extends SessionIssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionIssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionIssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionIssueGroupByOutputType[P]>
            : GetScalarType<T[P], SessionIssueGroupByOutputType[P]>
        }
      >
    >


  export type SessionIssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    issueType?: boolean
    dedupeKey?: boolean
    severity?: boolean
    status?: boolean
    userVisible?: boolean
    customerMessageKey?: boolean
    adminMessage?: boolean
    recommendedAction?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    count?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionIssue"]>

  export type SessionIssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    issueType?: boolean
    dedupeKey?: boolean
    severity?: boolean
    status?: boolean
    userVisible?: boolean
    customerMessageKey?: boolean
    adminMessage?: boolean
    recommendedAction?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    count?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionIssue"]>

  export type SessionIssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    issueType?: boolean
    dedupeKey?: boolean
    severity?: boolean
    status?: boolean
    userVisible?: boolean
    customerMessageKey?: boolean
    adminMessage?: boolean
    recommendedAction?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    count?: boolean
    metadata?: boolean
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionIssue"]>

  export type SessionIssueSelectScalar = {
    id?: boolean
    sessionId?: boolean
    issueType?: boolean
    dedupeKey?: boolean
    severity?: boolean
    status?: boolean
    userVisible?: boolean
    customerMessageKey?: boolean
    adminMessage?: boolean
    recommendedAction?: boolean
    firstSeenAt?: boolean
    lastSeenAt?: boolean
    count?: boolean
    metadata?: boolean
  }

  export type SessionIssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "issueType" | "dedupeKey" | "severity" | "status" | "userVisible" | "customerMessageKey" | "adminMessage" | "recommendedAction" | "firstSeenAt" | "lastSeenAt" | "count" | "metadata", ExtArgs["result"]["sessionIssue"]>
  export type SessionIssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type SessionIssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }
  export type SessionIssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | RoomPreviewSessionDefaultArgs<ExtArgs>
  }

  export type $SessionIssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionIssue"
    objects: {
      session: Prisma.$RoomPreviewSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      issueType: string
      dedupeKey: string | null
      severity: string
      status: string
      userVisible: boolean
      customerMessageKey: string | null
      adminMessage: string
      recommendedAction: string | null
      firstSeenAt: Date
      lastSeenAt: Date
      count: number
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["sessionIssue"]>
    composites: {}
  }

  type SessionIssueGetPayload<S extends boolean | null | undefined | SessionIssueDefaultArgs> = $Result.GetResult<Prisma.$SessionIssuePayload, S>

  type SessionIssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionIssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionIssueCountAggregateInputType | true
    }

  export interface SessionIssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionIssue'], meta: { name: 'SessionIssue' } }
    /**
     * Find zero or one SessionIssue that matches the filter.
     * @param {SessionIssueFindUniqueArgs} args - Arguments to find a SessionIssue
     * @example
     * // Get one SessionIssue
     * const sessionIssue = await prisma.sessionIssue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionIssueFindUniqueArgs>(args: SelectSubset<T, SessionIssueFindUniqueArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionIssue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionIssueFindUniqueOrThrowArgs} args - Arguments to find a SessionIssue
     * @example
     * // Get one SessionIssue
     * const sessionIssue = await prisma.sessionIssue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionIssueFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionIssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionIssue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueFindFirstArgs} args - Arguments to find a SessionIssue
     * @example
     * // Get one SessionIssue
     * const sessionIssue = await prisma.sessionIssue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionIssueFindFirstArgs>(args?: SelectSubset<T, SessionIssueFindFirstArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionIssue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueFindFirstOrThrowArgs} args - Arguments to find a SessionIssue
     * @example
     * // Get one SessionIssue
     * const sessionIssue = await prisma.sessionIssue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionIssueFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionIssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionIssues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionIssues
     * const sessionIssues = await prisma.sessionIssue.findMany()
     * 
     * // Get first 10 SessionIssues
     * const sessionIssues = await prisma.sessionIssue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionIssueWithIdOnly = await prisma.sessionIssue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionIssueFindManyArgs>(args?: SelectSubset<T, SessionIssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionIssue.
     * @param {SessionIssueCreateArgs} args - Arguments to create a SessionIssue.
     * @example
     * // Create one SessionIssue
     * const SessionIssue = await prisma.sessionIssue.create({
     *   data: {
     *     // ... data to create a SessionIssue
     *   }
     * })
     * 
     */
    create<T extends SessionIssueCreateArgs>(args: SelectSubset<T, SessionIssueCreateArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionIssues.
     * @param {SessionIssueCreateManyArgs} args - Arguments to create many SessionIssues.
     * @example
     * // Create many SessionIssues
     * const sessionIssue = await prisma.sessionIssue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionIssueCreateManyArgs>(args?: SelectSubset<T, SessionIssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionIssues and returns the data saved in the database.
     * @param {SessionIssueCreateManyAndReturnArgs} args - Arguments to create many SessionIssues.
     * @example
     * // Create many SessionIssues
     * const sessionIssue = await prisma.sessionIssue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionIssues and only return the `id`
     * const sessionIssueWithIdOnly = await prisma.sessionIssue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionIssueCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionIssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionIssue.
     * @param {SessionIssueDeleteArgs} args - Arguments to delete one SessionIssue.
     * @example
     * // Delete one SessionIssue
     * const SessionIssue = await prisma.sessionIssue.delete({
     *   where: {
     *     // ... filter to delete one SessionIssue
     *   }
     * })
     * 
     */
    delete<T extends SessionIssueDeleteArgs>(args: SelectSubset<T, SessionIssueDeleteArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionIssue.
     * @param {SessionIssueUpdateArgs} args - Arguments to update one SessionIssue.
     * @example
     * // Update one SessionIssue
     * const sessionIssue = await prisma.sessionIssue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionIssueUpdateArgs>(args: SelectSubset<T, SessionIssueUpdateArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionIssues.
     * @param {SessionIssueDeleteManyArgs} args - Arguments to filter SessionIssues to delete.
     * @example
     * // Delete a few SessionIssues
     * const { count } = await prisma.sessionIssue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionIssueDeleteManyArgs>(args?: SelectSubset<T, SessionIssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionIssues
     * const sessionIssue = await prisma.sessionIssue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionIssueUpdateManyArgs>(args: SelectSubset<T, SessionIssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionIssues and returns the data updated in the database.
     * @param {SessionIssueUpdateManyAndReturnArgs} args - Arguments to update many SessionIssues.
     * @example
     * // Update many SessionIssues
     * const sessionIssue = await prisma.sessionIssue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionIssues and only return the `id`
     * const sessionIssueWithIdOnly = await prisma.sessionIssue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionIssueUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionIssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionIssue.
     * @param {SessionIssueUpsertArgs} args - Arguments to update or create a SessionIssue.
     * @example
     * // Update or create a SessionIssue
     * const sessionIssue = await prisma.sessionIssue.upsert({
     *   create: {
     *     // ... data to create a SessionIssue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionIssue we want to update
     *   }
     * })
     */
    upsert<T extends SessionIssueUpsertArgs>(args: SelectSubset<T, SessionIssueUpsertArgs<ExtArgs>>): Prisma__SessionIssueClient<$Result.GetResult<Prisma.$SessionIssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionIssues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueCountArgs} args - Arguments to filter SessionIssues to count.
     * @example
     * // Count the number of SessionIssues
     * const count = await prisma.sessionIssue.count({
     *   where: {
     *     // ... the filter for the SessionIssues we want to count
     *   }
     * })
    **/
    count<T extends SessionIssueCountArgs>(
      args?: Subset<T, SessionIssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionIssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionIssueAggregateArgs>(args: Subset<T, SessionIssueAggregateArgs>): Prisma.PrismaPromise<GetSessionIssueAggregateType<T>>

    /**
     * Group by SessionIssue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionIssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionIssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionIssueGroupByArgs['orderBy'] }
        : { orderBy?: SessionIssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionIssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionIssue model
   */
  readonly fields: SessionIssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionIssue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionIssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends RoomPreviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomPreviewSessionDefaultArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionIssue model
   */
  interface SessionIssueFieldRefs {
    readonly id: FieldRef<"SessionIssue", 'String'>
    readonly sessionId: FieldRef<"SessionIssue", 'String'>
    readonly issueType: FieldRef<"SessionIssue", 'String'>
    readonly dedupeKey: FieldRef<"SessionIssue", 'String'>
    readonly severity: FieldRef<"SessionIssue", 'String'>
    readonly status: FieldRef<"SessionIssue", 'String'>
    readonly userVisible: FieldRef<"SessionIssue", 'Boolean'>
    readonly customerMessageKey: FieldRef<"SessionIssue", 'String'>
    readonly adminMessage: FieldRef<"SessionIssue", 'String'>
    readonly recommendedAction: FieldRef<"SessionIssue", 'String'>
    readonly firstSeenAt: FieldRef<"SessionIssue", 'DateTime'>
    readonly lastSeenAt: FieldRef<"SessionIssue", 'DateTime'>
    readonly count: FieldRef<"SessionIssue", 'Int'>
    readonly metadata: FieldRef<"SessionIssue", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SessionIssue findUnique
   */
  export type SessionIssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter, which SessionIssue to fetch.
     */
    where: SessionIssueWhereUniqueInput
  }

  /**
   * SessionIssue findUniqueOrThrow
   */
  export type SessionIssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter, which SessionIssue to fetch.
     */
    where: SessionIssueWhereUniqueInput
  }

  /**
   * SessionIssue findFirst
   */
  export type SessionIssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter, which SessionIssue to fetch.
     */
    where?: SessionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionIssues to fetch.
     */
    orderBy?: SessionIssueOrderByWithRelationInput | SessionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionIssues.
     */
    cursor?: SessionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionIssues.
     */
    distinct?: SessionIssueScalarFieldEnum | SessionIssueScalarFieldEnum[]
  }

  /**
   * SessionIssue findFirstOrThrow
   */
  export type SessionIssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter, which SessionIssue to fetch.
     */
    where?: SessionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionIssues to fetch.
     */
    orderBy?: SessionIssueOrderByWithRelationInput | SessionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionIssues.
     */
    cursor?: SessionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionIssues.
     */
    distinct?: SessionIssueScalarFieldEnum | SessionIssueScalarFieldEnum[]
  }

  /**
   * SessionIssue findMany
   */
  export type SessionIssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter, which SessionIssues to fetch.
     */
    where?: SessionIssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionIssues to fetch.
     */
    orderBy?: SessionIssueOrderByWithRelationInput | SessionIssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionIssues.
     */
    cursor?: SessionIssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionIssues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionIssues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionIssues.
     */
    distinct?: SessionIssueScalarFieldEnum | SessionIssueScalarFieldEnum[]
  }

  /**
   * SessionIssue create
   */
  export type SessionIssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionIssue.
     */
    data: XOR<SessionIssueCreateInput, SessionIssueUncheckedCreateInput>
  }

  /**
   * SessionIssue createMany
   */
  export type SessionIssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionIssues.
     */
    data: SessionIssueCreateManyInput | SessionIssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionIssue createManyAndReturn
   */
  export type SessionIssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * The data used to create many SessionIssues.
     */
    data: SessionIssueCreateManyInput | SessionIssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionIssue update
   */
  export type SessionIssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionIssue.
     */
    data: XOR<SessionIssueUpdateInput, SessionIssueUncheckedUpdateInput>
    /**
     * Choose, which SessionIssue to update.
     */
    where: SessionIssueWhereUniqueInput
  }

  /**
   * SessionIssue updateMany
   */
  export type SessionIssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionIssues.
     */
    data: XOR<SessionIssueUpdateManyMutationInput, SessionIssueUncheckedUpdateManyInput>
    /**
     * Filter which SessionIssues to update
     */
    where?: SessionIssueWhereInput
    /**
     * Limit how many SessionIssues to update.
     */
    limit?: number
  }

  /**
   * SessionIssue updateManyAndReturn
   */
  export type SessionIssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * The data used to update SessionIssues.
     */
    data: XOR<SessionIssueUpdateManyMutationInput, SessionIssueUncheckedUpdateManyInput>
    /**
     * Filter which SessionIssues to update
     */
    where?: SessionIssueWhereInput
    /**
     * Limit how many SessionIssues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionIssue upsert
   */
  export type SessionIssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionIssue to update in case it exists.
     */
    where: SessionIssueWhereUniqueInput
    /**
     * In case the SessionIssue found by the `where` argument doesn't exist, create a new SessionIssue with this data.
     */
    create: XOR<SessionIssueCreateInput, SessionIssueUncheckedCreateInput>
    /**
     * In case the SessionIssue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionIssueUpdateInput, SessionIssueUncheckedUpdateInput>
  }

  /**
   * SessionIssue delete
   */
  export type SessionIssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
    /**
     * Filter which SessionIssue to delete.
     */
    where: SessionIssueWhereUniqueInput
  }

  /**
   * SessionIssue deleteMany
   */
  export type SessionIssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionIssues to delete
     */
    where?: SessionIssueWhereInput
    /**
     * Limit how many SessionIssues to delete.
     */
    limit?: number
  }

  /**
   * SessionIssue without action
   */
  export type SessionIssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionIssue
     */
    select?: SessionIssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionIssue
     */
    omit?: SessionIssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIssueInclude<ExtArgs> | null
  }


  /**
   * Model UserSession
   */

  export type AggregateUserSession = {
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  export type UserSessionMinAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    phone: string | null
    countryCode: string | null
    dialCode: string | null
    employeeCode: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type UserSessionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    role: string | null
    phone: string | null
    countryCode: string | null
    dialCode: string | null
    employeeCode: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type UserSessionCountAggregateOutputType = {
    id: number
    name: number
    role: number
    phone: number
    countryCode: number
    dialCode: number
    employeeCode: number
    ip: number
    createdAt: number
    _all: number
  }


  export type UserSessionMinAggregateInputType = {
    id?: true
    name?: true
    role?: true
    phone?: true
    countryCode?: true
    dialCode?: true
    employeeCode?: true
    ip?: true
    createdAt?: true
  }

  export type UserSessionMaxAggregateInputType = {
    id?: true
    name?: true
    role?: true
    phone?: true
    countryCode?: true
    dialCode?: true
    employeeCode?: true
    ip?: true
    createdAt?: true
  }

  export type UserSessionCountAggregateInputType = {
    id?: true
    name?: true
    role?: true
    phone?: true
    countryCode?: true
    dialCode?: true
    employeeCode?: true
    ip?: true
    createdAt?: true
    _all?: true
  }

  export type UserSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSession to aggregate.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSessions
    **/
    _count?: true | UserSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSessionMaxAggregateInputType
  }

  export type GetUserSessionAggregateType<T extends UserSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSession[P]>
      : GetScalarType<T[P], AggregateUserSession[P]>
  }




  export type UserSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSessionWhereInput
    orderBy?: UserSessionOrderByWithAggregationInput | UserSessionOrderByWithAggregationInput[]
    by: UserSessionScalarFieldEnum[] | UserSessionScalarFieldEnum
    having?: UserSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSessionCountAggregateInputType | true
    _min?: UserSessionMinAggregateInputType
    _max?: UserSessionMaxAggregateInputType
  }

  export type UserSessionGroupByOutputType = {
    id: string
    name: string
    role: string
    phone: string | null
    countryCode: string | null
    dialCode: string | null
    employeeCode: string | null
    ip: string | null
    createdAt: Date
    _count: UserSessionCountAggregateOutputType | null
    _min: UserSessionMinAggregateOutputType | null
    _max: UserSessionMaxAggregateOutputType | null
  }

  type GetUserSessionGroupByPayload<T extends UserSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSessionGroupByOutputType[P]>
        }
      >
    >


  export type UserSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    countryCode?: boolean
    dialCode?: boolean
    employeeCode?: boolean
    ip?: boolean
    createdAt?: boolean
    roomSession?: boolean | UserSession$roomSessionArgs<ExtArgs>
    events?: boolean | UserSession$eventsArgs<ExtArgs>
    _count?: boolean | UserSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    countryCode?: boolean
    dialCode?: boolean
    employeeCode?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    countryCode?: boolean
    dialCode?: boolean
    employeeCode?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["userSession"]>

  export type UserSessionSelectScalar = {
    id?: boolean
    name?: boolean
    role?: boolean
    phone?: boolean
    countryCode?: boolean
    dialCode?: boolean
    employeeCode?: boolean
    ip?: boolean
    createdAt?: boolean
  }

  export type UserSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "role" | "phone" | "countryCode" | "dialCode" | "employeeCode" | "ip" | "createdAt", ExtArgs["result"]["userSession"]>
  export type UserSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roomSession?: boolean | UserSession$roomSessionArgs<ExtArgs>
    events?: boolean | UserSession$eventsArgs<ExtArgs>
    _count?: boolean | UserSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSession"
    objects: {
      roomSession: Prisma.$RoomPreviewSessionPayload<ExtArgs> | null
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * "customer" | "employee"
       */
      role: string
      /**
       * Normalized E.164 phone — set when role = "customer"
       */
      phone: string | null
      /**
       * ISO 3166-1 alpha-2 country code, e.g. "SA"
       */
      countryCode: string | null
      /**
       * E.164 dial prefix, e.g. "+966"
       */
      dialCode: string | null
      /**
       * Set when role = "employee"
       */
      employeeCode: string | null
      /**
       * Best-effort client IP, captured at gate submission time.
       */
      ip: string | null
      createdAt: Date
    }, ExtArgs["result"]["userSession"]>
    composites: {}
  }

  type UserSessionGetPayload<S extends boolean | null | undefined | UserSessionDefaultArgs> = $Result.GetResult<Prisma.$UserSessionPayload, S>

  type UserSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSessionCountAggregateInputType | true
    }

  export interface UserSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSession'], meta: { name: 'UserSession' } }
    /**
     * Find zero or one UserSession that matches the filter.
     * @param {UserSessionFindUniqueArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSessionFindUniqueArgs>(args: SelectSubset<T, UserSessionFindUniqueArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSessionFindUniqueOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSessionFindFirstArgs>(args?: SelectSubset<T, UserSessionFindFirstArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindFirstOrThrowArgs} args - Arguments to find a UserSession
     * @example
     * // Get one UserSession
     * const userSession = await prisma.userSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSessions
     * const userSessions = await prisma.userSession.findMany()
     * 
     * // Get first 10 UserSessions
     * const userSessions = await prisma.userSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSessionWithIdOnly = await prisma.userSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSessionFindManyArgs>(args?: SelectSubset<T, UserSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSession.
     * @param {UserSessionCreateArgs} args - Arguments to create a UserSession.
     * @example
     * // Create one UserSession
     * const UserSession = await prisma.userSession.create({
     *   data: {
     *     // ... data to create a UserSession
     *   }
     * })
     * 
     */
    create<T extends UserSessionCreateArgs>(args: SelectSubset<T, UserSessionCreateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSessions.
     * @param {UserSessionCreateManyArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSessionCreateManyArgs>(args?: SelectSubset<T, UserSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSessions and returns the data saved in the database.
     * @param {UserSessionCreateManyAndReturnArgs} args - Arguments to create many UserSessions.
     * @example
     * // Create many UserSessions
     * const userSession = await prisma.userSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSession.
     * @param {UserSessionDeleteArgs} args - Arguments to delete one UserSession.
     * @example
     * // Delete one UserSession
     * const UserSession = await prisma.userSession.delete({
     *   where: {
     *     // ... filter to delete one UserSession
     *   }
     * })
     * 
     */
    delete<T extends UserSessionDeleteArgs>(args: SelectSubset<T, UserSessionDeleteArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSession.
     * @param {UserSessionUpdateArgs} args - Arguments to update one UserSession.
     * @example
     * // Update one UserSession
     * const userSession = await prisma.userSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSessionUpdateArgs>(args: SelectSubset<T, UserSessionUpdateArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSessions.
     * @param {UserSessionDeleteManyArgs} args - Arguments to filter UserSessions to delete.
     * @example
     * // Delete a few UserSessions
     * const { count } = await prisma.userSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSessionDeleteManyArgs>(args?: SelectSubset<T, UserSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSessionUpdateManyArgs>(args: SelectSubset<T, UserSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSessions and returns the data updated in the database.
     * @param {UserSessionUpdateManyAndReturnArgs} args - Arguments to update many UserSessions.
     * @example
     * // Update many UserSessions
     * const userSession = await prisma.userSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSessions and only return the `id`
     * const userSessionWithIdOnly = await prisma.userSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSession.
     * @param {UserSessionUpsertArgs} args - Arguments to update or create a UserSession.
     * @example
     * // Update or create a UserSession
     * const userSession = await prisma.userSession.upsert({
     *   create: {
     *     // ... data to create a UserSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSession we want to update
     *   }
     * })
     */
    upsert<T extends UserSessionUpsertArgs>(args: SelectSubset<T, UserSessionUpsertArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionCountArgs} args - Arguments to filter UserSessions to count.
     * @example
     * // Count the number of UserSessions
     * const count = await prisma.userSession.count({
     *   where: {
     *     // ... the filter for the UserSessions we want to count
     *   }
     * })
    **/
    count<T extends UserSessionCountArgs>(
      args?: Subset<T, UserSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserSessionAggregateArgs>(args: Subset<T, UserSessionAggregateArgs>): Prisma.PrismaPromise<GetUserSessionAggregateType<T>>

    /**
     * Group by UserSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSessionGroupByArgs['orderBy'] }
        : { orderBy?: UserSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSession model
   */
  readonly fields: UserSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roomSession<T extends UserSession$roomSessionArgs<ExtArgs> = {}>(args?: Subset<T, UserSession$roomSessionArgs<ExtArgs>>): Prisma__RoomPreviewSessionClient<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends UserSession$eventsArgs<ExtArgs> = {}>(args?: Subset<T, UserSession$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserSession model
   */
  interface UserSessionFieldRefs {
    readonly id: FieldRef<"UserSession", 'String'>
    readonly name: FieldRef<"UserSession", 'String'>
    readonly role: FieldRef<"UserSession", 'String'>
    readonly phone: FieldRef<"UserSession", 'String'>
    readonly countryCode: FieldRef<"UserSession", 'String'>
    readonly dialCode: FieldRef<"UserSession", 'String'>
    readonly employeeCode: FieldRef<"UserSession", 'String'>
    readonly ip: FieldRef<"UserSession", 'String'>
    readonly createdAt: FieldRef<"UserSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSession findUnique
   */
  export type UserSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findUniqueOrThrow
   */
  export type UserSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession findFirst
   */
  export type UserSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findFirstOrThrow
   */
  export type UserSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSession to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession findMany
   */
  export type UserSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter, which UserSessions to fetch.
     */
    where?: UserSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSessions to fetch.
     */
    orderBy?: UserSessionOrderByWithRelationInput | UserSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSessions.
     */
    cursor?: UserSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSessions.
     */
    distinct?: UserSessionScalarFieldEnum | UserSessionScalarFieldEnum[]
  }

  /**
   * UserSession create
   */
  export type UserSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSession.
     */
    data: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
  }

  /**
   * UserSession createMany
   */
  export type UserSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession createManyAndReturn
   */
  export type UserSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSessions.
     */
    data: UserSessionCreateManyInput | UserSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSession update
   */
  export type UserSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSession.
     */
    data: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
    /**
     * Choose, which UserSession to update.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession updateMany
   */
  export type UserSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession updateManyAndReturn
   */
  export type UserSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * The data used to update UserSessions.
     */
    data: XOR<UserSessionUpdateManyMutationInput, UserSessionUncheckedUpdateManyInput>
    /**
     * Filter which UserSessions to update
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to update.
     */
    limit?: number
  }

  /**
   * UserSession upsert
   */
  export type UserSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSession to update in case it exists.
     */
    where: UserSessionWhereUniqueInput
    /**
     * In case the UserSession found by the `where` argument doesn't exist, create a new UserSession with this data.
     */
    create: XOR<UserSessionCreateInput, UserSessionUncheckedCreateInput>
    /**
     * In case the UserSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSessionUpdateInput, UserSessionUncheckedUpdateInput>
  }

  /**
   * UserSession delete
   */
  export type UserSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
    /**
     * Filter which UserSession to delete.
     */
    where: UserSessionWhereUniqueInput
  }

  /**
   * UserSession deleteMany
   */
  export type UserSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSessions to delete
     */
    where?: UserSessionWhereInput
    /**
     * Limit how many UserSessions to delete.
     */
    limit?: number
  }

  /**
   * UserSession.roomSession
   */
  export type UserSession$roomSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    where?: RoomPreviewSessionWhereInput
  }

  /**
   * UserSession.events
   */
  export type UserSession$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * UserSession without action
   */
  export type UserSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSession
     */
    select?: UserSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSession
     */
    omit?: UserSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSessionInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phoneE164: string | null
    countryCode: string | null
    dialCode: string | null
    lastSeenAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phoneE164: string | null
    countryCode: string | null
    dialCode: string | null
    lastSeenAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phoneE164: number
    countryCode: number
    dialCode: number
    lastSeenAt: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phoneE164?: true
    countryCode?: true
    dialCode?: true
    lastSeenAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phoneE164?: true
    countryCode?: true
    dialCode?: true
    lastSeenAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phoneE164?: true
    countryCode?: true
    dialCode?: true
    lastSeenAt?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt: Date
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneE164?: boolean
    countryCode?: boolean
    dialCode?: boolean
    lastSeenAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | Customer$sessionsArgs<ExtArgs>
    experiences?: boolean | Customer$experiencesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneE164?: boolean
    countryCode?: boolean
    dialCode?: boolean
    lastSeenAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phoneE164?: boolean
    countryCode?: boolean
    dialCode?: boolean
    lastSeenAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phoneE164?: boolean
    countryCode?: boolean
    dialCode?: boolean
    lastSeenAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phoneE164" | "countryCode" | "dialCode" | "lastSeenAt" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | Customer$sessionsArgs<ExtArgs>
    experiences?: boolean | Customer$experiencesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      sessions: Prisma.$RoomPreviewSessionPayload<ExtArgs>[]
      experiences: Prisma.$CustomerExperiencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      /**
       * Primary identifier — normalized E.164, e.g. "+966501234567"
       */
      phoneE164: string
      /**
       * ISO 3166-1 alpha-2 country code, e.g. "SA"
       */
      countryCode: string
      /**
       * E.164 dial prefix stored for convenience, e.g. "+966"
       */
      dialCode: string
      lastSeenAt: Date
      /**
       * Refreshed to now+60d on every successful login.
       */
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends Customer$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPreviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experiences<T extends Customer$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phoneE164: FieldRef<"Customer", 'String'>
    readonly countryCode: FieldRef<"Customer", 'String'>
    readonly dialCode: FieldRef<"Customer", 'String'>
    readonly lastSeenAt: FieldRef<"Customer", 'DateTime'>
    readonly expiresAt: FieldRef<"Customer", 'DateTime'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.sessions
   */
  export type Customer$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPreviewSession
     */
    select?: RoomPreviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPreviewSession
     */
    omit?: RoomPreviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPreviewSessionInclude<ExtArgs> | null
    where?: RoomPreviewSessionWhereInput
    orderBy?: RoomPreviewSessionOrderByWithRelationInput | RoomPreviewSessionOrderByWithRelationInput[]
    cursor?: RoomPreviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPreviewSessionScalarFieldEnum | RoomPreviewSessionScalarFieldEnum[]
  }

  /**
   * Customer.experiences
   */
  export type Customer$experiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    where?: CustomerExperienceWhereInput
    orderBy?: CustomerExperienceOrderByWithRelationInput | CustomerExperienceOrderByWithRelationInput[]
    cursor?: CustomerExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerExperienceScalarFieldEnum | CustomerExperienceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerExperience
   */

  export type AggregateCustomerExperience = {
    _count: CustomerExperienceCountAggregateOutputType | null
    _min: CustomerExperienceMinAggregateOutputType | null
    _max: CustomerExperienceMaxAggregateOutputType | null
  }

  export type CustomerExperienceMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    sessionId: string | null
    roomImageUrl: string | null
    roomImageKey: string | null
    productId: string | null
    productName: string | null
    resultImageUrl: string | null
    resultImageKey: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type CustomerExperienceMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    sessionId: string | null
    roomImageUrl: string | null
    roomImageKey: string | null
    productId: string | null
    productName: string | null
    resultImageUrl: string | null
    resultImageKey: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type CustomerExperienceCountAggregateOutputType = {
    id: number
    customerId: number
    sessionId: number
    roomImageUrl: number
    roomImageKey: number
    productId: number
    productName: number
    resultImageUrl: number
    resultImageKey: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type CustomerExperienceMinAggregateInputType = {
    id?: true
    customerId?: true
    sessionId?: true
    roomImageUrl?: true
    roomImageKey?: true
    productId?: true
    productName?: true
    resultImageUrl?: true
    resultImageKey?: true
    createdAt?: true
    expiresAt?: true
  }

  export type CustomerExperienceMaxAggregateInputType = {
    id?: true
    customerId?: true
    sessionId?: true
    roomImageUrl?: true
    roomImageKey?: true
    productId?: true
    productName?: true
    resultImageUrl?: true
    resultImageKey?: true
    createdAt?: true
    expiresAt?: true
  }

  export type CustomerExperienceCountAggregateInputType = {
    id?: true
    customerId?: true
    sessionId?: true
    roomImageUrl?: true
    roomImageKey?: true
    productId?: true
    productName?: true
    resultImageUrl?: true
    resultImageKey?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type CustomerExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerExperience to aggregate.
     */
    where?: CustomerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerExperiences to fetch.
     */
    orderBy?: CustomerExperienceOrderByWithRelationInput | CustomerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerExperiences
    **/
    _count?: true | CustomerExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerExperienceMaxAggregateInputType
  }

  export type GetCustomerExperienceAggregateType<T extends CustomerExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerExperience[P]>
      : GetScalarType<T[P], AggregateCustomerExperience[P]>
  }




  export type CustomerExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerExperienceWhereInput
    orderBy?: CustomerExperienceOrderByWithAggregationInput | CustomerExperienceOrderByWithAggregationInput[]
    by: CustomerExperienceScalarFieldEnum[] | CustomerExperienceScalarFieldEnum
    having?: CustomerExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerExperienceCountAggregateInputType | true
    _min?: CustomerExperienceMinAggregateInputType
    _max?: CustomerExperienceMaxAggregateInputType
  }

  export type CustomerExperienceGroupByOutputType = {
    id: string
    customerId: string
    sessionId: string
    roomImageUrl: string | null
    roomImageKey: string | null
    productId: string | null
    productName: string | null
    resultImageUrl: string | null
    resultImageKey: string | null
    createdAt: Date
    expiresAt: Date
    _count: CustomerExperienceCountAggregateOutputType | null
    _min: CustomerExperienceMinAggregateOutputType | null
    _max: CustomerExperienceMaxAggregateOutputType | null
  }

  type GetCustomerExperienceGroupByPayload<T extends CustomerExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerExperienceGroupByOutputType[P]>
        }
      >
    >


  export type CustomerExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    sessionId?: boolean
    roomImageUrl?: boolean
    roomImageKey?: boolean
    productId?: boolean
    productName?: boolean
    resultImageUrl?: boolean
    resultImageKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerExperience"]>

  export type CustomerExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    sessionId?: boolean
    roomImageUrl?: boolean
    roomImageKey?: boolean
    productId?: boolean
    productName?: boolean
    resultImageUrl?: boolean
    resultImageKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerExperience"]>

  export type CustomerExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    sessionId?: boolean
    roomImageUrl?: boolean
    roomImageKey?: boolean
    productId?: boolean
    productName?: boolean
    resultImageUrl?: boolean
    resultImageKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerExperience"]>

  export type CustomerExperienceSelectScalar = {
    id?: boolean
    customerId?: boolean
    sessionId?: boolean
    roomImageUrl?: boolean
    roomImageKey?: boolean
    productId?: boolean
    productName?: boolean
    resultImageUrl?: boolean
    resultImageKey?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type CustomerExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "sessionId" | "roomImageUrl" | "roomImageKey" | "productId" | "productName" | "resultImageUrl" | "resultImageKey" | "createdAt" | "expiresAt", ExtArgs["result"]["customerExperience"]>
  export type CustomerExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerExperience"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      /**
       * Reference only — not a FK so cleanup of sessions doesn't cascade here.
       */
      sessionId: string
      roomImageUrl: string | null
      roomImageKey: string | null
      productId: string | null
      productName: string | null
      resultImageUrl: string | null
      resultImageKey: string | null
      createdAt: Date
      /**
       * Mirrors Customer.expiresAt set at save time.
       */
      expiresAt: Date
    }, ExtArgs["result"]["customerExperience"]>
    composites: {}
  }

  type CustomerExperienceGetPayload<S extends boolean | null | undefined | CustomerExperienceDefaultArgs> = $Result.GetResult<Prisma.$CustomerExperiencePayload, S>

  type CustomerExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerExperienceCountAggregateInputType | true
    }

  export interface CustomerExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerExperience'], meta: { name: 'CustomerExperience' } }
    /**
     * Find zero or one CustomerExperience that matches the filter.
     * @param {CustomerExperienceFindUniqueArgs} args - Arguments to find a CustomerExperience
     * @example
     * // Get one CustomerExperience
     * const customerExperience = await prisma.customerExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerExperienceFindUniqueArgs>(args: SelectSubset<T, CustomerExperienceFindUniqueArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerExperience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerExperienceFindUniqueOrThrowArgs} args - Arguments to find a CustomerExperience
     * @example
     * // Get one CustomerExperience
     * const customerExperience = await prisma.customerExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceFindFirstArgs} args - Arguments to find a CustomerExperience
     * @example
     * // Get one CustomerExperience
     * const customerExperience = await prisma.customerExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerExperienceFindFirstArgs>(args?: SelectSubset<T, CustomerExperienceFindFirstArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceFindFirstOrThrowArgs} args - Arguments to find a CustomerExperience
     * @example
     * // Get one CustomerExperience
     * const customerExperience = await prisma.customerExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerExperiences
     * const customerExperiences = await prisma.customerExperience.findMany()
     * 
     * // Get first 10 CustomerExperiences
     * const customerExperiences = await prisma.customerExperience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerExperienceWithIdOnly = await prisma.customerExperience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerExperienceFindManyArgs>(args?: SelectSubset<T, CustomerExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerExperience.
     * @param {CustomerExperienceCreateArgs} args - Arguments to create a CustomerExperience.
     * @example
     * // Create one CustomerExperience
     * const CustomerExperience = await prisma.customerExperience.create({
     *   data: {
     *     // ... data to create a CustomerExperience
     *   }
     * })
     * 
     */
    create<T extends CustomerExperienceCreateArgs>(args: SelectSubset<T, CustomerExperienceCreateArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerExperiences.
     * @param {CustomerExperienceCreateManyArgs} args - Arguments to create many CustomerExperiences.
     * @example
     * // Create many CustomerExperiences
     * const customerExperience = await prisma.customerExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerExperienceCreateManyArgs>(args?: SelectSubset<T, CustomerExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerExperiences and returns the data saved in the database.
     * @param {CustomerExperienceCreateManyAndReturnArgs} args - Arguments to create many CustomerExperiences.
     * @example
     * // Create many CustomerExperiences
     * const customerExperience = await prisma.customerExperience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerExperiences and only return the `id`
     * const customerExperienceWithIdOnly = await prisma.customerExperience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerExperience.
     * @param {CustomerExperienceDeleteArgs} args - Arguments to delete one CustomerExperience.
     * @example
     * // Delete one CustomerExperience
     * const CustomerExperience = await prisma.customerExperience.delete({
     *   where: {
     *     // ... filter to delete one CustomerExperience
     *   }
     * })
     * 
     */
    delete<T extends CustomerExperienceDeleteArgs>(args: SelectSubset<T, CustomerExperienceDeleteArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerExperience.
     * @param {CustomerExperienceUpdateArgs} args - Arguments to update one CustomerExperience.
     * @example
     * // Update one CustomerExperience
     * const customerExperience = await prisma.customerExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerExperienceUpdateArgs>(args: SelectSubset<T, CustomerExperienceUpdateArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerExperiences.
     * @param {CustomerExperienceDeleteManyArgs} args - Arguments to filter CustomerExperiences to delete.
     * @example
     * // Delete a few CustomerExperiences
     * const { count } = await prisma.customerExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerExperienceDeleteManyArgs>(args?: SelectSubset<T, CustomerExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerExperiences
     * const customerExperience = await prisma.customerExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerExperienceUpdateManyArgs>(args: SelectSubset<T, CustomerExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerExperiences and returns the data updated in the database.
     * @param {CustomerExperienceUpdateManyAndReturnArgs} args - Arguments to update many CustomerExperiences.
     * @example
     * // Update many CustomerExperiences
     * const customerExperience = await prisma.customerExperience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerExperiences and only return the `id`
     * const customerExperienceWithIdOnly = await prisma.customerExperience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerExperience.
     * @param {CustomerExperienceUpsertArgs} args - Arguments to update or create a CustomerExperience.
     * @example
     * // Update or create a CustomerExperience
     * const customerExperience = await prisma.customerExperience.upsert({
     *   create: {
     *     // ... data to create a CustomerExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerExperience we want to update
     *   }
     * })
     */
    upsert<T extends CustomerExperienceUpsertArgs>(args: SelectSubset<T, CustomerExperienceUpsertArgs<ExtArgs>>): Prisma__CustomerExperienceClient<$Result.GetResult<Prisma.$CustomerExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceCountArgs} args - Arguments to filter CustomerExperiences to count.
     * @example
     * // Count the number of CustomerExperiences
     * const count = await prisma.customerExperience.count({
     *   where: {
     *     // ... the filter for the CustomerExperiences we want to count
     *   }
     * })
    **/
    count<T extends CustomerExperienceCountArgs>(
      args?: Subset<T, CustomerExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerExperienceAggregateArgs>(args: Subset<T, CustomerExperienceAggregateArgs>): Prisma.PrismaPromise<GetCustomerExperienceAggregateType<T>>

    /**
     * Group by CustomerExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerExperienceGroupByArgs['orderBy'] }
        : { orderBy?: CustomerExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerExperience model
   */
  readonly fields: CustomerExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerExperience model
   */
  interface CustomerExperienceFieldRefs {
    readonly id: FieldRef<"CustomerExperience", 'String'>
    readonly customerId: FieldRef<"CustomerExperience", 'String'>
    readonly sessionId: FieldRef<"CustomerExperience", 'String'>
    readonly roomImageUrl: FieldRef<"CustomerExperience", 'String'>
    readonly roomImageKey: FieldRef<"CustomerExperience", 'String'>
    readonly productId: FieldRef<"CustomerExperience", 'String'>
    readonly productName: FieldRef<"CustomerExperience", 'String'>
    readonly resultImageUrl: FieldRef<"CustomerExperience", 'String'>
    readonly resultImageKey: FieldRef<"CustomerExperience", 'String'>
    readonly createdAt: FieldRef<"CustomerExperience", 'DateTime'>
    readonly expiresAt: FieldRef<"CustomerExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerExperience findUnique
   */
  export type CustomerExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerExperience to fetch.
     */
    where: CustomerExperienceWhereUniqueInput
  }

  /**
   * CustomerExperience findUniqueOrThrow
   */
  export type CustomerExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerExperience to fetch.
     */
    where: CustomerExperienceWhereUniqueInput
  }

  /**
   * CustomerExperience findFirst
   */
  export type CustomerExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerExperience to fetch.
     */
    where?: CustomerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerExperiences to fetch.
     */
    orderBy?: CustomerExperienceOrderByWithRelationInput | CustomerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerExperiences.
     */
    cursor?: CustomerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerExperiences.
     */
    distinct?: CustomerExperienceScalarFieldEnum | CustomerExperienceScalarFieldEnum[]
  }

  /**
   * CustomerExperience findFirstOrThrow
   */
  export type CustomerExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerExperience to fetch.
     */
    where?: CustomerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerExperiences to fetch.
     */
    orderBy?: CustomerExperienceOrderByWithRelationInput | CustomerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerExperiences.
     */
    cursor?: CustomerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerExperiences.
     */
    distinct?: CustomerExperienceScalarFieldEnum | CustomerExperienceScalarFieldEnum[]
  }

  /**
   * CustomerExperience findMany
   */
  export type CustomerExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerExperiences to fetch.
     */
    where?: CustomerExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerExperiences to fetch.
     */
    orderBy?: CustomerExperienceOrderByWithRelationInput | CustomerExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerExperiences.
     */
    cursor?: CustomerExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerExperiences.
     */
    distinct?: CustomerExperienceScalarFieldEnum | CustomerExperienceScalarFieldEnum[]
  }

  /**
   * CustomerExperience create
   */
  export type CustomerExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerExperience.
     */
    data: XOR<CustomerExperienceCreateInput, CustomerExperienceUncheckedCreateInput>
  }

  /**
   * CustomerExperience createMany
   */
  export type CustomerExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerExperiences.
     */
    data: CustomerExperienceCreateManyInput | CustomerExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerExperience createManyAndReturn
   */
  export type CustomerExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerExperiences.
     */
    data: CustomerExperienceCreateManyInput | CustomerExperienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerExperience update
   */
  export type CustomerExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerExperience.
     */
    data: XOR<CustomerExperienceUpdateInput, CustomerExperienceUncheckedUpdateInput>
    /**
     * Choose, which CustomerExperience to update.
     */
    where: CustomerExperienceWhereUniqueInput
  }

  /**
   * CustomerExperience updateMany
   */
  export type CustomerExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerExperiences.
     */
    data: XOR<CustomerExperienceUpdateManyMutationInput, CustomerExperienceUncheckedUpdateManyInput>
    /**
     * Filter which CustomerExperiences to update
     */
    where?: CustomerExperienceWhereInput
    /**
     * Limit how many CustomerExperiences to update.
     */
    limit?: number
  }

  /**
   * CustomerExperience updateManyAndReturn
   */
  export type CustomerExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * The data used to update CustomerExperiences.
     */
    data: XOR<CustomerExperienceUpdateManyMutationInput, CustomerExperienceUncheckedUpdateManyInput>
    /**
     * Filter which CustomerExperiences to update
     */
    where?: CustomerExperienceWhereInput
    /**
     * Limit how many CustomerExperiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerExperience upsert
   */
  export type CustomerExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerExperience to update in case it exists.
     */
    where: CustomerExperienceWhereUniqueInput
    /**
     * In case the CustomerExperience found by the `where` argument doesn't exist, create a new CustomerExperience with this data.
     */
    create: XOR<CustomerExperienceCreateInput, CustomerExperienceUncheckedCreateInput>
    /**
     * In case the CustomerExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerExperienceUpdateInput, CustomerExperienceUncheckedUpdateInput>
  }

  /**
   * CustomerExperience delete
   */
  export type CustomerExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
    /**
     * Filter which CustomerExperience to delete.
     */
    where: CustomerExperienceWhereUniqueInput
  }

  /**
   * CustomerExperience deleteMany
   */
  export type CustomerExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerExperiences to delete
     */
    where?: CustomerExperienceWhereInput
    /**
     * Limit how many CustomerExperiences to delete.
     */
    limit?: number
  }

  /**
   * CustomerExperience without action
   */
  export type CustomerExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerExperience
     */
    select?: CustomerExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerExperience
     */
    omit?: CustomerExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    userSessionId: string | null
    sessionId: string | null
    eventType: string | null
    renderJobId: string | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    userSessionId: string | null
    sessionId: string | null
    eventType: string | null
    renderJobId: string | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    userSessionId: number
    sessionId: number
    eventType: number
    renderJobId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    userSessionId?: true
    sessionId?: true
    eventType?: true
    renderJobId?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    userSessionId?: true
    sessionId?: true
    eventType?: true
    renderJobId?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    userSessionId?: true
    sessionId?: true
    eventType?: true
    renderJobId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    userSessionId: string
    sessionId: string | null
    eventType: string
    renderJobId: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userSessionId?: boolean
    sessionId?: boolean
    eventType?: boolean
    renderJobId?: boolean
    metadata?: boolean
    createdAt?: boolean
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userSessionId?: boolean
    sessionId?: boolean
    eventType?: boolean
    renderJobId?: boolean
    metadata?: boolean
    createdAt?: boolean
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userSessionId?: boolean
    sessionId?: boolean
    eventType?: boolean
    renderJobId?: boolean
    metadata?: boolean
    createdAt?: boolean
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    userSessionId?: boolean
    sessionId?: boolean
    eventType?: boolean
    renderJobId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userSessionId" | "sessionId" | "eventType" | "renderJobId" | "metadata" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userSession?: boolean | UserSessionDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      userSession: Prisma.$UserSessionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userSessionId: string
      /**
       * FK to RoomPreviewSession.id — available after gate completes.
       */
      sessionId: string | null
      /**
       * e.g. "user_entered" | "qr_scanned" | "room_opened" |
       * "render_started" | "render_completed" | "render_failed"
       */
      eventType: string
      /**
       * FK to RenderJob.id — set for render_* events.
       */
      renderJobId: string | null
      /**
       * Arbitrary JSON payload (room source, device UA, duration, etc.)
       */
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userSession<T extends UserSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserSessionDefaultArgs<ExtArgs>>): Prisma__UserSessionClient<$Result.GetResult<Prisma.$UserSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly userSessionId: FieldRef<"Event", 'String'>
    readonly sessionId: FieldRef<"Event", 'String'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly renderJobId: FieldRef<"Event", 'String'>
    readonly metadata: FieldRef<"Event", 'Json'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ScreenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    secretHash: 'secretHash',
    dailyBudget: 'dailyBudget',
    isActive: 'isActive',
    lastRenderAt: 'lastRenderAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScreenScalarFieldEnum = (typeof ScreenScalarFieldEnum)[keyof typeof ScreenScalarFieldEnum]


  export const RoomPreviewSessionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    mobileConnected: 'mobileConnected',
    renderCount: 'renderCount',
    selectedRoom: 'selectedRoom',
    selectedProduct: 'selectedProduct',
    renderResult: 'renderResult',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    screenId: 'screenId',
    lastRenderHash: 'lastRenderHash',
    userSessionId: 'userSessionId',
    customerId: 'customerId',
    lastMobileSeenAt: 'lastMobileSeenAt',
    lastScreenSeenAt: 'lastScreenSeenAt'
  };

  export type RoomPreviewSessionScalarFieldEnum = (typeof RoomPreviewSessionScalarFieldEnum)[keyof typeof RoomPreviewSessionScalarFieldEnum]


  export const RenderJobScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    status: 'status',
    input: 'input',
    result: 'result',
    failureReason: 'failureReason',
    inputHash: 'inputHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RenderJobScalarFieldEnum = (typeof RenderJobScalarFieldEnum)[keyof typeof RenderJobScalarFieldEnum]


  export const SessionEventScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    timestamp: 'timestamp',
    source: 'source',
    eventType: 'eventType',
    level: 'level',
    statusBefore: 'statusBefore',
    statusAfter: 'statusAfter',
    code: 'code',
    message: 'message',
    metadata: 'metadata'
  };

  export type SessionEventScalarFieldEnum = (typeof SessionEventScalarFieldEnum)[keyof typeof SessionEventScalarFieldEnum]


  export const SessionIssueScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    issueType: 'issueType',
    dedupeKey: 'dedupeKey',
    severity: 'severity',
    status: 'status',
    userVisible: 'userVisible',
    customerMessageKey: 'customerMessageKey',
    adminMessage: 'adminMessage',
    recommendedAction: 'recommendedAction',
    firstSeenAt: 'firstSeenAt',
    lastSeenAt: 'lastSeenAt',
    count: 'count',
    metadata: 'metadata'
  };

  export type SessionIssueScalarFieldEnum = (typeof SessionIssueScalarFieldEnum)[keyof typeof SessionIssueScalarFieldEnum]


  export const UserSessionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    role: 'role',
    phone: 'phone',
    countryCode: 'countryCode',
    dialCode: 'dialCode',
    employeeCode: 'employeeCode',
    ip: 'ip',
    createdAt: 'createdAt'
  };

  export type UserSessionScalarFieldEnum = (typeof UserSessionScalarFieldEnum)[keyof typeof UserSessionScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phoneE164: 'phoneE164',
    countryCode: 'countryCode',
    dialCode: 'dialCode',
    lastSeenAt: 'lastSeenAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerExperienceScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    sessionId: 'sessionId',
    roomImageUrl: 'roomImageUrl',
    roomImageKey: 'roomImageKey',
    productId: 'productId',
    productName: 'productName',
    resultImageUrl: 'resultImageUrl',
    resultImageKey: 'resultImageKey',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type CustomerExperienceScalarFieldEnum = (typeof CustomerExperienceScalarFieldEnum)[keyof typeof CustomerExperienceScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    userSessionId: 'userSessionId',
    sessionId: 'sessionId',
    eventType: 'eventType',
    renderJobId: 'renderJobId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ScreenWhereInput = {
    AND?: ScreenWhereInput | ScreenWhereInput[]
    OR?: ScreenWhereInput[]
    NOT?: ScreenWhereInput | ScreenWhereInput[]
    id?: StringFilter<"Screen"> | string
    name?: StringFilter<"Screen"> | string
    location?: StringNullableFilter<"Screen"> | string | null
    secretHash?: StringFilter<"Screen"> | string
    dailyBudget?: IntFilter<"Screen"> | number
    isActive?: BoolFilter<"Screen"> | boolean
    lastRenderAt?: DateTimeNullableFilter<"Screen"> | Date | string | null
    createdAt?: DateTimeFilter<"Screen"> | Date | string
    updatedAt?: DateTimeFilter<"Screen"> | Date | string
    sessions?: RoomPreviewSessionListRelationFilter
  }

  export type ScreenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    secretHash?: SortOrder
    dailyBudget?: SortOrder
    isActive?: SortOrder
    lastRenderAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: RoomPreviewSessionOrderByRelationAggregateInput
  }

  export type ScreenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    secretHash?: string
    AND?: ScreenWhereInput | ScreenWhereInput[]
    OR?: ScreenWhereInput[]
    NOT?: ScreenWhereInput | ScreenWhereInput[]
    name?: StringFilter<"Screen"> | string
    location?: StringNullableFilter<"Screen"> | string | null
    dailyBudget?: IntFilter<"Screen"> | number
    isActive?: BoolFilter<"Screen"> | boolean
    lastRenderAt?: DateTimeNullableFilter<"Screen"> | Date | string | null
    createdAt?: DateTimeFilter<"Screen"> | Date | string
    updatedAt?: DateTimeFilter<"Screen"> | Date | string
    sessions?: RoomPreviewSessionListRelationFilter
  }, "id" | "secretHash">

  export type ScreenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    secretHash?: SortOrder
    dailyBudget?: SortOrder
    isActive?: SortOrder
    lastRenderAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScreenCountOrderByAggregateInput
    _avg?: ScreenAvgOrderByAggregateInput
    _max?: ScreenMaxOrderByAggregateInput
    _min?: ScreenMinOrderByAggregateInput
    _sum?: ScreenSumOrderByAggregateInput
  }

  export type ScreenScalarWhereWithAggregatesInput = {
    AND?: ScreenScalarWhereWithAggregatesInput | ScreenScalarWhereWithAggregatesInput[]
    OR?: ScreenScalarWhereWithAggregatesInput[]
    NOT?: ScreenScalarWhereWithAggregatesInput | ScreenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Screen"> | string
    name?: StringWithAggregatesFilter<"Screen"> | string
    location?: StringNullableWithAggregatesFilter<"Screen"> | string | null
    secretHash?: StringWithAggregatesFilter<"Screen"> | string
    dailyBudget?: IntWithAggregatesFilter<"Screen"> | number
    isActive?: BoolWithAggregatesFilter<"Screen"> | boolean
    lastRenderAt?: DateTimeNullableWithAggregatesFilter<"Screen"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Screen"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Screen"> | Date | string
  }

  export type RoomPreviewSessionWhereInput = {
    AND?: RoomPreviewSessionWhereInput | RoomPreviewSessionWhereInput[]
    OR?: RoomPreviewSessionWhereInput[]
    NOT?: RoomPreviewSessionWhereInput | RoomPreviewSessionWhereInput[]
    id?: StringFilter<"RoomPreviewSession"> | string
    status?: StringFilter<"RoomPreviewSession"> | string
    mobileConnected?: BoolFilter<"RoomPreviewSession"> | boolean
    renderCount?: IntFilter<"RoomPreviewSession"> | number
    selectedRoom?: JsonNullableFilter<"RoomPreviewSession">
    selectedProduct?: JsonNullableFilter<"RoomPreviewSession">
    renderResult?: JsonNullableFilter<"RoomPreviewSession">
    expiresAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    screenId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastRenderHash?: StringNullableFilter<"RoomPreviewSession"> | string | null
    userSessionId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    customerId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastMobileSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    lastScreenSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    screen?: XOR<ScreenNullableScalarRelationFilter, ScreenWhereInput> | null
    userSession?: XOR<UserSessionNullableScalarRelationFilter, UserSessionWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    renderJobs?: RenderJobListRelationFilter
    sessionEvents?: SessionEventListRelationFilter
    sessionIssues?: SessionIssueListRelationFilter
  }

  export type RoomPreviewSessionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    mobileConnected?: SortOrder
    renderCount?: SortOrder
    selectedRoom?: SortOrderInput | SortOrder
    selectedProduct?: SortOrderInput | SortOrder
    renderResult?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenId?: SortOrderInput | SortOrder
    lastRenderHash?: SortOrderInput | SortOrder
    userSessionId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    lastMobileSeenAt?: SortOrderInput | SortOrder
    lastScreenSeenAt?: SortOrderInput | SortOrder
    screen?: ScreenOrderByWithRelationInput
    userSession?: UserSessionOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    renderJobs?: RenderJobOrderByRelationAggregateInput
    sessionEvents?: SessionEventOrderByRelationAggregateInput
    sessionIssues?: SessionIssueOrderByRelationAggregateInput
  }

  export type RoomPreviewSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userSessionId?: string
    AND?: RoomPreviewSessionWhereInput | RoomPreviewSessionWhereInput[]
    OR?: RoomPreviewSessionWhereInput[]
    NOT?: RoomPreviewSessionWhereInput | RoomPreviewSessionWhereInput[]
    status?: StringFilter<"RoomPreviewSession"> | string
    mobileConnected?: BoolFilter<"RoomPreviewSession"> | boolean
    renderCount?: IntFilter<"RoomPreviewSession"> | number
    selectedRoom?: JsonNullableFilter<"RoomPreviewSession">
    selectedProduct?: JsonNullableFilter<"RoomPreviewSession">
    renderResult?: JsonNullableFilter<"RoomPreviewSession">
    expiresAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    screenId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastRenderHash?: StringNullableFilter<"RoomPreviewSession"> | string | null
    customerId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastMobileSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    lastScreenSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    screen?: XOR<ScreenNullableScalarRelationFilter, ScreenWhereInput> | null
    userSession?: XOR<UserSessionNullableScalarRelationFilter, UserSessionWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    renderJobs?: RenderJobListRelationFilter
    sessionEvents?: SessionEventListRelationFilter
    sessionIssues?: SessionIssueListRelationFilter
  }, "id" | "userSessionId">

  export type RoomPreviewSessionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    mobileConnected?: SortOrder
    renderCount?: SortOrder
    selectedRoom?: SortOrderInput | SortOrder
    selectedProduct?: SortOrderInput | SortOrder
    renderResult?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenId?: SortOrderInput | SortOrder
    lastRenderHash?: SortOrderInput | SortOrder
    userSessionId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    lastMobileSeenAt?: SortOrderInput | SortOrder
    lastScreenSeenAt?: SortOrderInput | SortOrder
    _count?: RoomPreviewSessionCountOrderByAggregateInput
    _avg?: RoomPreviewSessionAvgOrderByAggregateInput
    _max?: RoomPreviewSessionMaxOrderByAggregateInput
    _min?: RoomPreviewSessionMinOrderByAggregateInput
    _sum?: RoomPreviewSessionSumOrderByAggregateInput
  }

  export type RoomPreviewSessionScalarWhereWithAggregatesInput = {
    AND?: RoomPreviewSessionScalarWhereWithAggregatesInput | RoomPreviewSessionScalarWhereWithAggregatesInput[]
    OR?: RoomPreviewSessionScalarWhereWithAggregatesInput[]
    NOT?: RoomPreviewSessionScalarWhereWithAggregatesInput | RoomPreviewSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RoomPreviewSession"> | string
    status?: StringWithAggregatesFilter<"RoomPreviewSession"> | string
    mobileConnected?: BoolWithAggregatesFilter<"RoomPreviewSession"> | boolean
    renderCount?: IntWithAggregatesFilter<"RoomPreviewSession"> | number
    selectedRoom?: JsonNullableWithAggregatesFilter<"RoomPreviewSession">
    selectedProduct?: JsonNullableWithAggregatesFilter<"RoomPreviewSession">
    renderResult?: JsonNullableWithAggregatesFilter<"RoomPreviewSession">
    expiresAt?: DateTimeNullableWithAggregatesFilter<"RoomPreviewSession"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomPreviewSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoomPreviewSession"> | Date | string
    screenId?: StringNullableWithAggregatesFilter<"RoomPreviewSession"> | string | null
    lastRenderHash?: StringNullableWithAggregatesFilter<"RoomPreviewSession"> | string | null
    userSessionId?: StringNullableWithAggregatesFilter<"RoomPreviewSession"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"RoomPreviewSession"> | string | null
    lastMobileSeenAt?: DateTimeNullableWithAggregatesFilter<"RoomPreviewSession"> | Date | string | null
    lastScreenSeenAt?: DateTimeNullableWithAggregatesFilter<"RoomPreviewSession"> | Date | string | null
  }

  export type RenderJobWhereInput = {
    AND?: RenderJobWhereInput | RenderJobWhereInput[]
    OR?: RenderJobWhereInput[]
    NOT?: RenderJobWhereInput | RenderJobWhereInput[]
    id?: StringFilter<"RenderJob"> | string
    sessionId?: StringFilter<"RenderJob"> | string
    status?: StringFilter<"RenderJob"> | string
    input?: JsonFilter<"RenderJob">
    result?: JsonNullableFilter<"RenderJob">
    failureReason?: StringNullableFilter<"RenderJob"> | string | null
    inputHash?: StringNullableFilter<"RenderJob"> | string | null
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }

  export type RenderJobOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    input?: SortOrder
    result?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    inputHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    session?: RoomPreviewSessionOrderByWithRelationInput
  }

  export type RenderJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RenderJobWhereInput | RenderJobWhereInput[]
    OR?: RenderJobWhereInput[]
    NOT?: RenderJobWhereInput | RenderJobWhereInput[]
    sessionId?: StringFilter<"RenderJob"> | string
    status?: StringFilter<"RenderJob"> | string
    input?: JsonFilter<"RenderJob">
    result?: JsonNullableFilter<"RenderJob">
    failureReason?: StringNullableFilter<"RenderJob"> | string | null
    inputHash?: StringNullableFilter<"RenderJob"> | string | null
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }, "id">

  export type RenderJobOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    input?: SortOrder
    result?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    inputHash?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RenderJobCountOrderByAggregateInput
    _max?: RenderJobMaxOrderByAggregateInput
    _min?: RenderJobMinOrderByAggregateInput
  }

  export type RenderJobScalarWhereWithAggregatesInput = {
    AND?: RenderJobScalarWhereWithAggregatesInput | RenderJobScalarWhereWithAggregatesInput[]
    OR?: RenderJobScalarWhereWithAggregatesInput[]
    NOT?: RenderJobScalarWhereWithAggregatesInput | RenderJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RenderJob"> | string
    sessionId?: StringWithAggregatesFilter<"RenderJob"> | string
    status?: StringWithAggregatesFilter<"RenderJob"> | string
    input?: JsonWithAggregatesFilter<"RenderJob">
    result?: JsonNullableWithAggregatesFilter<"RenderJob">
    failureReason?: StringNullableWithAggregatesFilter<"RenderJob"> | string | null
    inputHash?: StringNullableWithAggregatesFilter<"RenderJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RenderJob"> | Date | string
  }

  export type SessionEventWhereInput = {
    AND?: SessionEventWhereInput | SessionEventWhereInput[]
    OR?: SessionEventWhereInput[]
    NOT?: SessionEventWhereInput | SessionEventWhereInput[]
    id?: StringFilter<"SessionEvent"> | string
    sessionId?: StringFilter<"SessionEvent"> | string
    timestamp?: DateTimeFilter<"SessionEvent"> | Date | string
    source?: StringFilter<"SessionEvent"> | string
    eventType?: StringFilter<"SessionEvent"> | string
    level?: StringFilter<"SessionEvent"> | string
    statusBefore?: StringNullableFilter<"SessionEvent"> | string | null
    statusAfter?: StringNullableFilter<"SessionEvent"> | string | null
    code?: StringNullableFilter<"SessionEvent"> | string | null
    message?: StringNullableFilter<"SessionEvent"> | string | null
    metadata?: JsonNullableFilter<"SessionEvent">
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }

  export type SessionEventOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    statusBefore?: SortOrderInput | SortOrder
    statusAfter?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    session?: RoomPreviewSessionOrderByWithRelationInput
  }

  export type SessionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionEventWhereInput | SessionEventWhereInput[]
    OR?: SessionEventWhereInput[]
    NOT?: SessionEventWhereInput | SessionEventWhereInput[]
    sessionId?: StringFilter<"SessionEvent"> | string
    timestamp?: DateTimeFilter<"SessionEvent"> | Date | string
    source?: StringFilter<"SessionEvent"> | string
    eventType?: StringFilter<"SessionEvent"> | string
    level?: StringFilter<"SessionEvent"> | string
    statusBefore?: StringNullableFilter<"SessionEvent"> | string | null
    statusAfter?: StringNullableFilter<"SessionEvent"> | string | null
    code?: StringNullableFilter<"SessionEvent"> | string | null
    message?: StringNullableFilter<"SessionEvent"> | string | null
    metadata?: JsonNullableFilter<"SessionEvent">
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }, "id">

  export type SessionEventOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    statusBefore?: SortOrderInput | SortOrder
    statusAfter?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: SessionEventCountOrderByAggregateInput
    _max?: SessionEventMaxOrderByAggregateInput
    _min?: SessionEventMinOrderByAggregateInput
  }

  export type SessionEventScalarWhereWithAggregatesInput = {
    AND?: SessionEventScalarWhereWithAggregatesInput | SessionEventScalarWhereWithAggregatesInput[]
    OR?: SessionEventScalarWhereWithAggregatesInput[]
    NOT?: SessionEventScalarWhereWithAggregatesInput | SessionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionEvent"> | string
    sessionId?: StringWithAggregatesFilter<"SessionEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SessionEvent"> | Date | string
    source?: StringWithAggregatesFilter<"SessionEvent"> | string
    eventType?: StringWithAggregatesFilter<"SessionEvent"> | string
    level?: StringWithAggregatesFilter<"SessionEvent"> | string
    statusBefore?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    statusAfter?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    code?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    message?: StringNullableWithAggregatesFilter<"SessionEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"SessionEvent">
  }

  export type SessionIssueWhereInput = {
    AND?: SessionIssueWhereInput | SessionIssueWhereInput[]
    OR?: SessionIssueWhereInput[]
    NOT?: SessionIssueWhereInput | SessionIssueWhereInput[]
    id?: StringFilter<"SessionIssue"> | string
    sessionId?: StringFilter<"SessionIssue"> | string
    issueType?: StringFilter<"SessionIssue"> | string
    dedupeKey?: StringNullableFilter<"SessionIssue"> | string | null
    severity?: StringFilter<"SessionIssue"> | string
    status?: StringFilter<"SessionIssue"> | string
    userVisible?: BoolFilter<"SessionIssue"> | boolean
    customerMessageKey?: StringNullableFilter<"SessionIssue"> | string | null
    adminMessage?: StringFilter<"SessionIssue"> | string
    recommendedAction?: StringNullableFilter<"SessionIssue"> | string | null
    firstSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    lastSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    count?: IntFilter<"SessionIssue"> | number
    metadata?: JsonNullableFilter<"SessionIssue">
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }

  export type SessionIssueOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issueType?: SortOrder
    dedupeKey?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    userVisible?: SortOrder
    customerMessageKey?: SortOrderInput | SortOrder
    adminMessage?: SortOrder
    recommendedAction?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    count?: SortOrder
    metadata?: SortOrderInput | SortOrder
    session?: RoomPreviewSessionOrderByWithRelationInput
  }

  export type SessionIssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dedupeKey?: string
    AND?: SessionIssueWhereInput | SessionIssueWhereInput[]
    OR?: SessionIssueWhereInput[]
    NOT?: SessionIssueWhereInput | SessionIssueWhereInput[]
    sessionId?: StringFilter<"SessionIssue"> | string
    issueType?: StringFilter<"SessionIssue"> | string
    severity?: StringFilter<"SessionIssue"> | string
    status?: StringFilter<"SessionIssue"> | string
    userVisible?: BoolFilter<"SessionIssue"> | boolean
    customerMessageKey?: StringNullableFilter<"SessionIssue"> | string | null
    adminMessage?: StringFilter<"SessionIssue"> | string
    recommendedAction?: StringNullableFilter<"SessionIssue"> | string | null
    firstSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    lastSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    count?: IntFilter<"SessionIssue"> | number
    metadata?: JsonNullableFilter<"SessionIssue">
    session?: XOR<RoomPreviewSessionScalarRelationFilter, RoomPreviewSessionWhereInput>
  }, "id" | "dedupeKey">

  export type SessionIssueOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issueType?: SortOrder
    dedupeKey?: SortOrderInput | SortOrder
    severity?: SortOrder
    status?: SortOrder
    userVisible?: SortOrder
    customerMessageKey?: SortOrderInput | SortOrder
    adminMessage?: SortOrder
    recommendedAction?: SortOrderInput | SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    count?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: SessionIssueCountOrderByAggregateInput
    _avg?: SessionIssueAvgOrderByAggregateInput
    _max?: SessionIssueMaxOrderByAggregateInput
    _min?: SessionIssueMinOrderByAggregateInput
    _sum?: SessionIssueSumOrderByAggregateInput
  }

  export type SessionIssueScalarWhereWithAggregatesInput = {
    AND?: SessionIssueScalarWhereWithAggregatesInput | SessionIssueScalarWhereWithAggregatesInput[]
    OR?: SessionIssueScalarWhereWithAggregatesInput[]
    NOT?: SessionIssueScalarWhereWithAggregatesInput | SessionIssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionIssue"> | string
    sessionId?: StringWithAggregatesFilter<"SessionIssue"> | string
    issueType?: StringWithAggregatesFilter<"SessionIssue"> | string
    dedupeKey?: StringNullableWithAggregatesFilter<"SessionIssue"> | string | null
    severity?: StringWithAggregatesFilter<"SessionIssue"> | string
    status?: StringWithAggregatesFilter<"SessionIssue"> | string
    userVisible?: BoolWithAggregatesFilter<"SessionIssue"> | boolean
    customerMessageKey?: StringNullableWithAggregatesFilter<"SessionIssue"> | string | null
    adminMessage?: StringWithAggregatesFilter<"SessionIssue"> | string
    recommendedAction?: StringNullableWithAggregatesFilter<"SessionIssue"> | string | null
    firstSeenAt?: DateTimeWithAggregatesFilter<"SessionIssue"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"SessionIssue"> | Date | string
    count?: IntWithAggregatesFilter<"SessionIssue"> | number
    metadata?: JsonNullableWithAggregatesFilter<"SessionIssue">
  }

  export type UserSessionWhereInput = {
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    id?: StringFilter<"UserSession"> | string
    name?: StringFilter<"UserSession"> | string
    role?: StringFilter<"UserSession"> | string
    phone?: StringNullableFilter<"UserSession"> | string | null
    countryCode?: StringNullableFilter<"UserSession"> | string | null
    dialCode?: StringNullableFilter<"UserSession"> | string | null
    employeeCode?: StringNullableFilter<"UserSession"> | string | null
    ip?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    roomSession?: XOR<RoomPreviewSessionNullableScalarRelationFilter, RoomPreviewSessionWhereInput> | null
    events?: EventListRelationFilter
  }

  export type UserSessionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    dialCode?: SortOrderInput | SortOrder
    employeeCode?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    roomSession?: RoomPreviewSessionOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
  }

  export type UserSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserSessionWhereInput | UserSessionWhereInput[]
    OR?: UserSessionWhereInput[]
    NOT?: UserSessionWhereInput | UserSessionWhereInput[]
    name?: StringFilter<"UserSession"> | string
    role?: StringFilter<"UserSession"> | string
    phone?: StringNullableFilter<"UserSession"> | string | null
    countryCode?: StringNullableFilter<"UserSession"> | string | null
    dialCode?: StringNullableFilter<"UserSession"> | string | null
    employeeCode?: StringNullableFilter<"UserSession"> | string | null
    ip?: StringNullableFilter<"UserSession"> | string | null
    createdAt?: DateTimeFilter<"UserSession"> | Date | string
    roomSession?: XOR<RoomPreviewSessionNullableScalarRelationFilter, RoomPreviewSessionWhereInput> | null
    events?: EventListRelationFilter
  }, "id">

  export type UserSessionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    countryCode?: SortOrderInput | SortOrder
    dialCode?: SortOrderInput | SortOrder
    employeeCode?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserSessionCountOrderByAggregateInput
    _max?: UserSessionMaxOrderByAggregateInput
    _min?: UserSessionMinOrderByAggregateInput
  }

  export type UserSessionScalarWhereWithAggregatesInput = {
    AND?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    OR?: UserSessionScalarWhereWithAggregatesInput[]
    NOT?: UserSessionScalarWhereWithAggregatesInput | UserSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSession"> | string
    name?: StringWithAggregatesFilter<"UserSession"> | string
    role?: StringWithAggregatesFilter<"UserSession"> | string
    phone?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    countryCode?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    dialCode?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    employeeCode?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    ip?: StringNullableWithAggregatesFilter<"UserSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserSession"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phoneE164?: StringFilter<"Customer"> | string
    countryCode?: StringFilter<"Customer"> | string
    dialCode?: StringFilter<"Customer"> | string
    lastSeenAt?: DateTimeFilter<"Customer"> | Date | string
    expiresAt?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    sessions?: RoomPreviewSessionListRelationFilter
    experiences?: CustomerExperienceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneE164?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    lastSeenAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: RoomPreviewSessionOrderByRelationAggregateInput
    experiences?: CustomerExperienceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phoneE164?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    countryCode?: StringFilter<"Customer"> | string
    dialCode?: StringFilter<"Customer"> | string
    lastSeenAt?: DateTimeFilter<"Customer"> | Date | string
    expiresAt?: DateTimeFilter<"Customer"> | Date | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    sessions?: RoomPreviewSessionListRelationFilter
    experiences?: CustomerExperienceListRelationFilter
  }, "id" | "phoneE164">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phoneE164?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    lastSeenAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phoneE164?: StringWithAggregatesFilter<"Customer"> | string
    countryCode?: StringWithAggregatesFilter<"Customer"> | string
    dialCode?: StringWithAggregatesFilter<"Customer"> | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CustomerExperienceWhereInput = {
    AND?: CustomerExperienceWhereInput | CustomerExperienceWhereInput[]
    OR?: CustomerExperienceWhereInput[]
    NOT?: CustomerExperienceWhereInput | CustomerExperienceWhereInput[]
    id?: StringFilter<"CustomerExperience"> | string
    customerId?: StringFilter<"CustomerExperience"> | string
    sessionId?: StringFilter<"CustomerExperience"> | string
    roomImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    roomImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    productId?: StringNullableFilter<"CustomerExperience"> | string | null
    productName?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    createdAt?: DateTimeFilter<"CustomerExperience"> | Date | string
    expiresAt?: DateTimeFilter<"CustomerExperience"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerExperienceOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    sessionId?: SortOrder
    roomImageUrl?: SortOrderInput | SortOrder
    roomImageKey?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    resultImageUrl?: SortOrderInput | SortOrder
    resultImageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerExperienceWhereInput | CustomerExperienceWhereInput[]
    OR?: CustomerExperienceWhereInput[]
    NOT?: CustomerExperienceWhereInput | CustomerExperienceWhereInput[]
    customerId?: StringFilter<"CustomerExperience"> | string
    sessionId?: StringFilter<"CustomerExperience"> | string
    roomImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    roomImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    productId?: StringNullableFilter<"CustomerExperience"> | string | null
    productName?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    createdAt?: DateTimeFilter<"CustomerExperience"> | Date | string
    expiresAt?: DateTimeFilter<"CustomerExperience"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    sessionId?: SortOrder
    roomImageUrl?: SortOrderInput | SortOrder
    roomImageKey?: SortOrderInput | SortOrder
    productId?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    resultImageUrl?: SortOrderInput | SortOrder
    resultImageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: CustomerExperienceCountOrderByAggregateInput
    _max?: CustomerExperienceMaxOrderByAggregateInput
    _min?: CustomerExperienceMinOrderByAggregateInput
  }

  export type CustomerExperienceScalarWhereWithAggregatesInput = {
    AND?: CustomerExperienceScalarWhereWithAggregatesInput | CustomerExperienceScalarWhereWithAggregatesInput[]
    OR?: CustomerExperienceScalarWhereWithAggregatesInput[]
    NOT?: CustomerExperienceScalarWhereWithAggregatesInput | CustomerExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerExperience"> | string
    customerId?: StringWithAggregatesFilter<"CustomerExperience"> | string
    sessionId?: StringWithAggregatesFilter<"CustomerExperience"> | string
    roomImageUrl?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    roomImageKey?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    productId?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    productName?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    resultImageUrl?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    resultImageKey?: StringNullableWithAggregatesFilter<"CustomerExperience"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerExperience"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"CustomerExperience"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    userSessionId?: StringFilter<"Event"> | string
    sessionId?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    renderJobId?: StringNullableFilter<"Event"> | string | null
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    userSession?: XOR<UserSessionScalarRelationFilter, UserSessionWhereInput>
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    userSessionId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    renderJobId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userSession?: UserSessionOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    userSessionId?: StringFilter<"Event"> | string
    sessionId?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    renderJobId?: StringNullableFilter<"Event"> | string | null
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
    userSession?: XOR<UserSessionScalarRelationFilter, UserSessionWhereInput>
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    userSessionId?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    renderJobId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    userSessionId?: StringWithAggregatesFilter<"Event"> | string
    sessionId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventType?: StringWithAggregatesFilter<"Event"> | string
    renderJobId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Event">
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type ScreenCreateInput = {
    id?: string
    name: string
    location?: string | null
    secretHash: string
    dailyBudget?: number
    isActive?: boolean
    lastRenderAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionCreateNestedManyWithoutScreenInput
  }

  export type ScreenUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    secretHash: string
    dailyBudget?: number
    isActive?: boolean
    lastRenderAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionUncheckedCreateNestedManyWithoutScreenInput
  }

  export type ScreenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUpdateManyWithoutScreenNestedInput
  }

  export type ScreenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUncheckedUpdateManyWithoutScreenNestedInput
  }

  export type ScreenCreateManyInput = {
    id?: string
    name: string
    location?: string | null
    secretHash: string
    dailyBudget?: number
    isActive?: boolean
    lastRenderAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScreenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPreviewSessionCreateInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionCreateManyInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
  }

  export type RoomPreviewSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoomPreviewSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenderJobCreateInput = {
    id?: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    session: RoomPreviewSessionCreateNestedOneWithoutRenderJobsInput
  }

  export type RenderJobUncheckedCreateInput = {
    id?: string
    sessionId: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: RoomPreviewSessionUpdateOneRequiredWithoutRenderJobsNestedInput
  }

  export type RenderJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobCreateManyInput = {
    id?: string
    sessionId: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventCreateInput = {
    id?: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: RoomPreviewSessionCreateNestedOneWithoutSessionEventsInput
  }

  export type SessionEventUncheckedCreateInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: RoomPreviewSessionUpdateOneRequiredWithoutSessionEventsNestedInput
  }

  export type SessionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventCreateManyInput = {
    id?: string
    sessionId: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueCreateInput = {
    id?: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: RoomPreviewSessionCreateNestedOneWithoutSessionIssuesInput
  }

  export type SessionIssueUncheckedCreateInput = {
    id?: string
    sessionId: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: RoomPreviewSessionUpdateOneRequiredWithoutSessionIssuesNestedInput
  }

  export type SessionIssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueCreateManyInput = {
    id?: string
    sessionId: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserSessionCreateInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    roomSession?: RoomPreviewSessionCreateNestedOneWithoutUserSessionInput
    events?: EventCreateNestedManyWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    roomSession?: RoomPreviewSessionUncheckedCreateNestedOneWithoutUserSessionInput
    events?: EventUncheckedCreateNestedManyWithoutUserSessionInput
  }

  export type UserSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomSession?: RoomPreviewSessionUpdateOneWithoutUserSessionNestedInput
    events?: EventUpdateManyWithoutUserSessionNestedInput
  }

  export type UserSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomSession?: RoomPreviewSessionUncheckedUpdateOneWithoutUserSessionNestedInput
    events?: EventUncheckedUpdateManyWithoutUserSessionNestedInput
  }

  export type UserSessionCreateManyInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
  }

  export type UserSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionCreateNestedManyWithoutCustomerInput
    experiences?: CustomerExperienceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionUncheckedCreateNestedManyWithoutCustomerInput
    experiences?: CustomerExperienceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUpdateManyWithoutCustomerNestedInput
    experiences?: CustomerExperienceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUncheckedUpdateManyWithoutCustomerNestedInput
    experiences?: CustomerExperienceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerExperienceCreateInput = {
    id?: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
    customer: CustomerCreateNestedOneWithoutExperiencesInput
  }

  export type CustomerExperienceUncheckedCreateInput = {
    id?: string
    customerId: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type CustomerExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutExperiencesNestedInput
  }

  export type CustomerExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerExperienceCreateManyInput = {
    id?: string
    customerId: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type CustomerExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    userSession: UserSessionCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    userSessionId: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userSession?: UserSessionUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSessionId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    userSessionId: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userSessionId?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoomPreviewSessionListRelationFilter = {
    every?: RoomPreviewSessionWhereInput
    some?: RoomPreviewSessionWhereInput
    none?: RoomPreviewSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomPreviewSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScreenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    secretHash?: SortOrder
    dailyBudget?: SortOrder
    isActive?: SortOrder
    lastRenderAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScreenAvgOrderByAggregateInput = {
    dailyBudget?: SortOrder
  }

  export type ScreenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    secretHash?: SortOrder
    dailyBudget?: SortOrder
    isActive?: SortOrder
    lastRenderAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScreenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    secretHash?: SortOrder
    dailyBudget?: SortOrder
    isActive?: SortOrder
    lastRenderAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScreenSumOrderByAggregateInput = {
    dailyBudget?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScreenNullableScalarRelationFilter = {
    is?: ScreenWhereInput | null
    isNot?: ScreenWhereInput | null
  }

  export type UserSessionNullableScalarRelationFilter = {
    is?: UserSessionWhereInput | null
    isNot?: UserSessionWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type RenderJobListRelationFilter = {
    every?: RenderJobWhereInput
    some?: RenderJobWhereInput
    none?: RenderJobWhereInput
  }

  export type SessionEventListRelationFilter = {
    every?: SessionEventWhereInput
    some?: SessionEventWhereInput
    none?: SessionEventWhereInput
  }

  export type SessionIssueListRelationFilter = {
    every?: SessionIssueWhereInput
    some?: SessionIssueWhereInput
    none?: SessionIssueWhereInput
  }

  export type RenderJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionIssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomPreviewSessionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    mobileConnected?: SortOrder
    renderCount?: SortOrder
    selectedRoom?: SortOrder
    selectedProduct?: SortOrder
    renderResult?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenId?: SortOrder
    lastRenderHash?: SortOrder
    userSessionId?: SortOrder
    customerId?: SortOrder
    lastMobileSeenAt?: SortOrder
    lastScreenSeenAt?: SortOrder
  }

  export type RoomPreviewSessionAvgOrderByAggregateInput = {
    renderCount?: SortOrder
  }

  export type RoomPreviewSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    mobileConnected?: SortOrder
    renderCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenId?: SortOrder
    lastRenderHash?: SortOrder
    userSessionId?: SortOrder
    customerId?: SortOrder
    lastMobileSeenAt?: SortOrder
    lastScreenSeenAt?: SortOrder
  }

  export type RoomPreviewSessionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    mobileConnected?: SortOrder
    renderCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    screenId?: SortOrder
    lastRenderHash?: SortOrder
    userSessionId?: SortOrder
    customerId?: SortOrder
    lastMobileSeenAt?: SortOrder
    lastScreenSeenAt?: SortOrder
  }

  export type RoomPreviewSessionSumOrderByAggregateInput = {
    renderCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoomPreviewSessionScalarRelationFilter = {
    is?: RoomPreviewSessionWhereInput
    isNot?: RoomPreviewSessionWhereInput
  }

  export type RenderJobCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    input?: SortOrder
    result?: SortOrder
    failureReason?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderJobMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RenderJobMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SessionEventCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    code?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
  }

  export type SessionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    code?: SortOrder
    message?: SortOrder
  }

  export type SessionEventMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    timestamp?: SortOrder
    source?: SortOrder
    eventType?: SortOrder
    level?: SortOrder
    statusBefore?: SortOrder
    statusAfter?: SortOrder
    code?: SortOrder
    message?: SortOrder
  }

  export type SessionIssueCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issueType?: SortOrder
    dedupeKey?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    userVisible?: SortOrder
    customerMessageKey?: SortOrder
    adminMessage?: SortOrder
    recommendedAction?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    count?: SortOrder
    metadata?: SortOrder
  }

  export type SessionIssueAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type SessionIssueMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issueType?: SortOrder
    dedupeKey?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    userVisible?: SortOrder
    customerMessageKey?: SortOrder
    adminMessage?: SortOrder
    recommendedAction?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    count?: SortOrder
  }

  export type SessionIssueMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    issueType?: SortOrder
    dedupeKey?: SortOrder
    severity?: SortOrder
    status?: SortOrder
    userVisible?: SortOrder
    customerMessageKey?: SortOrder
    adminMessage?: SortOrder
    recommendedAction?: SortOrder
    firstSeenAt?: SortOrder
    lastSeenAt?: SortOrder
    count?: SortOrder
  }

  export type SessionIssueSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type RoomPreviewSessionNullableScalarRelationFilter = {
    is?: RoomPreviewSessionWhereInput | null
    isNot?: RoomPreviewSessionWhereInput | null
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserSessionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    employeeCode?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    employeeCode?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSessionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    employeeCode?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerExperienceListRelationFilter = {
    every?: CustomerExperienceWhereInput
    some?: CustomerExperienceWhereInput
    none?: CustomerExperienceWhereInput
  }

  export type CustomerExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneE164?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    lastSeenAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneE164?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    lastSeenAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phoneE164?: SortOrder
    countryCode?: SortOrder
    dialCode?: SortOrder
    lastSeenAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    sessionId?: SortOrder
    roomImageUrl?: SortOrder
    roomImageKey?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    resultImageUrl?: SortOrder
    resultImageKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type CustomerExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    sessionId?: SortOrder
    roomImageUrl?: SortOrder
    roomImageKey?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    resultImageUrl?: SortOrder
    resultImageKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type CustomerExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    sessionId?: SortOrder
    roomImageUrl?: SortOrder
    roomImageKey?: SortOrder
    productId?: SortOrder
    productName?: SortOrder
    resultImageUrl?: SortOrder
    resultImageKey?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type UserSessionScalarRelationFilter = {
    is?: UserSessionWhereInput
    isNot?: UserSessionWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    userSessionId?: SortOrder
    sessionId?: SortOrder
    eventType?: SortOrder
    renderJobId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    userSessionId?: SortOrder
    sessionId?: SortOrder
    eventType?: SortOrder
    renderJobId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    userSessionId?: SortOrder
    sessionId?: SortOrder
    eventType?: SortOrder
    renderJobId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPreviewSessionCreateNestedManyWithoutScreenInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput> | RoomPreviewSessionCreateWithoutScreenInput[] | RoomPreviewSessionUncheckedCreateWithoutScreenInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutScreenInput | RoomPreviewSessionCreateOrConnectWithoutScreenInput[]
    createMany?: RoomPreviewSessionCreateManyScreenInputEnvelope
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
  }

  export type RoomPreviewSessionUncheckedCreateNestedManyWithoutScreenInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput> | RoomPreviewSessionCreateWithoutScreenInput[] | RoomPreviewSessionUncheckedCreateWithoutScreenInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutScreenInput | RoomPreviewSessionCreateOrConnectWithoutScreenInput[]
    createMany?: RoomPreviewSessionCreateManyScreenInputEnvelope
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoomPreviewSessionUpdateManyWithoutScreenNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput> | RoomPreviewSessionCreateWithoutScreenInput[] | RoomPreviewSessionUncheckedCreateWithoutScreenInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutScreenInput | RoomPreviewSessionCreateOrConnectWithoutScreenInput[]
    upsert?: RoomPreviewSessionUpsertWithWhereUniqueWithoutScreenInput | RoomPreviewSessionUpsertWithWhereUniqueWithoutScreenInput[]
    createMany?: RoomPreviewSessionCreateManyScreenInputEnvelope
    set?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    disconnect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    delete?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    update?: RoomPreviewSessionUpdateWithWhereUniqueWithoutScreenInput | RoomPreviewSessionUpdateWithWhereUniqueWithoutScreenInput[]
    updateMany?: RoomPreviewSessionUpdateManyWithWhereWithoutScreenInput | RoomPreviewSessionUpdateManyWithWhereWithoutScreenInput[]
    deleteMany?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
  }

  export type RoomPreviewSessionUncheckedUpdateManyWithoutScreenNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput> | RoomPreviewSessionCreateWithoutScreenInput[] | RoomPreviewSessionUncheckedCreateWithoutScreenInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutScreenInput | RoomPreviewSessionCreateOrConnectWithoutScreenInput[]
    upsert?: RoomPreviewSessionUpsertWithWhereUniqueWithoutScreenInput | RoomPreviewSessionUpsertWithWhereUniqueWithoutScreenInput[]
    createMany?: RoomPreviewSessionCreateManyScreenInputEnvelope
    set?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    disconnect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    delete?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    update?: RoomPreviewSessionUpdateWithWhereUniqueWithoutScreenInput | RoomPreviewSessionUpdateWithWhereUniqueWithoutScreenInput[]
    updateMany?: RoomPreviewSessionUpdateManyWithWhereWithoutScreenInput | RoomPreviewSessionUpdateManyWithWhereWithoutScreenInput[]
    deleteMany?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
  }

  export type ScreenCreateNestedOneWithoutSessionsInput = {
    create?: XOR<ScreenCreateWithoutSessionsInput, ScreenUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ScreenCreateOrConnectWithoutSessionsInput
    connect?: ScreenWhereUniqueInput
  }

  export type UserSessionCreateNestedOneWithoutRoomSessionInput = {
    create?: XOR<UserSessionCreateWithoutRoomSessionInput, UserSessionUncheckedCreateWithoutRoomSessionInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutRoomSessionInput
    connect?: UserSessionWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CustomerCreateWithoutSessionsInput, CustomerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSessionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type RenderJobCreateNestedManyWithoutSessionInput = {
    create?: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput> | RenderJobCreateWithoutSessionInput[] | RenderJobUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutSessionInput | RenderJobCreateOrConnectWithoutSessionInput[]
    createMany?: RenderJobCreateManySessionInputEnvelope
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
  }

  export type SessionEventCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
  }

  export type SessionIssueCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput> | SessionIssueCreateWithoutSessionInput[] | SessionIssueUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionIssueCreateOrConnectWithoutSessionInput | SessionIssueCreateOrConnectWithoutSessionInput[]
    createMany?: SessionIssueCreateManySessionInputEnvelope
    connect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
  }

  export type RenderJobUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput> | RenderJobCreateWithoutSessionInput[] | RenderJobUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutSessionInput | RenderJobCreateOrConnectWithoutSessionInput[]
    createMany?: RenderJobCreateManySessionInputEnvelope
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
  }

  export type SessionEventUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
  }

  export type SessionIssueUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput> | SessionIssueCreateWithoutSessionInput[] | SessionIssueUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionIssueCreateOrConnectWithoutSessionInput | SessionIssueCreateOrConnectWithoutSessionInput[]
    createMany?: SessionIssueCreateManySessionInputEnvelope
    connect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
  }

  export type ScreenUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<ScreenCreateWithoutSessionsInput, ScreenUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: ScreenCreateOrConnectWithoutSessionsInput
    upsert?: ScreenUpsertWithoutSessionsInput
    disconnect?: ScreenWhereInput | boolean
    delete?: ScreenWhereInput | boolean
    connect?: ScreenWhereUniqueInput
    update?: XOR<XOR<ScreenUpdateToOneWithWhereWithoutSessionsInput, ScreenUpdateWithoutSessionsInput>, ScreenUncheckedUpdateWithoutSessionsInput>
  }

  export type UserSessionUpdateOneWithoutRoomSessionNestedInput = {
    create?: XOR<UserSessionCreateWithoutRoomSessionInput, UserSessionUncheckedCreateWithoutRoomSessionInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutRoomSessionInput
    upsert?: UserSessionUpsertWithoutRoomSessionInput
    disconnect?: UserSessionWhereInput | boolean
    delete?: UserSessionWhereInput | boolean
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutRoomSessionInput, UserSessionUpdateWithoutRoomSessionInput>, UserSessionUncheckedUpdateWithoutRoomSessionInput>
  }

  export type CustomerUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<CustomerCreateWithoutSessionsInput, CustomerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSessionsInput
    upsert?: CustomerUpsertWithoutSessionsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSessionsInput, CustomerUpdateWithoutSessionsInput>, CustomerUncheckedUpdateWithoutSessionsInput>
  }

  export type RenderJobUpdateManyWithoutSessionNestedInput = {
    create?: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput> | RenderJobCreateWithoutSessionInput[] | RenderJobUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutSessionInput | RenderJobCreateOrConnectWithoutSessionInput[]
    upsert?: RenderJobUpsertWithWhereUniqueWithoutSessionInput | RenderJobUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: RenderJobCreateManySessionInputEnvelope
    set?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    disconnect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    delete?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    update?: RenderJobUpdateWithWhereUniqueWithoutSessionInput | RenderJobUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: RenderJobUpdateManyWithWhereWithoutSessionInput | RenderJobUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
  }

  export type SessionEventUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    upsert?: SessionEventUpsertWithWhereUniqueWithoutSessionInput | SessionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    set?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    disconnect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    delete?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    update?: SessionEventUpdateWithWhereUniqueWithoutSessionInput | SessionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionEventUpdateManyWithWhereWithoutSessionInput | SessionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
  }

  export type SessionIssueUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput> | SessionIssueCreateWithoutSessionInput[] | SessionIssueUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionIssueCreateOrConnectWithoutSessionInput | SessionIssueCreateOrConnectWithoutSessionInput[]
    upsert?: SessionIssueUpsertWithWhereUniqueWithoutSessionInput | SessionIssueUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionIssueCreateManySessionInputEnvelope
    set?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    disconnect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    delete?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    connect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    update?: SessionIssueUpdateWithWhereUniqueWithoutSessionInput | SessionIssueUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionIssueUpdateManyWithWhereWithoutSessionInput | SessionIssueUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionIssueScalarWhereInput | SessionIssueScalarWhereInput[]
  }

  export type RenderJobUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput> | RenderJobCreateWithoutSessionInput[] | RenderJobUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RenderJobCreateOrConnectWithoutSessionInput | RenderJobCreateOrConnectWithoutSessionInput[]
    upsert?: RenderJobUpsertWithWhereUniqueWithoutSessionInput | RenderJobUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: RenderJobCreateManySessionInputEnvelope
    set?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    disconnect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    delete?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    connect?: RenderJobWhereUniqueInput | RenderJobWhereUniqueInput[]
    update?: RenderJobUpdateWithWhereUniqueWithoutSessionInput | RenderJobUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: RenderJobUpdateManyWithWhereWithoutSessionInput | RenderJobUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
  }

  export type SessionEventUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput> | SessionEventCreateWithoutSessionInput[] | SessionEventUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionEventCreateOrConnectWithoutSessionInput | SessionEventCreateOrConnectWithoutSessionInput[]
    upsert?: SessionEventUpsertWithWhereUniqueWithoutSessionInput | SessionEventUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionEventCreateManySessionInputEnvelope
    set?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    disconnect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    delete?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    connect?: SessionEventWhereUniqueInput | SessionEventWhereUniqueInput[]
    update?: SessionEventUpdateWithWhereUniqueWithoutSessionInput | SessionEventUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionEventUpdateManyWithWhereWithoutSessionInput | SessionEventUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
  }

  export type SessionIssueUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput> | SessionIssueCreateWithoutSessionInput[] | SessionIssueUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionIssueCreateOrConnectWithoutSessionInput | SessionIssueCreateOrConnectWithoutSessionInput[]
    upsert?: SessionIssueUpsertWithWhereUniqueWithoutSessionInput | SessionIssueUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionIssueCreateManySessionInputEnvelope
    set?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    disconnect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    delete?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    connect?: SessionIssueWhereUniqueInput | SessionIssueWhereUniqueInput[]
    update?: SessionIssueUpdateWithWhereUniqueWithoutSessionInput | SessionIssueUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionIssueUpdateManyWithWhereWithoutSessionInput | SessionIssueUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionIssueScalarWhereInput | SessionIssueScalarWhereInput[]
  }

  export type RoomPreviewSessionCreateNestedOneWithoutRenderJobsInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutRenderJobsInput, RoomPreviewSessionUncheckedCreateWithoutRenderJobsInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutRenderJobsInput
    connect?: RoomPreviewSessionWhereUniqueInput
  }

  export type RoomPreviewSessionUpdateOneRequiredWithoutRenderJobsNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutRenderJobsInput, RoomPreviewSessionUncheckedCreateWithoutRenderJobsInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutRenderJobsInput
    upsert?: RoomPreviewSessionUpsertWithoutRenderJobsInput
    connect?: RoomPreviewSessionWhereUniqueInput
    update?: XOR<XOR<RoomPreviewSessionUpdateToOneWithWhereWithoutRenderJobsInput, RoomPreviewSessionUpdateWithoutRenderJobsInput>, RoomPreviewSessionUncheckedUpdateWithoutRenderJobsInput>
  }

  export type RoomPreviewSessionCreateNestedOneWithoutSessionEventsInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutSessionEventsInput, RoomPreviewSessionUncheckedCreateWithoutSessionEventsInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutSessionEventsInput
    connect?: RoomPreviewSessionWhereUniqueInput
  }

  export type RoomPreviewSessionUpdateOneRequiredWithoutSessionEventsNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutSessionEventsInput, RoomPreviewSessionUncheckedCreateWithoutSessionEventsInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutSessionEventsInput
    upsert?: RoomPreviewSessionUpsertWithoutSessionEventsInput
    connect?: RoomPreviewSessionWhereUniqueInput
    update?: XOR<XOR<RoomPreviewSessionUpdateToOneWithWhereWithoutSessionEventsInput, RoomPreviewSessionUpdateWithoutSessionEventsInput>, RoomPreviewSessionUncheckedUpdateWithoutSessionEventsInput>
  }

  export type RoomPreviewSessionCreateNestedOneWithoutSessionIssuesInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedCreateWithoutSessionIssuesInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutSessionIssuesInput
    connect?: RoomPreviewSessionWhereUniqueInput
  }

  export type RoomPreviewSessionUpdateOneRequiredWithoutSessionIssuesNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedCreateWithoutSessionIssuesInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutSessionIssuesInput
    upsert?: RoomPreviewSessionUpsertWithoutSessionIssuesInput
    connect?: RoomPreviewSessionWhereUniqueInput
    update?: XOR<XOR<RoomPreviewSessionUpdateToOneWithWhereWithoutSessionIssuesInput, RoomPreviewSessionUpdateWithoutSessionIssuesInput>, RoomPreviewSessionUncheckedUpdateWithoutSessionIssuesInput>
  }

  export type RoomPreviewSessionCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutUserSessionInput
    connect?: RoomPreviewSessionWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutUserSessionInput = {
    create?: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput> | EventCreateWithoutUserSessionInput[] | EventUncheckedCreateWithoutUserSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserSessionInput | EventCreateOrConnectWithoutUserSessionInput[]
    createMany?: EventCreateManyUserSessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RoomPreviewSessionUncheckedCreateNestedOneWithoutUserSessionInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutUserSessionInput
    connect?: RoomPreviewSessionWhereUniqueInput
  }

  export type EventUncheckedCreateNestedManyWithoutUserSessionInput = {
    create?: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput> | EventCreateWithoutUserSessionInput[] | EventUncheckedCreateWithoutUserSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserSessionInput | EventCreateOrConnectWithoutUserSessionInput[]
    createMany?: EventCreateManyUserSessionInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type RoomPreviewSessionUpdateOneWithoutUserSessionNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutUserSessionInput
    upsert?: RoomPreviewSessionUpsertWithoutUserSessionInput
    disconnect?: RoomPreviewSessionWhereInput | boolean
    delete?: RoomPreviewSessionWhereInput | boolean
    connect?: RoomPreviewSessionWhereUniqueInput
    update?: XOR<XOR<RoomPreviewSessionUpdateToOneWithWhereWithoutUserSessionInput, RoomPreviewSessionUpdateWithoutUserSessionInput>, RoomPreviewSessionUncheckedUpdateWithoutUserSessionInput>
  }

  export type EventUpdateManyWithoutUserSessionNestedInput = {
    create?: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput> | EventCreateWithoutUserSessionInput[] | EventUncheckedCreateWithoutUserSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserSessionInput | EventCreateOrConnectWithoutUserSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserSessionInput | EventUpsertWithWhereUniqueWithoutUserSessionInput[]
    createMany?: EventCreateManyUserSessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserSessionInput | EventUpdateWithWhereUniqueWithoutUserSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserSessionInput | EventUpdateManyWithWhereWithoutUserSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RoomPreviewSessionUncheckedUpdateOneWithoutUserSessionNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutUserSessionInput
    upsert?: RoomPreviewSessionUpsertWithoutUserSessionInput
    disconnect?: RoomPreviewSessionWhereInput | boolean
    delete?: RoomPreviewSessionWhereInput | boolean
    connect?: RoomPreviewSessionWhereUniqueInput
    update?: XOR<XOR<RoomPreviewSessionUpdateToOneWithWhereWithoutUserSessionInput, RoomPreviewSessionUpdateWithoutUserSessionInput>, RoomPreviewSessionUncheckedUpdateWithoutUserSessionInput>
  }

  export type EventUncheckedUpdateManyWithoutUserSessionNestedInput = {
    create?: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput> | EventCreateWithoutUserSessionInput[] | EventUncheckedCreateWithoutUserSessionInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserSessionInput | EventCreateOrConnectWithoutUserSessionInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserSessionInput | EventUpsertWithWhereUniqueWithoutUserSessionInput[]
    createMany?: EventCreateManyUserSessionInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserSessionInput | EventUpdateWithWhereUniqueWithoutUserSessionInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserSessionInput | EventUpdateManyWithWhereWithoutUserSessionInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type RoomPreviewSessionCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput> | RoomPreviewSessionCreateWithoutCustomerInput[] | RoomPreviewSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutCustomerInput | RoomPreviewSessionCreateOrConnectWithoutCustomerInput[]
    createMany?: RoomPreviewSessionCreateManyCustomerInputEnvelope
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
  }

  export type CustomerExperienceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput> | CustomerExperienceCreateWithoutCustomerInput[] | CustomerExperienceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerExperienceCreateOrConnectWithoutCustomerInput | CustomerExperienceCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerExperienceCreateManyCustomerInputEnvelope
    connect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
  }

  export type RoomPreviewSessionUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput> | RoomPreviewSessionCreateWithoutCustomerInput[] | RoomPreviewSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutCustomerInput | RoomPreviewSessionCreateOrConnectWithoutCustomerInput[]
    createMany?: RoomPreviewSessionCreateManyCustomerInputEnvelope
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
  }

  export type CustomerExperienceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput> | CustomerExperienceCreateWithoutCustomerInput[] | CustomerExperienceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerExperienceCreateOrConnectWithoutCustomerInput | CustomerExperienceCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerExperienceCreateManyCustomerInputEnvelope
    connect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
  }

  export type RoomPreviewSessionUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput> | RoomPreviewSessionCreateWithoutCustomerInput[] | RoomPreviewSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutCustomerInput | RoomPreviewSessionCreateOrConnectWithoutCustomerInput[]
    upsert?: RoomPreviewSessionUpsertWithWhereUniqueWithoutCustomerInput | RoomPreviewSessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RoomPreviewSessionCreateManyCustomerInputEnvelope
    set?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    disconnect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    delete?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    update?: RoomPreviewSessionUpdateWithWhereUniqueWithoutCustomerInput | RoomPreviewSessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RoomPreviewSessionUpdateManyWithWhereWithoutCustomerInput | RoomPreviewSessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
  }

  export type CustomerExperienceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput> | CustomerExperienceCreateWithoutCustomerInput[] | CustomerExperienceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerExperienceCreateOrConnectWithoutCustomerInput | CustomerExperienceCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerExperienceUpsertWithWhereUniqueWithoutCustomerInput | CustomerExperienceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerExperienceCreateManyCustomerInputEnvelope
    set?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    disconnect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    delete?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    connect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    update?: CustomerExperienceUpdateWithWhereUniqueWithoutCustomerInput | CustomerExperienceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerExperienceUpdateManyWithWhereWithoutCustomerInput | CustomerExperienceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerExperienceScalarWhereInput | CustomerExperienceScalarWhereInput[]
  }

  export type RoomPreviewSessionUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput> | RoomPreviewSessionCreateWithoutCustomerInput[] | RoomPreviewSessionUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RoomPreviewSessionCreateOrConnectWithoutCustomerInput | RoomPreviewSessionCreateOrConnectWithoutCustomerInput[]
    upsert?: RoomPreviewSessionUpsertWithWhereUniqueWithoutCustomerInput | RoomPreviewSessionUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RoomPreviewSessionCreateManyCustomerInputEnvelope
    set?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    disconnect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    delete?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    connect?: RoomPreviewSessionWhereUniqueInput | RoomPreviewSessionWhereUniqueInput[]
    update?: RoomPreviewSessionUpdateWithWhereUniqueWithoutCustomerInput | RoomPreviewSessionUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RoomPreviewSessionUpdateManyWithWhereWithoutCustomerInput | RoomPreviewSessionUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
  }

  export type CustomerExperienceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput> | CustomerExperienceCreateWithoutCustomerInput[] | CustomerExperienceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerExperienceCreateOrConnectWithoutCustomerInput | CustomerExperienceCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerExperienceUpsertWithWhereUniqueWithoutCustomerInput | CustomerExperienceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerExperienceCreateManyCustomerInputEnvelope
    set?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    disconnect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    delete?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    connect?: CustomerExperienceWhereUniqueInput | CustomerExperienceWhereUniqueInput[]
    update?: CustomerExperienceUpdateWithWhereUniqueWithoutCustomerInput | CustomerExperienceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerExperienceUpdateManyWithWhereWithoutCustomerInput | CustomerExperienceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerExperienceScalarWhereInput | CustomerExperienceScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<CustomerCreateWithoutExperiencesInput, CustomerUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutExperiencesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutExperiencesNestedInput = {
    create?: XOR<CustomerCreateWithoutExperiencesInput, CustomerUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutExperiencesInput
    upsert?: CustomerUpsertWithoutExperiencesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutExperiencesInput, CustomerUpdateWithoutExperiencesInput>, CustomerUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserSessionCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserSessionCreateWithoutEventsInput, UserSessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutEventsInput
    connect?: UserSessionWhereUniqueInput
  }

  export type UserSessionUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserSessionCreateWithoutEventsInput, UserSessionUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserSessionCreateOrConnectWithoutEventsInput
    upsert?: UserSessionUpsertWithoutEventsInput
    connect?: UserSessionWhereUniqueInput
    update?: XOR<XOR<UserSessionUpdateToOneWithWhereWithoutEventsInput, UserSessionUpdateWithoutEventsInput>, UserSessionUncheckedUpdateWithoutEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type RoomPreviewSessionCreateWithoutScreenInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutScreenInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutScreenInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput>
  }

  export type RoomPreviewSessionCreateManyScreenInputEnvelope = {
    data: RoomPreviewSessionCreateManyScreenInput | RoomPreviewSessionCreateManyScreenInput[]
    skipDuplicates?: boolean
  }

  export type RoomPreviewSessionUpsertWithWhereUniqueWithoutScreenInput = {
    where: RoomPreviewSessionWhereUniqueInput
    update: XOR<RoomPreviewSessionUpdateWithoutScreenInput, RoomPreviewSessionUncheckedUpdateWithoutScreenInput>
    create: XOR<RoomPreviewSessionCreateWithoutScreenInput, RoomPreviewSessionUncheckedCreateWithoutScreenInput>
  }

  export type RoomPreviewSessionUpdateWithWhereUniqueWithoutScreenInput = {
    where: RoomPreviewSessionWhereUniqueInput
    data: XOR<RoomPreviewSessionUpdateWithoutScreenInput, RoomPreviewSessionUncheckedUpdateWithoutScreenInput>
  }

  export type RoomPreviewSessionUpdateManyWithWhereWithoutScreenInput = {
    where: RoomPreviewSessionScalarWhereInput
    data: XOR<RoomPreviewSessionUpdateManyMutationInput, RoomPreviewSessionUncheckedUpdateManyWithoutScreenInput>
  }

  export type RoomPreviewSessionScalarWhereInput = {
    AND?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
    OR?: RoomPreviewSessionScalarWhereInput[]
    NOT?: RoomPreviewSessionScalarWhereInput | RoomPreviewSessionScalarWhereInput[]
    id?: StringFilter<"RoomPreviewSession"> | string
    status?: StringFilter<"RoomPreviewSession"> | string
    mobileConnected?: BoolFilter<"RoomPreviewSession"> | boolean
    renderCount?: IntFilter<"RoomPreviewSession"> | number
    selectedRoom?: JsonNullableFilter<"RoomPreviewSession">
    selectedProduct?: JsonNullableFilter<"RoomPreviewSession">
    renderResult?: JsonNullableFilter<"RoomPreviewSession">
    expiresAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    createdAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    updatedAt?: DateTimeFilter<"RoomPreviewSession"> | Date | string
    screenId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastRenderHash?: StringNullableFilter<"RoomPreviewSession"> | string | null
    userSessionId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    customerId?: StringNullableFilter<"RoomPreviewSession"> | string | null
    lastMobileSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
    lastScreenSeenAt?: DateTimeNullableFilter<"RoomPreviewSession"> | Date | string | null
  }

  export type ScreenCreateWithoutSessionsInput = {
    id?: string
    name: string
    location?: string | null
    secretHash: string
    dailyBudget?: number
    isActive?: boolean
    lastRenderAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScreenUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    location?: string | null
    secretHash: string
    dailyBudget?: number
    isActive?: boolean
    lastRenderAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScreenCreateOrConnectWithoutSessionsInput = {
    where: ScreenWhereUniqueInput
    create: XOR<ScreenCreateWithoutSessionsInput, ScreenUncheckedCreateWithoutSessionsInput>
  }

  export type UserSessionCreateWithoutRoomSessionInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    events?: EventCreateNestedManyWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateWithoutRoomSessionInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserSessionInput
  }

  export type UserSessionCreateOrConnectWithoutRoomSessionInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutRoomSessionInput, UserSessionUncheckedCreateWithoutRoomSessionInput>
  }

  export type CustomerCreateWithoutSessionsInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: CustomerExperienceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    experiences?: CustomerExperienceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSessionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSessionsInput, CustomerUncheckedCreateWithoutSessionsInput>
  }

  export type RenderJobCreateWithoutSessionInput = {
    id?: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobUncheckedCreateWithoutSessionInput = {
    id?: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RenderJobCreateOrConnectWithoutSessionInput = {
    where: RenderJobWhereUniqueInput
    create: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput>
  }

  export type RenderJobCreateManySessionInputEnvelope = {
    data: RenderJobCreateManySessionInput | RenderJobCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionEventCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUncheckedCreateWithoutSessionInput = {
    id?: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventCreateOrConnectWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    create: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput>
  }

  export type SessionEventCreateManySessionInputEnvelope = {
    data: SessionEventCreateManySessionInput | SessionEventCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionIssueCreateWithoutSessionInput = {
    id?: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUncheckedCreateWithoutSessionInput = {
    id?: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueCreateOrConnectWithoutSessionInput = {
    where: SessionIssueWhereUniqueInput
    create: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput>
  }

  export type SessionIssueCreateManySessionInputEnvelope = {
    data: SessionIssueCreateManySessionInput | SessionIssueCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type ScreenUpsertWithoutSessionsInput = {
    update: XOR<ScreenUpdateWithoutSessionsInput, ScreenUncheckedUpdateWithoutSessionsInput>
    create: XOR<ScreenCreateWithoutSessionsInput, ScreenUncheckedCreateWithoutSessionsInput>
    where?: ScreenWhereInput
  }

  export type ScreenUpdateToOneWithWhereWithoutSessionsInput = {
    where?: ScreenWhereInput
    data: XOR<ScreenUpdateWithoutSessionsInput, ScreenUncheckedUpdateWithoutSessionsInput>
  }

  export type ScreenUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScreenUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    secretHash?: StringFieldUpdateOperationsInput | string
    dailyBudget?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastRenderAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSessionUpsertWithoutRoomSessionInput = {
    update: XOR<UserSessionUpdateWithoutRoomSessionInput, UserSessionUncheckedUpdateWithoutRoomSessionInput>
    create: XOR<UserSessionCreateWithoutRoomSessionInput, UserSessionUncheckedCreateWithoutRoomSessionInput>
    where?: UserSessionWhereInput
  }

  export type UserSessionUpdateToOneWithWhereWithoutRoomSessionInput = {
    where?: UserSessionWhereInput
    data: XOR<UserSessionUpdateWithoutRoomSessionInput, UserSessionUncheckedUpdateWithoutRoomSessionInput>
  }

  export type UserSessionUpdateWithoutRoomSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserSessionNestedInput
  }

  export type UserSessionUncheckedUpdateWithoutRoomSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserSessionNestedInput
  }

  export type CustomerUpsertWithoutSessionsInput = {
    update: XOR<CustomerUpdateWithoutSessionsInput, CustomerUncheckedUpdateWithoutSessionsInput>
    create: XOR<CustomerCreateWithoutSessionsInput, CustomerUncheckedCreateWithoutSessionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSessionsInput, CustomerUncheckedUpdateWithoutSessionsInput>
  }

  export type CustomerUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: CustomerExperienceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experiences?: CustomerExperienceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RenderJobUpsertWithWhereUniqueWithoutSessionInput = {
    where: RenderJobWhereUniqueInput
    update: XOR<RenderJobUpdateWithoutSessionInput, RenderJobUncheckedUpdateWithoutSessionInput>
    create: XOR<RenderJobCreateWithoutSessionInput, RenderJobUncheckedCreateWithoutSessionInput>
  }

  export type RenderJobUpdateWithWhereUniqueWithoutSessionInput = {
    where: RenderJobWhereUniqueInput
    data: XOR<RenderJobUpdateWithoutSessionInput, RenderJobUncheckedUpdateWithoutSessionInput>
  }

  export type RenderJobUpdateManyWithWhereWithoutSessionInput = {
    where: RenderJobScalarWhereInput
    data: XOR<RenderJobUpdateManyMutationInput, RenderJobUncheckedUpdateManyWithoutSessionInput>
  }

  export type RenderJobScalarWhereInput = {
    AND?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
    OR?: RenderJobScalarWhereInput[]
    NOT?: RenderJobScalarWhereInput | RenderJobScalarWhereInput[]
    id?: StringFilter<"RenderJob"> | string
    sessionId?: StringFilter<"RenderJob"> | string
    status?: StringFilter<"RenderJob"> | string
    input?: JsonFilter<"RenderJob">
    result?: JsonNullableFilter<"RenderJob">
    failureReason?: StringNullableFilter<"RenderJob"> | string | null
    inputHash?: StringNullableFilter<"RenderJob"> | string | null
    createdAt?: DateTimeFilter<"RenderJob"> | Date | string
    updatedAt?: DateTimeFilter<"RenderJob"> | Date | string
  }

  export type SessionEventUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    update: XOR<SessionEventUpdateWithoutSessionInput, SessionEventUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionEventCreateWithoutSessionInput, SessionEventUncheckedCreateWithoutSessionInput>
  }

  export type SessionEventUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionEventWhereUniqueInput
    data: XOR<SessionEventUpdateWithoutSessionInput, SessionEventUncheckedUpdateWithoutSessionInput>
  }

  export type SessionEventUpdateManyWithWhereWithoutSessionInput = {
    where: SessionEventScalarWhereInput
    data: XOR<SessionEventUpdateManyMutationInput, SessionEventUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionEventScalarWhereInput = {
    AND?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
    OR?: SessionEventScalarWhereInput[]
    NOT?: SessionEventScalarWhereInput | SessionEventScalarWhereInput[]
    id?: StringFilter<"SessionEvent"> | string
    sessionId?: StringFilter<"SessionEvent"> | string
    timestamp?: DateTimeFilter<"SessionEvent"> | Date | string
    source?: StringFilter<"SessionEvent"> | string
    eventType?: StringFilter<"SessionEvent"> | string
    level?: StringFilter<"SessionEvent"> | string
    statusBefore?: StringNullableFilter<"SessionEvent"> | string | null
    statusAfter?: StringNullableFilter<"SessionEvent"> | string | null
    code?: StringNullableFilter<"SessionEvent"> | string | null
    message?: StringNullableFilter<"SessionEvent"> | string | null
    metadata?: JsonNullableFilter<"SessionEvent">
  }

  export type SessionIssueUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionIssueWhereUniqueInput
    update: XOR<SessionIssueUpdateWithoutSessionInput, SessionIssueUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionIssueCreateWithoutSessionInput, SessionIssueUncheckedCreateWithoutSessionInput>
  }

  export type SessionIssueUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionIssueWhereUniqueInput
    data: XOR<SessionIssueUpdateWithoutSessionInput, SessionIssueUncheckedUpdateWithoutSessionInput>
  }

  export type SessionIssueUpdateManyWithWhereWithoutSessionInput = {
    where: SessionIssueScalarWhereInput
    data: XOR<SessionIssueUpdateManyMutationInput, SessionIssueUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionIssueScalarWhereInput = {
    AND?: SessionIssueScalarWhereInput | SessionIssueScalarWhereInput[]
    OR?: SessionIssueScalarWhereInput[]
    NOT?: SessionIssueScalarWhereInput | SessionIssueScalarWhereInput[]
    id?: StringFilter<"SessionIssue"> | string
    sessionId?: StringFilter<"SessionIssue"> | string
    issueType?: StringFilter<"SessionIssue"> | string
    dedupeKey?: StringNullableFilter<"SessionIssue"> | string | null
    severity?: StringFilter<"SessionIssue"> | string
    status?: StringFilter<"SessionIssue"> | string
    userVisible?: BoolFilter<"SessionIssue"> | boolean
    customerMessageKey?: StringNullableFilter<"SessionIssue"> | string | null
    adminMessage?: StringFilter<"SessionIssue"> | string
    recommendedAction?: StringNullableFilter<"SessionIssue"> | string | null
    firstSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    lastSeenAt?: DateTimeFilter<"SessionIssue"> | Date | string
    count?: IntFilter<"SessionIssue"> | number
    metadata?: JsonNullableFilter<"SessionIssue">
  }

  export type RoomPreviewSessionCreateWithoutRenderJobsInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutRenderJobsInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutRenderJobsInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutRenderJobsInput, RoomPreviewSessionUncheckedCreateWithoutRenderJobsInput>
  }

  export type RoomPreviewSessionUpsertWithoutRenderJobsInput = {
    update: XOR<RoomPreviewSessionUpdateWithoutRenderJobsInput, RoomPreviewSessionUncheckedUpdateWithoutRenderJobsInput>
    create: XOR<RoomPreviewSessionCreateWithoutRenderJobsInput, RoomPreviewSessionUncheckedCreateWithoutRenderJobsInput>
    where?: RoomPreviewSessionWhereInput
  }

  export type RoomPreviewSessionUpdateToOneWithWhereWithoutRenderJobsInput = {
    where?: RoomPreviewSessionWhereInput
    data: XOR<RoomPreviewSessionUpdateWithoutRenderJobsInput, RoomPreviewSessionUncheckedUpdateWithoutRenderJobsInput>
  }

  export type RoomPreviewSessionUpdateWithoutRenderJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutRenderJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionCreateWithoutSessionEventsInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutSessionEventsInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutSessionEventsInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutSessionEventsInput, RoomPreviewSessionUncheckedCreateWithoutSessionEventsInput>
  }

  export type RoomPreviewSessionUpsertWithoutSessionEventsInput = {
    update: XOR<RoomPreviewSessionUpdateWithoutSessionEventsInput, RoomPreviewSessionUncheckedUpdateWithoutSessionEventsInput>
    create: XOR<RoomPreviewSessionCreateWithoutSessionEventsInput, RoomPreviewSessionUncheckedCreateWithoutSessionEventsInput>
    where?: RoomPreviewSessionWhereInput
  }

  export type RoomPreviewSessionUpdateToOneWithWhereWithoutSessionEventsInput = {
    where?: RoomPreviewSessionWhereInput
    data: XOR<RoomPreviewSessionUpdateWithoutSessionEventsInput, RoomPreviewSessionUncheckedUpdateWithoutSessionEventsInput>
  }

  export type RoomPreviewSessionUpdateWithoutSessionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutSessionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionCreateWithoutSessionIssuesInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutSessionIssuesInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutSessionIssuesInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedCreateWithoutSessionIssuesInput>
  }

  export type RoomPreviewSessionUpsertWithoutSessionIssuesInput = {
    update: XOR<RoomPreviewSessionUpdateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedUpdateWithoutSessionIssuesInput>
    create: XOR<RoomPreviewSessionCreateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedCreateWithoutSessionIssuesInput>
    where?: RoomPreviewSessionWhereInput
  }

  export type RoomPreviewSessionUpdateToOneWithWhereWithoutSessionIssuesInput = {
    where?: RoomPreviewSessionWhereInput
    data: XOR<RoomPreviewSessionUpdateWithoutSessionIssuesInput, RoomPreviewSessionUncheckedUpdateWithoutSessionIssuesInput>
  }

  export type RoomPreviewSessionUpdateWithoutSessionIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutSessionIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionCreateWithoutUserSessionInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    customer?: CustomerCreateNestedOneWithoutSessionsInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutUserSessionInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutUserSessionInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
  }

  export type EventCreateWithoutUserSessionInput = {
    id?: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventUncheckedCreateWithoutUserSessionInput = {
    id?: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventCreateOrConnectWithoutUserSessionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput>
  }

  export type EventCreateManyUserSessionInputEnvelope = {
    data: EventCreateManyUserSessionInput | EventCreateManyUserSessionInput[]
    skipDuplicates?: boolean
  }

  export type RoomPreviewSessionUpsertWithoutUserSessionInput = {
    update: XOR<RoomPreviewSessionUpdateWithoutUserSessionInput, RoomPreviewSessionUncheckedUpdateWithoutUserSessionInput>
    create: XOR<RoomPreviewSessionCreateWithoutUserSessionInput, RoomPreviewSessionUncheckedCreateWithoutUserSessionInput>
    where?: RoomPreviewSessionWhereInput
  }

  export type RoomPreviewSessionUpdateToOneWithWhereWithoutUserSessionInput = {
    where?: RoomPreviewSessionWhereInput
    data: XOR<RoomPreviewSessionUpdateWithoutUserSessionInput, RoomPreviewSessionUncheckedUpdateWithoutUserSessionInput>
  }

  export type RoomPreviewSessionUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutUserSessionInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserSessionInput, EventUncheckedUpdateWithoutUserSessionInput>
    create: XOR<EventCreateWithoutUserSessionInput, EventUncheckedCreateWithoutUserSessionInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserSessionInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserSessionInput, EventUncheckedUpdateWithoutUserSessionInput>
  }

  export type EventUpdateManyWithWhereWithoutUserSessionInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserSessionInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    userSessionId?: StringFilter<"Event"> | string
    sessionId?: StringNullableFilter<"Event"> | string | null
    eventType?: StringFilter<"Event"> | string
    renderJobId?: StringNullableFilter<"Event"> | string | null
    metadata?: JsonNullableFilter<"Event">
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type RoomPreviewSessionCreateWithoutCustomerInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    screen?: ScreenCreateNestedOneWithoutSessionsInput
    userSession?: UserSessionCreateNestedOneWithoutRoomSessionInput
    renderJobs?: RenderJobCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionUncheckedCreateWithoutCustomerInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
    renderJobs?: RenderJobUncheckedCreateNestedManyWithoutSessionInput
    sessionEvents?: SessionEventUncheckedCreateNestedManyWithoutSessionInput
    sessionIssues?: SessionIssueUncheckedCreateNestedManyWithoutSessionInput
  }

  export type RoomPreviewSessionCreateOrConnectWithoutCustomerInput = {
    where: RoomPreviewSessionWhereUniqueInput
    create: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput>
  }

  export type RoomPreviewSessionCreateManyCustomerInputEnvelope = {
    data: RoomPreviewSessionCreateManyCustomerInput | RoomPreviewSessionCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerExperienceCreateWithoutCustomerInput = {
    id?: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type CustomerExperienceUncheckedCreateWithoutCustomerInput = {
    id?: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type CustomerExperienceCreateOrConnectWithoutCustomerInput = {
    where: CustomerExperienceWhereUniqueInput
    create: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerExperienceCreateManyCustomerInputEnvelope = {
    data: CustomerExperienceCreateManyCustomerInput | CustomerExperienceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RoomPreviewSessionUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RoomPreviewSessionWhereUniqueInput
    update: XOR<RoomPreviewSessionUpdateWithoutCustomerInput, RoomPreviewSessionUncheckedUpdateWithoutCustomerInput>
    create: XOR<RoomPreviewSessionCreateWithoutCustomerInput, RoomPreviewSessionUncheckedCreateWithoutCustomerInput>
  }

  export type RoomPreviewSessionUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RoomPreviewSessionWhereUniqueInput
    data: XOR<RoomPreviewSessionUpdateWithoutCustomerInput, RoomPreviewSessionUncheckedUpdateWithoutCustomerInput>
  }

  export type RoomPreviewSessionUpdateManyWithWhereWithoutCustomerInput = {
    where: RoomPreviewSessionScalarWhereInput
    data: XOR<RoomPreviewSessionUpdateManyMutationInput, RoomPreviewSessionUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerExperienceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerExperienceWhereUniqueInput
    update: XOR<CustomerExperienceUpdateWithoutCustomerInput, CustomerExperienceUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerExperienceCreateWithoutCustomerInput, CustomerExperienceUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerExperienceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerExperienceWhereUniqueInput
    data: XOR<CustomerExperienceUpdateWithoutCustomerInput, CustomerExperienceUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerExperienceUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerExperienceScalarWhereInput
    data: XOR<CustomerExperienceUpdateManyMutationInput, CustomerExperienceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerExperienceScalarWhereInput = {
    AND?: CustomerExperienceScalarWhereInput | CustomerExperienceScalarWhereInput[]
    OR?: CustomerExperienceScalarWhereInput[]
    NOT?: CustomerExperienceScalarWhereInput | CustomerExperienceScalarWhereInput[]
    id?: StringFilter<"CustomerExperience"> | string
    customerId?: StringFilter<"CustomerExperience"> | string
    sessionId?: StringFilter<"CustomerExperience"> | string
    roomImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    roomImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    productId?: StringNullableFilter<"CustomerExperience"> | string | null
    productName?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageUrl?: StringNullableFilter<"CustomerExperience"> | string | null
    resultImageKey?: StringNullableFilter<"CustomerExperience"> | string | null
    createdAt?: DateTimeFilter<"CustomerExperience"> | Date | string
    expiresAt?: DateTimeFilter<"CustomerExperience"> | Date | string
  }

  export type CustomerCreateWithoutExperiencesInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutExperiencesInput = {
    id?: string
    name: string
    phoneE164: string
    countryCode: string
    dialCode: string
    lastSeenAt?: Date | string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: RoomPreviewSessionUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutExperiencesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutExperiencesInput, CustomerUncheckedCreateWithoutExperiencesInput>
  }

  export type CustomerUpsertWithoutExperiencesInput = {
    update: XOR<CustomerUpdateWithoutExperiencesInput, CustomerUncheckedUpdateWithoutExperiencesInput>
    create: XOR<CustomerCreateWithoutExperiencesInput, CustomerUncheckedCreateWithoutExperiencesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutExperiencesInput, CustomerUncheckedUpdateWithoutExperiencesInput>
  }

  export type CustomerUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutExperiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneE164?: StringFieldUpdateOperationsInput | string
    countryCode?: StringFieldUpdateOperationsInput | string
    dialCode?: StringFieldUpdateOperationsInput | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: RoomPreviewSessionUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserSessionCreateWithoutEventsInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    roomSession?: RoomPreviewSessionCreateNestedOneWithoutUserSessionInput
  }

  export type UserSessionUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    role: string
    phone?: string | null
    countryCode?: string | null
    dialCode?: string | null
    employeeCode?: string | null
    ip?: string | null
    createdAt?: Date | string
    roomSession?: RoomPreviewSessionUncheckedCreateNestedOneWithoutUserSessionInput
  }

  export type UserSessionCreateOrConnectWithoutEventsInput = {
    where: UserSessionWhereUniqueInput
    create: XOR<UserSessionCreateWithoutEventsInput, UserSessionUncheckedCreateWithoutEventsInput>
  }

  export type UserSessionUpsertWithoutEventsInput = {
    update: XOR<UserSessionUpdateWithoutEventsInput, UserSessionUncheckedUpdateWithoutEventsInput>
    create: XOR<UserSessionCreateWithoutEventsInput, UserSessionUncheckedCreateWithoutEventsInput>
    where?: UserSessionWhereInput
  }

  export type UserSessionUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserSessionWhereInput
    data: XOR<UserSessionUpdateWithoutEventsInput, UserSessionUncheckedUpdateWithoutEventsInput>
  }

  export type UserSessionUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomSession?: RoomPreviewSessionUpdateOneWithoutUserSessionNestedInput
  }

  export type UserSessionUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    countryCode?: NullableStringFieldUpdateOperationsInput | string | null
    dialCode?: NullableStringFieldUpdateOperationsInput | string | null
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roomSession?: RoomPreviewSessionUncheckedUpdateOneWithoutUserSessionNestedInput
  }

  export type RoomPreviewSessionCreateManyScreenInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastRenderHash?: string | null
    userSessionId?: string | null
    customerId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
  }

  export type RoomPreviewSessionUpdateWithoutScreenInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    customer?: CustomerUpdateOneWithoutSessionsNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutScreenInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateManyWithoutScreenInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RenderJobCreateManySessionInput = {
    id?: string
    status: string
    input: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: string | null
    inputHash?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionEventCreateManySessionInput = {
    id?: string
    timestamp?: Date | string
    source: string
    eventType: string
    level?: string
    statusBefore?: string | null
    statusAfter?: string | null
    code?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueCreateManySessionInput = {
    id?: string
    issueType: string
    dedupeKey?: string | null
    severity: string
    status?: string
    userVisible?: boolean
    customerMessageKey?: string | null
    adminMessage: string
    recommendedAction?: string | null
    firstSeenAt?: Date | string
    lastSeenAt?: Date | string
    count?: number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RenderJobUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RenderJobUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    input?: JsonNullValueInput | InputJsonValue
    result?: NullableJsonNullValueInput | InputJsonValue
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    inputHash?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionEventUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionEventUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    statusBefore?: NullableStringFieldUpdateOperationsInput | string | null
    statusAfter?: NullableStringFieldUpdateOperationsInput | string | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionIssueUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    dedupeKey?: NullableStringFieldUpdateOperationsInput | string | null
    severity?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userVisible?: BoolFieldUpdateOperationsInput | boolean
    customerMessageKey?: NullableStringFieldUpdateOperationsInput | string | null
    adminMessage?: StringFieldUpdateOperationsInput | string
    recommendedAction?: NullableStringFieldUpdateOperationsInput | string | null
    firstSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type EventCreateManyUserSessionInput = {
    id?: string
    sessionId?: string | null
    eventType: string
    renderJobId?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutUserSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    renderJobId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPreviewSessionCreateManyCustomerInput = {
    id?: string
    status: string
    mobileConnected?: boolean
    renderCount?: number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    screenId?: string | null
    lastRenderHash?: string | null
    userSessionId?: string | null
    lastMobileSeenAt?: Date | string | null
    lastScreenSeenAt?: Date | string | null
  }

  export type CustomerExperienceCreateManyCustomerInput = {
    id?: string
    sessionId: string
    roomImageUrl?: string | null
    roomImageKey?: string | null
    productId?: string | null
    productName?: string | null
    resultImageUrl?: string | null
    resultImageKey?: string | null
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RoomPreviewSessionUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    screen?: ScreenUpdateOneWithoutSessionsNestedInput
    userSession?: UserSessionUpdateOneWithoutRoomSessionNestedInput
    renderJobs?: RenderJobUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    renderJobs?: RenderJobUncheckedUpdateManyWithoutSessionNestedInput
    sessionEvents?: SessionEventUncheckedUpdateManyWithoutSessionNestedInput
    sessionIssues?: SessionIssueUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type RoomPreviewSessionUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    mobileConnected?: BoolFieldUpdateOperationsInput | boolean
    renderCount?: IntFieldUpdateOperationsInput | number
    selectedRoom?: NullableJsonNullValueInput | InputJsonValue
    selectedProduct?: NullableJsonNullValueInput | InputJsonValue
    renderResult?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    screenId?: NullableStringFieldUpdateOperationsInput | string | null
    lastRenderHash?: NullableStringFieldUpdateOperationsInput | string | null
    userSessionId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMobileSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastScreenSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerExperienceUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerExperienceUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerExperienceUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roomImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    roomImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    resultImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}