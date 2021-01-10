import React from 'react';
import { UseForm } from '../../hooks/UseForm';

export const TodoAdd = ({ handleAddTodo }) => {
    // Destructure state to get only description
    const [{ description }, handleInputChange, reset] = UseForm({
        description: '',
    });

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

        handleAddTodo(newTodo);
        reset();
    };
    return (
        <>
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
        </>
    );
};
