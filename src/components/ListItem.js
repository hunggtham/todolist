import '../todo.css';
import React, { useState } from 'react';

const ListItem = (props) => {

    const { listTodo, setListTodo } = props;

    const deleteOnClick = (id) => {
        console.log("delete todo id: ", id);
        let currentTodoList = [...listTodo];
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList);
    }

    const finishToDoOnClick = (item) => {

        console.log(item);
        item.className = 'todo-finish';
    }
    return (
        <ul id="myUL">
            {listTodo.map((item) => {
                return <li key={item.id} id={item.id} >{item.title}
                    <button className="btn finish-button" onClick={() => finishToDoOnClick(item)}>Finish</button>
                    <button className="btn remove-button" onClick={() => deleteOnClick(item.id)}>Remove</button>
                    <button className="btn edit-button">Edit</button>
                </li>;
            })}
        </ul>
    )
}

export default ListItem;