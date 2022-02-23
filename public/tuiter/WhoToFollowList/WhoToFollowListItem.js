const WhoToFollowListItem = (who) => {
    return (`
            <div class="wd-container-card">
                <div class="wd-left-avatar">
                    <img class="wd-avatar" src="${who.avatarIcon}" alt="Avatar">
                </div>
                <div class="wd-left-element">
                    <div class="wd-title-block d-flex align-items-center">
                        <p class="wd-title-15px m-0">${who.userName}</p>
                        <i class="fas fa-check-circle wd-icon"></i>
                    </div>
                    <div class="wd-label-15px">@${who.handleTag}</div>

                </div>
                <div class="wd-right-element">
                    <button class="btn btn-primary override-bs">
                        Follow
                    </button>
                </div>
            </div>
        `);
}
export default WhoToFollowListItem;
