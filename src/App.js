import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container"> 
    <Header title="Todoie"/>
    <TodoItem text="Eat" />
    <TodoItem completed={true} text="Code"/>
    <TodoItem text="Play" />
    <TodoItem text="Study" />
    <TodoItem text="Sleep" />
    <Button />
    </div>
  );
};
//when returning multiple elements, the elements must have a common parent
//here div
export default App;
