import React from "react";

export const userStories = [
    { userName: '9gag', image: '9gag 1.png', last: false },
    { userName: 'meowed', image: 'meowed 1.png', last: false },
    { userName: 'barked', image: 'barked 1.png', last: false },
    { userName: 'nathanwpylestrangeplanet', image: 'nathanwpylestrangeplanet 1.png', last: false },
    { userName: 'wawawiwacomicsa', image: 'wawawiwacomicsa 1.png', last: false },
    { userName: 'respondeai', image: 'respondeai 1.png', last: false },
    { userName: 'filomoderna', image: 'filomoderna 1.png', last: false },
    { userName: 'memeriagourmet', image: 'memeriagourmet 1.png', last: true }
]

export const toFollow = [
    { toFollowImage: 'badvibesmemes 1.png', toFollowName: 'bad.vibes.memes', isFollowingYou: 'Segue você' },
    { toFollowImage: 'chibirdart 1.png', toFollowName: 'chibirdart', isFollowingYou: 'Segue você' },
    { toFollowImage: 'razoesparaacreditar 1.png', toFollowName: 'razoesparaacreditar', isFollowingYou: 'Novo no Instagram' },
    { toFollowImage: 'adorableanimals 1.png', toFollowName: 'adorableanimals', isFollowingYou: 'Segue você' },
    { toFollowImage: 'smallcutecats 1.png', toFollowName: 'smallcutecats', isFollowingYou: 'Segue você' }
]

export const userPosts = [
    { userName: 'meowed', userImage: 'meowed 1.png', postImage: 'gato-telefone 1.png', isVideo: false, likes: [], postComments: [] }, 
    { userName: 'barked', userImage: 'barked 1.png', postImage: 'dog 1.png', isVideo: false, likes: [], postComments: [] }, 
    { userName: 'adorable_animals', userImage: 'adorableanimals 1.png', postImage: 'video', isVideo: true, likes: [], postComments: [] }
]

export const likes = [
    { likeName: 'respondeai', likeAmount: '101.523', likeImage: 'respondeai 1.png' },
    { likeName: 'adorableanimals', likeAmount: '99.159', likeImage: 'adorableanimals 1.png' },
    { likeName: 'barked', likeAmount: '150.465', likeImage: 'barked 1.png' }
]

export const postComments = [
    {
        postText: <span>Gato no celular &#128241;</span>,
        commentsAmount: 40,
        comments: [
            { commentName: 'smallcutecats', message: <span>ownt que fofo &#128151;&#128151;&#128151;&#128151;</span> },
            { commentName: 'adorable_animals', message: <span>quero &#128525;</span> }
        ]
    }, 
    {
        postText: <span>Doguinho dormindo &#128564;&#128564;</span>,
        commentsAmount: 53,
        comments: [
            { commentName: 'meowed', message: <span>prefiro gatos &#128530;</span> },
            { commentName: 'adorable_animals', message: <span>quero também &#128525;&#128525;</span> },
            { commentName: '9gag', message: <span>é igualzinho o meu!</span> }
        ]
    },
    {
        postText: <span>Olha que graçinha esse urso &#128522;&#128525;</span>,
        commentsAmount: 112,
        comments: [
            { commentName: 'barked', message: <span>um pouco perigoso pra ser graçinha...</span> },
            { commentName: 'meowed', message: <span>ainda prefiro gatos &#128530;&#128049;</span> },
            { commentName: '9gag', message: <span>wooow &#128059;</span> },
        ]
    }
]