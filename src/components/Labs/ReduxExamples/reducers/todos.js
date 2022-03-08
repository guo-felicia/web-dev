/*
const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todos = (state = data, action) => {
    switch (action.type) {
        case 'update-todo':
            const newTodos = state.map(todo => {
                const newTodo = todo._id === action.todo._id ? action.todo : todo;
                return newTodo;
            });
            return newTodos;
        case 'delete-todo':
            return state.filter(todo => todo !== action.todo);
        case 'create-todo':
            const newTodo = {
                ...action.todo,
                _id: (new Date()).getDate() + ""
            };
            return [
                ...state,
                newTodo
            ]
        default:
            return state;
    }
}


export default todos;
*/

const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

//Final version
// const todos = (state = data, action) => {
//     switch (action.type) {
//         case 'update-todo':
//             const newTodos = state.map(todo => {
//                 const newTodo = todo._id === action.todo._id ? action.todo : todo;
//                 return newTodo;
//             });
//             return newTodos;
//         case 'delete-todo':
//             return state.filter(todo => todo !== action.todo);
//         case 'create-todo':
//             const newTodo = {
//                 ...action.todo,
//                 _id: (new Date()).getDate() + ""
//             };
//             return [
//                 ...state,
//                 newTodo
//             ]
//         default:
//             return state;
//     }
// }

const todos = (state = data, action) => {
    switch (action.type) {
        case 'delete-todo':
            return state.filter(todo => todo !== action.todo);
        case 'create-todo':
            return [
                ...state,
                action.todo
            ]
        
        default:
            return state;
    }
}

export default todos;


