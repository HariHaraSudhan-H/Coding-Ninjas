import React, { useState } from "react";
import { useTodo } from "../hooks";
import { addTodo } from "../api";
import styles from '../Styles/home.module.css'

const CreateToDo = () => {
  const [task, setTask] = useState("");
  const todos = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      completed: false,
      userId: 1,
      title: task,
      id: todos.data.length + 1,
    };
    const addTask = async () => {
      const response = await addTodo(newTodo);
      if (response.success && task.length!=0) {
        todos.addTodoToState(newTodo);
        
      } else {
        console.log("Error in adding todo");
      }
    };
    addTask();
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.createtodo}>
      <input
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className={styles.createtodoInput}
        placeholder="Enter the task..."
      />
      <button className={styles.createtodoButton}>Add Post</button>
    </form>
  );
};

export default CreateToDo;
