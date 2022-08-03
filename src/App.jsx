import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "./component/TodoItem";
import AddTodoForm from "./component/AddTodoForm";
import EditForm from "./component/EditForm";
import './component/todolist.css'
function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [todo, setTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

  // add localStorage 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

    // input add onChange
    function handleInputChange(e) {
    setTodo(e.target.value);
    }
  // input edit onChange
  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  }

  // enter add
  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }

  // enter edit
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  // Delete
    function handleDeleteClick(id){
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });

        const loadItem = removeItem.map((todo, index) => {
            return(
              {
                id: index + 1,
                text: todo.text
              }
            )
        })
        
        setTodos(loadItem);
    }

  // Update
  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  // Edit
  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  // Add
  function handleButtonClick(e){
      e.preventDefault();
      if(todo !== ""){
          setTodos([...todos, {
              id: todos.length + 1,
              text: todo.trim()
          }])
      }

      setTodo("");
  }


  return (
        <div className="todolist-container">
        {isEditing ? (
          <EditForm
            currentTodo={currentTodo}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <AddTodoForm
            todo={todo}
            onAddInputChange={handleInputChange}
            onAddFormSubmit={handleFormSubmit}
            onAddButtomSubmit={handleButtonClick}
          />
        )}
  
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
              key={index}
            />
          ))}
        </ul>
      </div>
    );
}

export default App;
