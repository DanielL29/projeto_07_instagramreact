import React from 'react'
import StoriesCard from '../stories-card/StoriesCard'
import { userStories } from '../../mock/data'
import './Stories.css'

export default function Stories() {
    function LoadStoriesCards() {
        return userStories.map((story, i) => {
            return (
                <StoriesCard key={i} userName={story.userName} image={story.image} last={story.last} />
            )
        })
    }

    return (
        <div className="stories">
            <LoadStoriesCards />
            <div className="forward-circle">
              <img src="./assets/images/Vector.svg" alt="Vector" />
            </div>
        </div>
    )
}