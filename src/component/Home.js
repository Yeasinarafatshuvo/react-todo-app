import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import style from './home.module.css';
import NewTodo from './NewTodo';
import Todos from './Todos';
const Home = () => {
    const [todos, setTodos] = useState([]);
    const handleAddTodo = (todo) => {
        setTodos((prevTodos) => {
            return [...prevTodos, {id: uuidv4(),todo}]
        })
    }
  return (
    <div className={style.container}>
        <h1 style={{color:'white'}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos}/>
    </div>
  )
}

export default Home