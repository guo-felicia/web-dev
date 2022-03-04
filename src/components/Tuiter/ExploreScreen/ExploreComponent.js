//1. Import React.js
import React from "react";
// 2. Remove JavaScript extensions since they are optional
import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
    return (<>
        <div className="row">
            {/*Search*/}
            <div className="mb-0">
                <div className="wd-widgets-input">
                    <i className="fas fa-search p-1 wd-search-icon"></i>
                    <input type="text" placeholder="Search Twitter" className="wd-search wd-sidebar-15px"/>
                    {/*Gear*/}
                </div>
                <i class="fas fa-cog wd-gear"></i>
            </div>
        </div>
        <ul className="nav mb-2 nav-tabs">
            {/*Tab*/}
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </ul>
        {/*Main Posts*/}
        <div className="card border-0">
            <img src="/img/starship.jpeg" className="wd-main-img"/>
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end wd-title-23px">
                <p>SpaceX's Starship</p>
            </div>
        </div>
        {/*Image overload Text*/}
        {PostSummaryList()}
    </>);
}
export default ExploreComponent;
