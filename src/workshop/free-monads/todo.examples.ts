import * as todoAPI from './todo.api';
import { Free, free } from 'fp-ts-contrib/lib/Free';
import { Do } from 'fp-ts-contrib/lib/Do';

// 1. Yell and listen to the echo
export const echoProgram = (word: string): Free<todoAPI.EchoProgramFURI, string> =>
    Do(free)
        .bind('echo', todoAPI.yell(word))
        .return(({ echo }) => echo)