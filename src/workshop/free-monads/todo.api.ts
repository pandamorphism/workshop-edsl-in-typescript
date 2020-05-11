import { liftF } from "fp-ts-contrib/lib/Free";
import { identity } from "fp-ts/lib/function";

export const EchoProgramFURI: 'EchoProgramF' = 'EchoProgramF'
export type EchoProgramFURI = typeof EchoProgramFURI


export class Yell<Continuation> {
    readonly tag: 'Yell' = 'Yell'
    readonly _A!: Continuation;
    readonly _URI!: EchoProgramFURI;
    constructor(
        readonly word: string,
        readonly next: (echo: string) => Continuation) { }
}

export type EchoProgramF<Continuation> = Yell<Continuation>

declare module 'fp-ts/lib/HKT' {
    interface URItoKind<A> {
        EchoProgramF: EchoProgramF<A>
    }
}

// * API

export const yell = (word: string) => liftF(new Yell(word, identity))