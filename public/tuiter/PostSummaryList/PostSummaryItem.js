const PostSummaryItem = (posts) => {
    return (`
            <div class="wd-container-card">
                <div class="wd-left-element">
                    <p class="wd-label-13px">${posts.topic}</p>
                    <div class=" d-flex align-items-center">
                        <p class="wd-title-13px">${posts.userName}</p>
                        <i class="fas fa-check-circle wd-icon"></i>
                        <p class="wd-timestamp-13px">- ${posts.time}</p>
                    </div>
                    <p class="wd-title-15px wd-m-2px">
                        ${posts.title}
                    </p>
                </div>
                <div class="wd-right-element">
                    <img class="wd-card-img-right rounded d-flex h-75" src="${posts.image}"/>
                </div>
            </div>
        `);
}
export default PostSummaryItem;
