import { foldFree } from "fp-ts-contrib/lib/Free";
import { task } from "fp-ts/lib/Task";
import { getTaskEchoProgramInterpreter, echoLogger } from "./todo.interpreters";
import { flow } from "fp-ts/lib/function";
import { echoProgram } from "./todo.examples";

(async () => {
    const taskI = getTaskEchoProgramInterpreter();
    const interpreter = flow(echoLogger, taskI);
    const echo = await foldFree(task)(interpreter, echoProgram('Hello Free Monads'))();
    console.log(echo);
})();