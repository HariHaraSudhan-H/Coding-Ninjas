import React, { useState } from "react";
import { useTodo } from "../hooks";
import styles from "../Styles/home.module.css";
import { deleteToDo } from "../api";
import { redirect } from "react-router-dom";

const Todo = (props) => {
    const todos = useTodo();
    const [completed,setCompleted] = useState(props.data.completed);

  const handleDelete = (id) => {
    const deleteTodo = async (id) => {
      const response = await deleteToDo(id);
      const data = response.data;
      if (response.success) {
        todos.deleteTodoState(id);
      } else {
        console.log("Error in deleting");
      }
    }
    deleteTodo(id)
  };

  const handleCompleteClick = (id)=>{
    setCompleted(!completed);
    const newtodos = todos.data;
    newtodos.map((todo)=>{
        if(todo.id===id){
            todo.completed = !todo.completed;
            console.log('Id found',todo)
        }
    })

    todos.updateTodoState(newtodos);
  }
  return (
    <div className={styles.todo}>
      {props.data.title}
      <div className={styles.btngroup}>
        <button className={styles.button}>
          <img
            src="https://cdn.icon-icons.com/icons2/1367/PNG/512/32officeicons-3_89720.png"
            alt="delete"
            className={styles.buttonimages}
            onClick={() => {
              handleDelete(props.data.id);
            }}
          />
        </button>
        <button className={styles.button}>
          <img
            src="https://cdn.icon-icons.com/icons2/1558/PNG/512/353430-checkbox-edit-pen-pencil_107516.png"
            alt="edit"
            className={styles.buttonimages}
          />
        </button>
        {completed ? (
          <button className={styles.button}>
            <img
              src="https://cdn.icon-icons.com/icons2/10/PNG/256/check_ok_accept_apply_1582.png"
              className={styles.buttonimages}
              onClick={()=>{handleCompleteClick(props.data.id)}}
            />
          </button>
        ) : (
          <button className={styles.button}>
            <img
              src="https://cdn.icon-icons.com/icons2/1238/PNG/512/checkmark_83735.png"
              alt=""
              className={styles.buttonimages}
              onClick={()=>{handleCompleteClick(props.data.id)}}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
