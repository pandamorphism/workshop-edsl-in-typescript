export type Identity = {
    id: number;
}
export type Todo = Identity & NewTodo;

export type NewTodo = {
    task: string;
    done: boolean;
}