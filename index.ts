const foo = "bar";
//    ^^^ should be an error... Unused at runtime.

export type Baz = typeof foo;
