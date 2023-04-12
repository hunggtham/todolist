import React, { useState } from 'react';
import '../todo.css'
// import _ from 'lodash';

const AddNewItem = (props) => {

    const [todo, setTodo] = useState('');
    const { listTodo, setListTodo } = props;

    // random todo id from min to max
    const randomTodoId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const addNewTodoButton = () => {
        let todoId = randomTodoId(6, 99999);

        let todoItem = {
            id: `todo${todoId}`,
            title: todo,
        }
        console.log(todoItem);
        // map is not a function
        // setListTodo(...listTodo, todoItem);
        //test using lodash
        // npm install --save-exact lodash@4.17.21
        let currentTodoList = [...listTodo];
        currentTodoList.push(todoItem);
        setListTodo(currentTodoList);

        setTodo("");
    }
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>

            <input value={todo} onChange={(event) => setTodo(event.target.value)} type="text" id="myInput" placeholder="Title..." />
            <span onClick={() => addNewTodoButton()} className="addBtn">Add</span>
            <p>Add new Todo with title: {todo}</p>
        </div>

    )
}


export default AddNewItem;