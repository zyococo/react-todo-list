import "./App.css";
import TodoList from "./TodoList";
import { useState, useRef } from "react";
//idをランダムに振る
import { v4 as uuidv4 } from "uuid";

import React from "react";

const App = () => {
  // const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);
  const [todos, setTodos] = useState([]); //To make the code above simple

  // //loading localstorage
  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedTodos) setTodos(storedTodos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const todoNameRef = useRef();

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value;
    if (name === "") return;
    // console.log(name);
    setTodos((prevTodos) => {
      // console.log(prevTodos);
      //check how to use uuidv4
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" name="" id="" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add a task</button>
      <button onClick={handleClear}>Delete the completed tasks</button>
      <div>
        Remaining tasks：{todos.filter((todo) => !todo.completed).length}
      </div>
    </>
  );
};

export default App;
