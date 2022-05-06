import React from 'react'
import './StoriesCard.css'

export default function StoriesCard(props) {
    return (
        <div className="story-container">
            <div className="story-card">
                <img src={`./assets/images/${props.image}`} alt="stories" />
            </div>
            <h2 className={`${props.last ? 'last' : ''}`}>{props.userName}</h2>
        </div>
    )
}