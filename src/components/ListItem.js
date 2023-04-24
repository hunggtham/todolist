import '../todo.css';

//toastify
// https://www.npmjs.com/package/react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useState } from 'react';
const ListItem = (props) => {
    const { listTodo, setListTodo } = props;
    //cach 1
    // const [active, setActive] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');
    const deleteOnClick = (index) => {

        let updatedTodos = [...listTodo];
        // case 1: using todo.id
        // updatedTodos = listTodo.filter(item => todo.id !== id);
        // setListTodo(updatedTodos);
        updatedTodos.splice(index, 1);
        setListTodo(updatedTodos);
        toast.warning(`Detele task '${listTodo[index].title}' successful`)
    }

    const handleCompleteTodo = (index) => {
        const updatedTodos = [...listTodo];
        updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
        if (updatedTodos[index].isCompleted === true) {
            toast("Fighting! Let complete another task");
        }
        setListTodo(updatedTodos);
    };
    const handleEditTodo = (index) => {
        setEditingIndex(index);
        setEditedValue(listTodo[index].title);
    };

    const handleSaveTodo = (index) => {
        const updatedTodos = [...listTodo];
        updatedTodos[index].title = editedValue;
        setListTodo(updatedTodos);
        setEditingIndex(null);
        setEditedValue('');
        toast.success(`Update task '${listTodo[index].title}' successful`)

    };

    const handleCancelEditTodo = () => {
        setEditingIndex(null);
        setEditedValue('');
    };


    return (
        <>
            <ul id="myUL">
                {listTodo.map((todo, index) => {
                    // cach1
                    // style={{ textDecoration: active ? "line-through" : "" }}
                    return <li key={todo.id} id={todo.id} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} >{todo.title}
                        {editingIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editedValue}
                                    onChange={(event) => setEditedValue(event.target.value)}
                                />
                                <button className="btn" onClick={() => handleSaveTodo(index)} >Save</button>
                                <button className="btn" onClick={handleCancelEditTodo}>Cancel</button>
                            </>
                        ) : (
                            <>
                                <button className="btn finish-button" onClick={() => handleCompleteTodo(index)}>{todo.isCompleted ? 'Uncomplete' : 'Complete'}</button>
                                <button className="btn remove-button" onClick={() => deleteOnClick(index, todo.id)}>Remove</button>
                                <button className="btn edit-button" onClick={() => handleEditTodo(index)}>Edit</button>
                            </>)}
                    </li>;
                })}
            </ul>
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default ListItem;