import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList"
import ReduxExamples from "./ReduxExamples/components";
const Labs = () => {
    return(
        <div>
            <h1>Tuiter</h1>
            <Link to="/tuiter">
                Tuiter
            </Link>
            <h1>Labs</h1>
            {/*A7*/}
            <ReduxExamples/>
            {/*A6*/}
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}
            {/*<TodoItem/>*/}
            {/*<TodoList/>*/}
        </div>
    )
};
export default Labs;

// Practice of Links
// const Labs = () => {
//     return(
//         <>
//             <h1>Labs</h1>
//             <Link to="/hello">
//                 Hello
//             </Link> |
//             <Link to="/tuiter">
//                 Tuiter
//             </Link>
//         </>
//     )
// };
// export default Labs;