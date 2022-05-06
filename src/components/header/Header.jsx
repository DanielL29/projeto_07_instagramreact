import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <header className="header">
            <div className="instagram-header">
                <div className="instagram-box">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div></div>
                    <img src="./assets/images/logo 1.png" alt="Logo" />
                </div>
                <input type="text" placeholder="Pesquisar" />
                <div className="extra-icons">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>
            </div>
            <div className="instagram-header-mobile">
                <ion-icon name="logo-instagram"></ion-icon>
                <img src="./images/logo 1.png" alt="Logo" />
                <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        </header>
    )
}