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
        console.log("App just mounted/ new To Dos");
        filterHandler();
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
