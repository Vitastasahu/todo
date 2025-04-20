import React from "react";

const TodoItem = () => {
    return (
        <li className="todo-item">
            <span>
            <input type="checkbox" />
            <span className="todo-item-text">Eat</span>
            </span>
            <p>...</p>
        </li>
    );
    //here li is the common parent necessary in return
    //<p> is block level, <span> is inline element (same line)
};
export default TodoItem;