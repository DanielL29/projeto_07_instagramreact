import React from 'react'
import Posts from '../posts/Posts'
import Sidebar from '../sidebar/Sidebar'
import Stories from '../stories/Stories'
import MobileBottomBar from '../mobile-bottom-bar/MobileBottomBar'
import './Main.css'

export default function Main() {
    return (
        <main>
            <div className="instagram-content">
                <div className="posts">
                    <Stories />
                    <Posts />
                </div>
                <MobileBottomBar />
                <div>
                    <Sidebar perfilImage="catanacomics 1.png" perfilName="catanacomics" perfil="Catana" />
                </div>
            </div>
        </main>
    )
}