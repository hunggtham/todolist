import '../todo.css';
// import React, { useState } from 'react';

const ListItem = (props) => {

    const { listTodo, setListTodo } = props;
    //cach 1
    // const [active, setActive] = useState(false);

    const deleteOnClick = (id) => {
        console.log("delete todo id: ", id);
        let currentTodoList = [...listTodo];
        currentTodoList = currentTodoList.filter(item => item.id !== id);
        setListTodo(currentTodoList);
    }

    const finishToDoOnClick = (event, item) => {


        item.isComplete = !item.isComplete;
        item.className = 'todo-finish';
        console.log("finish id: ", event, item);

    }

    return (
        <ul id="myUL">
            {listTodo.map((item) => {
                // cach1
                // style={{ textDecoration: active ? "line-through" : "" }}
                return <li key={item.id} id={item.id} >{item.title}
                    <button className="btn finish-button" onClick={(event) => finishToDoOnClick(event, item)}>Finish</button>
                    <button className="btn remove-button" onClick={() => deleteOnClick(item.id)}>Remove</button>
                    <button className="btn edit-button">Edit</button>
                </li>;
            })}
        </ul>
    )
}

export default ListItem;