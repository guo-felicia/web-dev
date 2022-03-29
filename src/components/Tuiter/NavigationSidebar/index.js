// 1. Import React
import React from "react";

const NavigationSidebar = (
    // 2. Object deconstructed parameter
    {
        active = 'explore'
    }
) => {
    return (
        // 4. React function components return a single HTML element:
        // Make single <div> or use <></>
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter wd-icon"></i></a>
                <a href="#home" className="list-group-item list-group-item-action active">
                    <i className="fas fa-home wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Home
                    </div>
                </a>
                <a href="#explore" className="list-group-item list-group-item-action"
                   aria-current="true">
                    <i className="fas fa-hashtag wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Explore
                    </div>
                </a>
                <a href="#notifications" className="list-group-item list-group-item-action">
                    <i className="fas fa-bell wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Notifications
                    </div>
                </a>
                <a href="#message" className="list-group-item list-group-item-action">
                    <i className="fas fa-envelope wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Messages
                    </div>
                </a>
                <a href="../../../../public/tuiter/bookmarks.html" className="list-group-item list-group-item-action">
                    <i className="fas fa-bookmark wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Bookmarks
                    </div>
                </a>
                <a href="#lists" className="list-group-item list-group-item-action">
                    <i className="fas fa-list wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Lists
                    </div>
                </a>
                <a href="../../../../public/tuiter/profile.html" className="list-group-item list-group-item-action">
                    <i className="fas fa-user-alt wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        Profile
                    </div>
                </a>
                <a href="#more" className="list-group-item list-group-item-action">
                    <i className="fas fa-ellipsis-h wd-icon"></i>
                    <div className="wd-sidebar-15px">
                        More
                    </div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="../../../../public/tuiter/tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;
