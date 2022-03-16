// 1.
import React from "react";

const TuitListItem = (//2.
    {
        tuit = {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
            },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "image": "/img/homepost/pic2.jpg",
                "video": "unKvMC3Y1kI"
            },
            "logo-image": "../../../images/react-blue.png",
            "avatar-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123, "retuits": 234, "likes": 345
            }
        }
    }) => {
    return (// 3&4&5.
        <div className="list-group-item">
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
            <img className="wd-img-post" src={tuit.attachments}/>
            <div className="wd-reaction">
                <a className="wd-inactive" href="#">
                    <i className='far fa-comment'></i>
                    <p className='wd-stats'>{tuit.stats.comments}</p>
                </a>
                <a className="wd-inactive" href="#"><i className="fas fa-retweet"></i>
                    <p className='wd-stats'>{tuit.stats.retuits}</p>
                </a>
                <a className="wd-active" href="#">
                    <i className="fas fa-heart"></i>
                    <p className='wd-stats'>
                        {tuit.stats.likes}</p>
                </a>
                <a className="wd-inactive" href="#">
                    <i className="fas fa-external-link-alt"></i></a>
            </div>
        </div>);
}
export default TuitListItem;
