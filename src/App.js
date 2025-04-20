import React from "react";

import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container"> 
    <Header />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <TodoItem />
    <Button />
    </div>
  );
};
//when returning multiple elements, the elements must have a common parent
//here div
export default App;
