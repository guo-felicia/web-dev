import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                       <!-- search field and cog -->
               <div class="mb-0">
                    <div class="wd-widgets-input">
                        <i class="fas fa-search p-1 wd-search-icon"></i>
                        <input type="text" placeholder="Search Twitter" class="wd-search wd-sidebar-15px"/>
                        <!--Gear-->
                    </div>
                    <i class="fas fa-cog wd-gear"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                 <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
           </ul>
                      <!--Main Post-->
            <div class="card border-0">
                <img src="../image/starship.jpeg" class="wd-main-img">
                <div class="card-img-overlay h-100 d-flex flex-column justify-content-end wd-title-23px">
                    <p>SpaceX's Starship</p>
                </div>
            </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
