import React, { useState } from "react";
import { useTodo } from "../hooks";
import { addTodo } from "../api";

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
      if (response.success) {
        todos.addTodoToState(newTodo);
      }else{
        console.log('Error in adding todo');
      }
    };
    addTask();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button>Add Post</button>
    </form>
  );
};

export default CreateToDo;
