import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    return (
        <div className="app">
            <Header />
            <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
            />
            <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
        </div>
    );
}
export default App;
