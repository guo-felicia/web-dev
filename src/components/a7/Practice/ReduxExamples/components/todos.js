// import useState to work with local state
import React, {useState} from "react";
// import the hook
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    // create todos local state variable initialized + add done property
    const [todo, setTodo] = useState({do: '', done: false});
    // create a dispatch
    const dispatch = useDispatch();
    // handle checkbox click
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }
    
    // handle create click event
    const createTodoClickHandler = () => {
        // create action object
        const action = {
            type: 'create-todo', // required action type
            todo
        };
        dispatch(action); // send action to reducers
    }
    // delete todos event handler accepts todo
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }
    
    // handle keystroke changes in input field
    const todoChangeHandler = (event) => {
        // get data from input field
        const doValue = event.target.value;
        // create new todos object instance
        const newTodo = {
            do: doValue // setting the todos do property
        };
        setTodo(newTodo); // change local state todos variable
    }
    return (
        <ul className="list-group">
            {/*add a new line item at the top*/}
            <li className="list-group-item">
                <input checked={todo.done}
                       onChange={(event) =>
                           updateTodoClickHandler(
                               {...todo,
                                   done: event.target.checked})}
                       type="checkbox"/>
    
                <input
                    onChange={todoChangeHandler}
                    value={todo.do}
                    className="form-control"/>
                {/*create button notifies event handler when*/}
                <button onClick={createTodoClickHandler}
                        className="btn btn-primary">
                    Create New Todo
                </button>
                <button onClick={() =>
                    deleteTodoClickHandler(todo)}
                        className="btn btn-danger float-end">
                    Delete
                </button>

            </li>
        </ul>
    );
};
export default Todos;

