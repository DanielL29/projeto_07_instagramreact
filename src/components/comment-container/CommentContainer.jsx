import React from "react";
import './CommentContainer.css'

export default function CommentContainer(props) {
    return (
        <div>
            <h3><strong>{props.userName}</strong> {props.postText}</h3>
            <h4>Ver todos os {props.commentsAmount} comentarios</h4>
        </div>
    )
}