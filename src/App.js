import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("");
    const [toDos, setToDos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredToDos] = useState([]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    useEffect(() => {
        console.log("App just mounted/ new To Dos");
        filterHandler();
        saveLocalTodos();
    }, [toDos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredToDos(
                    toDos.filter((todo) => todo.completed === true)
                );
                break;
            case "uncompleted":
                setFilteredToDos(
                    toDos.filter((todo) => todo.completed === false)
                );
                break;
            default:
                setFilteredToDos(toDos);
                break;
        }
    };
    const saveLocalTodos = () =>
        localStorage.setItem("toDos", JSON.stringify(toDos));
    const getLocalTodos = () => {
        if (localStorage.getItem("toDos") === null) {
            localStorage.setItem("toDos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("toDos"));
            setToDos(todoLocal);
        }
    };
    return (
        <div className="App">
            <header>
                <h1>Elles To Do List</h1>
            </header>
            <Form
                setInputText={setInputText}
                toDos={toDos}
                setToDos={setToDos}
                inputText={inputText}
                setStatus={setStatus}
            />
            <TodoList
                toDos={toDos}
                setToDos={setToDos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;
