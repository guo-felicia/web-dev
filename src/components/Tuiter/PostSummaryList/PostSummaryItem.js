// 1.
import React from "react";

const PostSummaryItem = (
    //2.
    {
        posts = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "/img/posts/1react.jpg"
        }
    }
) => {
    return (
        // 3&4&5.
        <div className="wd-container-card list-group-item">
            <div className="wd-left-element">
                <p className="wd-label-13px">{posts.topic}</p>
                <div className=" d-flex align-items-center">
                    <p className="wd-title-13px">{posts.userName}</p>
                    <i className="fas fa-check-circle wd-icon"></i>
                    <p className="wd-timestamp-13px">- {posts.time}</p>
                </div>
                <p className="wd-title-15px wd-m-2px">
                    {posts.title}
                </p>
            </div>
            <div class="wd-right-element">
                <img className="wd-card-img-right rounded d-flex h-75" src={posts.image}/>
            </div>
        </div>
    );
}
export default PostSummaryItem;
