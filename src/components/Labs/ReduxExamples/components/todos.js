/*
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
            {/!*add a new line item at the top*!/}
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
                {/!*create button notifies event handler when*!/}
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

*/

/*Version 1: uses useSelector to retrieve the todos generated by the todos.js reducer*/
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    // 1 basic state
    // create todos local state variable initialized and eidt by adding done value
    const [todo, setTodo] = useState({do: '', done: false});
    // handle keystroke changes in input field
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        // change local state todo variable
        setTodo(newTodo);
    }
    // 2 create a dispatch
    const dispatch = useDispatch();
    // handle create click event
    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        // send action to reducers
        dispatch(action);
    }
    // 3 delete todos event handler accepts todo
    const deleteTodoClickHandler = (todo) => {
        // create new action
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }
    // 4 handle checkbox click
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }
    
    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {/*// add a new line item at the top*/}
                <li className="list-group-item">
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control"/>
                    {/*// create button notifies event handler when*/}
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary">
                        Create New Todos
                    </button>
                    {/*// if user clicks on Delete button,
                    call event handler passing todos instance*/}
                    <button onClick={() =>
                        deleteTodoClickHandler(todo)}
                            className="btn btn-danger float-end">
                        Delete
                    </button>
                
                </li>
                
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            {/*create a checkbox, show checked if done=true*/}
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler(
                                           {...todo,
                                               done: event.target.checked})}
                                   type="checkbox"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;
