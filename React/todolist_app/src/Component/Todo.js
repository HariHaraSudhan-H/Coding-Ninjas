import React, { useState } from "react";
import { useTodo } from "../hooks";
import styles from "../Styles/home.module.css";
import { deleteToDo, updateTodo } from "../api";
import { redirect } from "react-router-dom";

const Todo = (props) => {
  const todos = useTodo();
  const [title, setTitle] = useState(props.data.title);
  const [completed, setCompleted] = useState(props.data.completed);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = (id) => {
    const deleteTodo = async (id) => {
      const response = await deleteToDo(id);
      const data = response.data;
      if (response.success) {
        todos.deleteTodoState(id);
      } else {
        console.log("Error in deleting");
      }
    };
    deleteTodo(id);
  };

  const handleEditClick = (id) => {
    const editTodo = async (id) => {
      // const response = await updateTodo(id);
      // if(response.success){
      //     const newtodos = todos.data;
      //     newtodos.map()
      //     todos.updateTodoState()
      // }
    };
    editTodo(id);
    setEditMode(true);
  };
  const handleCompleteClick = (id) => {
    setCompleted(!completed);
    const newtodos = todos.data;
    newtodos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        console.log("Id found", todo);
      }
    });

    todos.updateTodoState(newtodos);
  };

  const handleEditSave = (e, id) => {
    // e.preventDefault();
    const editTodo = async (id) => {
      const response = await updateTodo(id);
      if (response.success) {
        const newtodos = todos.data;
        newtodos.map((todo) => {
          if (todo.id === id) {
            todo.title = title;
          }
        });
        todos.updateTodoState(newtodos);
      } else {
        console.log("error in updating");
      }
    };
    editTodo(id);
    setEditMode(false);
  };
  const style = {
    todoTitle: {
      textDecoration: completed ? "line-through black 3px" : "none",
    },
  };
  return (
    <div className={styles.todo}>
      {editMode ? (
        <form
          onSubmit={(e) => {
            handleEditSave(e, props.data.id);
          }}
        >
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button className={styles.button}>Save</button>
        </form>
      ) : (
        <>
          <span style={style.todoTitle}>{title}</span>
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
                onClick={() => {
                  handleEditClick(props.data.id);
                }}
              />
            </button>
            {completed ? (
              <button className={styles.button}>
                <img
                  src="https://cdn.icon-icons.com/icons2/1184/PNG/512/1490134498-checkmark_82222.png"
                  alt=""
                  className={styles.buttonimages}
                  onClick={() => {
                    handleCompleteClick(props.data.id);
                  }}
                />
              </button>
            ) : (
              <button className={styles.button}>
                <img
                  src="https://cdn.icon-icons.com/icons2/10/PNG/256/check_ok_accept_apply_1582.png"
                  className={styles.buttonimages}
                  onClick={() => {
                    handleCompleteClick(props.data.id);
                  }}
                />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;
