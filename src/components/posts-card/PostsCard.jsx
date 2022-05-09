import React, { useState } from "react";
import './PostsCard.css'

export default function PostsCard(props) {
    const [color, setColor] = useState(false)

    return (
        <div className="card">
            <div className="card-top">
                <img src={`./assets/images/${props.userImage}`} alt="user" />
                <h3>{props.userName}</h3>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <div className="card-image" onClick={() => setColor(true)}>
                {props.isVideo ? (
                    <video autoPlay muted>
                        <source src={`./assets/videos/${props.postImage}.mp4`} type="video/mp4" />
                        <source src={`./assets/videos/${props.postImage}.ogv`} type="video/ogv" />
                  </video>
                ) : (
                    <img src={`./assets/images/${props.postImage}`} alt="post" />
                )}
            </div>
            <div className="card-info">
                <div className={`info-icons ${color === true ? 'red' : ''}`}>
                    <div>
                        <ion-icon name={`${color === true ? 'heart' : 'heart-outline'}`} 
                            onClick={() => setColor(!color)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="likes">
                    <img src={`./assets/images/${props.likeImage}`} alt="like" />
                    <p>
                        Curtido por <strong>{props.likeName}</strong> e
                        <strong> outras {props.likeAmount} pessoas</strong>
                    </p>
                </div>
                <div className="comments">
                    {props.children}
                </div>
                <div className="publish-comment">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentário..." />
                    <h2>Publicar</h2>
                </div>
            </div>
        </div>
    )
}