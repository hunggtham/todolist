import { useState } from "react";
import AddNewItem from "./AddNewItem";
import ListItem from "./ListItem";

const TodoList = () => {

    const [listTodo, setListTodo] = useState([
        { id: 'todo1', title: 'Hit the gym' },
        { id: 'todo2', title: 'Learn React' },
        { id: 'todo3', title: 'Play Soccer' },
        { id: 'todo4', title: 'Meeting' },
        { id: 'todo5', title: 'Clean my House' },

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