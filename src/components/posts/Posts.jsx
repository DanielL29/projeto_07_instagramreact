import React from "react";
import CommentContainer from "../comment-container/CommentContainer";
import Comment from "../comment/Comment";
import PostsCard from "../posts-card/PostsCard";
import { userPosts, likes, postComments } from '../../mock/data'
import './Posts.css'

export default function Posts() {
    function addPostComments() {
        for(let i = 0; i < postComments.length; i++) {
            userPosts[i].likes.push(likes[i])
            userPosts[i].postComments.push(postComments[i])
        }
    }
    addPostComments()

    function LoadPostCards() {
        return userPosts.map((post, i) => {
            return (
                <PostsCard key={i} 
                    userName={post.userName} userImage={post.userImage} postImage={post.postImage} isVideo={post.isVideo}
                    likeName={post.likes[0].likeName} likeAmount={post.likes[0].likeAmount} likeImage={post.likes[0].likeImage}>
                    {post.postComments.map((comments, j) => {
                        return (
                            <div key={j}>
                                <CommentContainer userName={post.userName} postText={comments.postText} commentsAmount={comments.commentsAmount} />
                                {comments.comments.map((comment, k) => {
                                    return (
                                        <Comment key={k} commentName={comment.commentName} message={comment.message} />
                                    )
                                })}
                            </div>
                        
                        )
                    })}
                </PostsCard>
            )
        })
    }

    return (
        <div className="cards">
            <LoadPostCards />
        </div>
    )
}