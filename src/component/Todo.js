import React from 'react';
import style from './todo.module.css';
const Todo = (props) => {
    const {title, desc} = props.todo;
    const {id} = props;
    const handleclick = (id) => {
        props.onRemoveTodo(id);
    }
  return (
    <article className={style.todo}>
        <div>
            <h3 style={{textAlign:'left'}}>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className={style.btn} onClick={() => {handleclick(id)}}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default Todo