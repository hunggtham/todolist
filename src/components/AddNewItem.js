import React, { useState } from 'react';
import '../todo.css'
// import _ from 'lodash';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewItem = (props) => {

    const { listTodo, setListTodo } = props;
    const [inputValue, setInputValue] = useState('');

    // random todo id from min to max
    const randomTodoId = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddNewTodo = () => {

        // old method
        // if (inputValue.trim() === '') {
        //     alert("Todo name is not empty")
        //     return;
        // };
        // let todoId = randomTodoId(6, 99999);

        // let todoItem = {
        //     id: `todo${todoId}`,
        //     title: inputValue,
        //     isComplete: false
        // }
        // console.log(todoItem);
        // map is not a function
        // setListTodo(...listTodo, todoItem);
        //test using lodash
        // npm install --save-exact lodash@4.17.21
        // let updateTodos = [...listTodo];
        // updateTodos.push(todoItem);
        // setListTodo(updateTodos);
        // setInputValue("");

        //new method
        if (inputValue.replace(/\s+/g, '') === '') {
            toast.warning("Todo name is not empty");
        }
        else if (listTodo.some(item => item.id == inputValue.replace(/\s+/g, ''))) {
            toast.warning("Existing Task");
        }
        else {
            // clear space betwwen 2 word to create unique id(need fix)
            setListTodo(todo => [...todo, { id: inputValue.replace(/\s+/g, ''), title: inputValue, isCompleted: false }])
            toast.success(`${inputValue} is added Todo List`);
            setInputValue("");
        }

    }
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <input value={inputValue} onChange={handleInputChange} type="text" id="myInput" placeholder="Enter new task..." />
            <span onClick={() => handleAddNewTodo()} className="addBtn">Add</span>
            {/* <p>Add new Todo with title: {inputValue}</p> */}
        </div>

    )
}


export default AddNewItem;