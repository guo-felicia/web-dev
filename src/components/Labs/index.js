import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";

const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
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