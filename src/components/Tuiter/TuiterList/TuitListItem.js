import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "../tuitStats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    
    return (
        <div className="list-group-item">
            <i onClick={() =>
                deleteTuit(tuit)}
               className="fas fa-backspace fa-2x fa-pull-right wd-delete"></i>
            <div>
                <img className="wd-avatar" src={tuit["avatar-image"]} alt="Avatar"/>
            </div>
            <div className="wd-title-block">
                <p className="wd-title-15px">{tuit.postedBy.username}</p>
                <p className="wd-handel-15px">@{tuit.handle}</p>
            </div>
            <div className="wd-content-15px">
                {tuit.tuit}
            </div>
            {tuit.attachments && tuit.attachments.image && <img className="wd-img-post" src={tuit.attachments.image}></img>}
            {tuit.attachments && tuit.attachments.video &&
                <iframe className="wd-img-post" src={"https://www.youtube.com/embed/" + tuit.attachments.video}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>}
            <TuitStats tuit={tuit}/>
        
        </div>);
}
export default TuitListItem;
