import React from "react";
import './index.css';

const color = 'blue';
const dangerous = true;

const Classes = () => {
    //for dynamic color
    const color = 'blue';
    return (
        <div>
            <h2>Classes</h2>
            {/*Practice 1*/}
            <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
                Yellow background
            </div>
            <div className="wd-bg-blue wd-fg-black wd-padding-10px">
                Blue background
            </div>
            <div className="wd-bg-red wd-fg-black wd-padding-10px">
                Red background
            </div>
            
            {/*Practice 2*/}
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>
            
            {/*Practice 3: using expressions to conditionally choose between a set of classes*/}
            <div className={`${dangerous ?
                'wd-bg-red' : 'wd-bg-green'}
                wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            {/*Green color if you use the code below*/}
            <div className={`${!dangerous ?
                'wd-bg-red' : 'wd-bg-green'}
                wd-fg-black wd-padding-10px`}>
                Safe background [I add this for exercise, not included in Lab :)]
            </div>
        </div>
    )
};
export default Classes;

//HARD CODE VERSION
// const Classes = () => {
//     return(
//         <div>
//             <h2>Classes</h2>
//             <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
//                 Yellow background</div>
//             <div className="wd-bg-blue wd-fg-black wd-padding-10px">
//                 Blue background</div>
//             <div className="wd-bg-red wd-fg-black wd-padding-10px">
//                 Red background</div>
//         </div>
//     )
// };
