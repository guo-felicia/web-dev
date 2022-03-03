// 1. Import React.js
import React from "react";

const WhoToFollowListItem = (
    // 2. Object deconstructed parameter
    {
        who = {
            avatarIcon: '/src/components/Tuiter/img/avatar/nasa.jpg',
            userName: 'NASA',
            handle: 'NASA',
        }
    }
) => {
    return (
            <div className="wd-container-card">
                <div className="wd-left-avatar">
                    <img className="wd-avatar" src={who.avatarIcon} alt="Avatar"/>
                </div>
                <div className="wd-left-element">
                    <div className="wd-title-block d-flex align-items-center">
                        <p className="wd-title-15px m-0">{who.userName}</p>
                        <i className="fas fa-check-circle wd-icon"></i>
                    </div>
                    <div className="wd-label-15px">@{who.handle}</div>
                
                </div>
                <div className="wd-right-element">
                    <button className="btn btn-primary override-bs">
                        Follow
                    </button>
                </div>
            </div>
);
}
export default WhoToFollowListItem;
