import { useState } from "react";
import AddNewItem from "./AddNewItem";
import ListItem from "./ListItem";

const TodoList = () => {

    //add isComplete
    // { id: 'todo1', title: 'Hit the gym', isComplete: false},

    const [listTodo, setListTodo] = useState([
        // { id: 'todo1', title: 'Learn English', isCompleted: false },

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