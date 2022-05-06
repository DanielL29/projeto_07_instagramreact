import React from 'react'
import FollowCard from '../follow-card/FollowCard'
import { toFollow } from '../../mock/data'
import './Sidebar.css'

export default function Sidebar(props) {
    function LoadSugestions() {
        return toFollow.map((sugestion, i) => {
            return (
                <FollowCard key={i}
                    toFollowImage={sugestion.toFollowImage} 
                    toFollowName={sugestion.toFollowName} 
                    isFollowingYou={sugestion.isFollowingYou} 
                />
            )
        })
    }

    return (
        <aside className="sidebar">
            <div className="perfil">
                <img src={`./assets/images/${props.perfilImage}`} alt="perfil" />
                <div className="perfil-names">
                    <h2>{props.perfilName}</h2>
                    <p>{props.perfil}</p>
                </div>
            </div>
            <div className="sugestions">
                <h3>Sugestões para você</h3>
                <h4>Ver tudo</h4>
            </div>
            <div className="to-follow">
                <LoadSugestions />
            </div>
            <div className="about">
                <h5>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </h5>
                <h5>© 2021 INSTAGRAM DO FACEBOOK</h5>
            </div>
        </aside>
    )
}