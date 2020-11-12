import React from "react";
import Todo from "./Todo";

export default function TodoList({ toDos, setToDos, filteredTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        setToDos={setToDos}
                        toDos={toDos}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    );
}
