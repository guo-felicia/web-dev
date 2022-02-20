const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="home.html" class="list-group-item list-group-item-action">
                     <i class="fas fa-home wd-icon"></i>
                     Home
                 </a>
                <a href="#explore" class="list-group-item list-group-item-action active"
                   aria-current="true">
                    <i class="fas fa-hashtag wd-icon"></i>
                    Explore
                </a>
                <a href="#notifications" class="list-group-item list-group-item-action">
                    <i class="fas fa-bell wd-icon"></i>
                    Notifications
                </a>
                <a href="#message" class="list-group-item list-group-item-action">
                    <i class="fas fa-envelope wd-icon"></i>
                    Messages
                </a>
                <a href="bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-bookmark wd-icon"></i>
                    Bookmarks
                </a>
                <a href="#lists" class="list-group-item list-group-item-action">
                    <i class="fas fa-list wd-icon"></i>
                    Lists
                </a>
                <a href="profile.html" class="list-group-item list-group-item-action">
                    <i class="fas fa-user-alt wd-icon"></i>
                    Profile
                </a>
                <a href="#more" class="list-group-item list-group-item-action">
                    <i class="fas fa-ellipsis-h wd-icon"></i>
                    More
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
