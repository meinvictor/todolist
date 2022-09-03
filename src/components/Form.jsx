import React, { useEffect } from 'react';
import { nanoid } from 'nanoid'
import styles from './form.module.css';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const id = nanoid();
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) => (
            todo.id === id ? { title, id, completed } : todo
        ));
        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("");
        }
    }, [setInput, editTodo]);
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: id, title: input, completed: false }]);
            setInput('');
        } else {
            updateTodo(input, editTodo.id, editTodo.completed);
        }
    }

    return (
        <div className={styles.form_container}>
            <form onSubmit={onFormSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Type something..."
                    className={styles.input_container}
                    value={input}
                    required
                    onChange={onInputChange}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                />
                <br />
                <button type="submit" className={styles.button_form}>Add task</button>
            </form>
        </div>
    );
};

export default Form;