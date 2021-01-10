import React, { useEffect, useReducer } from 'react';
import { UseForm } from '../../hooks/UseForm';
import './styles.css';
import { todoReducer } from './todoReducer';

const init = () => {
    // return [
    //     {
    //         id: new Date().getTime(),
    //         desc: 'Aprender REact',
    //         done: false,
    //     },
    // ];
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    // Destructure state to get only description
    const [{ description }, handleInputChange, reset] = UseForm({
        description: '',
    });

    // Watch todos changes to add localstorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo,
        };

        dispatch(action);
        reset();
    };

    const handleDelete = (todoId) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId,
        };

        dispatch(action);
    };

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId,
        });
    };

    return (
        <div>
            <h1>TodoApp: {todos.length}</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map((todo, i) => (
                            <li key={todo.id} className="list-group-item">
                                <p
                                    className={`${todo.done && 'complete'}`}
                                    onClick={() => handleToggle(todo.id)}
                                >
                                    {i + 1}. {todo.desc}
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="description"
                            placeholder="Aprender"
                            autoComplete="off"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
