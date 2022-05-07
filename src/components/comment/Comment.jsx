import React, { useState } from "react";
import './Comment.css';

export default function Comment(props) {
    const [color, setColor] = useState(false)

    return (
        <div className={`comment ${color === true ? 'red' : ''}`}>
            <p>
                <strong>{props.commentName}</strong> {props.message}
            </p>
            <ion-icon name={`${color === true ? 'heart' : 'heart-outline'}`} 
                onClick={() => setColor(!color)}>
            </ion-icon>
        </div>
    )
}