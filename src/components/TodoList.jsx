import React from 'react';
import styles from "./todolist.module.css";

const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    };
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    return (
        <div className={styles.todolist_container}>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="text"
                        className={`list ${todo.completed ? "completed" : ""}`}
                        value={todo.title}
                        onChange={(e) => e.preventDefault()}
                    />
                    <div className={styles.buttons_container}>
                        <button onClick={() => handleComplete(todo)} className={styles.completeBtn}>
                            <span><div>Complete</div></span>
                        </button>
                        <button onClick={() => handleEdit(todo)} className={styles.editBtn}>
                            <span><div>Edit</div></span>
                        </button>
                        <button onClick={() => handleDelete(todo)} className={styles.deleteBtn}>
                            <span><div>Delete</div></span>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodoList;