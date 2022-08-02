import React from 'react';
import { useState } from 'react';
import {
    useGetTodoQuery,
    useGetTodosQuery,
} from './store/slices/apis/todosApi';

export const TodoApp = () => {
    // const { data: todos = [], isLoading } = useGetTodosQuery();

    const [todoId, setTodoId] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const onNextTodo = () => {
        setTodoId(todoId + 1);
    };

    const onPrevTodo = () => {
        if (todoId === 1) return;
        setTodoId(todoId - 1);
    };

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <h4>isLoading... {isLoading ? 'True' : 'False'}</h4>

            <pre>{JSON.stringify(todo)}</pre>

            {/* <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done' : 'Pending'}</strong>:
                        {todo.title}
                    </li>
                ))}
            </ul> */}
            <button onClick={onPrevTodo}>Previous</button>
            <button onClick={onNextTodo}>Next</button>
        </>
    );
};
