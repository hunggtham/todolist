import { useState } from "react";
import AddNewItem from "./AddNewItem";
import ListItem from "./ListItem";

const TodoList = () => {

    //add isComplete
    // { id: 'todo1', title: 'Hit the gym', isComplete: false},

    const [listTodo, setListTodo] = useState([
        { id: 'todo1', title: 'Hit the gym', isComplete: false },
        { id: 'todo2', title: 'Learn React', isComplete: false },
        { id: 'todo3', title: 'Play Soccer', isComplete: false },
        { id: 'todo4', title: 'Meeting', isComplete: false },
        { id: 'todo5', title: 'Clean my House', isComplete: false },

    ])
    return (
        <div>
            <h1>Homepage</h1>
            <AddNewItem listTodo={listTodo} setListTodo={setListTodo} />
            <ListItem listTodo={listTodo} setListTodo={setListTodo} />

        </div>

    )

}

export default TodoList;