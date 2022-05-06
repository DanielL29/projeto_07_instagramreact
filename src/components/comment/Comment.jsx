import React from "react";
import './Comment.css';

export default function Comment(props) {
    return (
        <div className="comment">
            <p>
                <strong>{props.commentName}</strong> {props.message}
            </p>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    )
}