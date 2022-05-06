import React from "react";
import './FollowCard.css';

export default function FollowCard(props) {
    return (
        <div className="follow-card">
            <img src={`./assets/images/${props.toFollowImage}`} alt="to-follow" />
            <div>
                <h3>{props.toFollowName}</h3>
                <h4>{props.isFollowingYou}</h4>
            </div>
            <h2>Seguir</h2>
        </div>
    )
}