import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="wd-reaction">
            <a className="wd-inactive" href="#">
                <i className='far fa-comment me-1'></i>
                <p className='wd-stats'>{tuit.stats.comments}</p>
            </a>
            <a className="wd-inactive" href="#"><i className="fas fa-retweet me-1"></i>
                <p className='wd-stats'>{tuit.stats.retuits}</p>
            </a>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fas fa-heart me-1"
                       style={{color: 'rgb(206, 58, 96)'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {tuit.stats && tuit.stats.likes}
    </span>
            <a className="wd-inactive" href="#">
                <i className="fas fa-external-link-alt"></i></a>
        </div>
    
    );
}
export default TuitStats;