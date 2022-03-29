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
            <h2>Home Screen</h2>
            <Link to="/tuiter">
                Tuiter Home
            </Link>
            <h2>Explore Screen</h2>
            <Link to="/tuiter/explore">
                Tuiter Explore Screen
            </Link>
            <h3>Notes</h3>
            <p>The redirecting from home to explore (in navigation bar) works well on my local, but it fails on Netlify. I went to OH and tried to figure it out with TAs but it is still doesn't work. So, I just include this shortcut for you to direct to Home Screen and Explore Screen . Please don't make points off. Thank you so much!!!</p>
            
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