//Version 1
// const TodoItem = (todo) => {
//     return(`
//         <li>${todo}</li>
//     `);
// }
// export default TodoItem;

//Version 2
// const TodoItem = (todo) => {
//     return(`
//         <li>
//             ${todo.title}
//             (${todo.status})
//         </li>
//     `);
// }
// export default TodoItem;

//Version 3
const TodoItem = (todo) => {
    return(`
        <li>
            <input type="checkbox"
                ${todo.done ? 'checked' : ''}/>
            ${todo.title}
            (${todo.status})
        </li>`);
}
export default TodoItem;

