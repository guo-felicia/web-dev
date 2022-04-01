import '../explore.css';
import '../style.css'

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";


import {createTuit, deleteTuit, findAllTuits, updateTuit}
    from "../actions/tuits-actions";

const TuitsList = () => {
    const tuit = useSelector(
        state => state.tuits);
    
    // create a new state variable with new tuit data
    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    useEffect(() =>
            findAllTuits(dispatch),
        []);
    
    return (
        <>
            {/*What's Happening*/}
            <div className="list-group-item">
                <div>
                    <img className="wd-avatar" src="/img/avatar/userav.jpeg" alt="Avatar"/>
                </div>
                {/*TEXT ENTERING AREA*/}
                <textarea className="form-control w-75 wd-whatsHappening"
                          placeholder="What's happening?"
                          onChange={(e) =>
                              setNewTuit({
                                  ...newTuit,
                                  tuit: e.target.value
                              })}></textarea>
                {/*ICONS*/}
                <div>
                    <i className="far fa-image wd-icon-wh wd-m-60px "></i>
                    <i className="fas fa-chart-bar wd-icon-wh"></i>
                    <i className="far fa-smile wd-icon-wh"></i>
                    <i className="fas fa-calendar-alt wd-icon-wh"></i>
                    {/*TUIT BUTTON*/}
                    <button className="btn btn-primary btn-block rounded-pill wd-tuit"
                            onClick={() =>
                                createTuit(dispatch, newTuit)}
                            className="btn btn-primary float-end">
                        Tuit
                    </button>
                </div>
            </div>
            {/*Main Contents of Tuits*/}
            <ul className="ttr-tuits list-group">
                {
                    tuit.map && tuit.map(tuit =>
                        <div className="list-group-item">
                            <div>
                                Tuit id:
                                {tuit._id}
                            </div>
                            <div>
                                {tuit.postedBy && tuit.postedBy.username}
                            </div>
                            <div>
                                {tuit.tuit}
                            </div>
                            
                            {/*LIKES*/}
                            <div>
                                Likes: {tuit.likes}
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    likes: tuit.likes + 1
                                })} className="far fa-thumbs-up ms-2"></i>
                            </div>
                            {/*DISLIKE*/}
                            <div>
                                Dislikes: {tuit.likes}
                                <i onClick={() => updateTuit(dispatch, {
                                    ...tuit,
                                    likes: tuit.likes + 1
                                })} className="far fa-thumbs-down ms-2"></i>
                            </div>
                            {/*DELETE*/}
                            <i className="fas fa-trash float-end"
                               onClick={() => deleteTuit(
                                   dispatch, tuit)}></i>
                        
                        </div>
                    )
                }
            </ul>
        </>
    
    
    );
}

export default TuitsList;