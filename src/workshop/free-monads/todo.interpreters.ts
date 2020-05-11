
import { EchoProgramF } from './todo.api';
import { Task, task, delay } from 'fp-ts/lib/Task';
// type Interpreter = EchoProgramF ~> Task
export const getTaskEchoProgramInterpreter = () => {
    return <A>(program: EchoProgramF<A>): Task<A> => {
        switch (program.tag) {
            case 'Yell': {
                const response = program.word.split('').reverse().join('');
                return delay(1500)(task.fromIO(() => program.next(response)))
            }

        }
    }
}

export const echoLogger = <A>(program: EchoProgramF<A>): EchoProgramF<A> => {
    const { tag, ...rest } = program;
    console.log(`[${tag}]`, JSON.stringify(rest))
    return program;
}