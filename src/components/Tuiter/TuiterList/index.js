import React from "react";
import {useSelector} from "react-redux";
import TuitListItem
    from "./TuitListItem";
import '../explore.css';
import '../style.css'

const TuitList = () => {
    // get the tuits from the state in the store
    const tuits = useSelector(
        state => state.tuits);
    
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;