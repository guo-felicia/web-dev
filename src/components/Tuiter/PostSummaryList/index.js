import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import posts from "./posts";

const PostSummaryList = () => {
    return (
        <ul class="list-group">
            {
                posts.map(postItem => {
                    return (
                        <PostSummaryItem posts={postItem}/>
                    );
                })
            }
        </ul>
    );
}

export default PostSummaryList;