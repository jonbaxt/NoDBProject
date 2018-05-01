import React from 'react';

import './listStyle.css';

export default function List(props) {

    function reviewStatement(reviewNumber) {
        let con = Number(reviewNumber);
        if (con === 1) {
            return `Not recommended for kids`
        } else if (con === 2) {
            return `You may need to have a talk about the subject matter later.`
        } else if (con === 3) {
            return `Some questionable material present`
        } else if (con === 4) {
            return `Pretty good, kids will not die while playing game.`
        } else {
            return `Completely safe for kids, your dog could play it.`
        }
    }
    function visualRating(revNum) {
        let number = Number(revNum)
        let stuff = [];
        for (var i = 0; i < number; i++) {
            stuff.push(<img key={i} height='30px' src='https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SY355_.jpg' alt='' />)
        }
        return stuff
    }

    let gameReviewList = props.cr.map((currGame) => {
        return (
            <div key={currGame.id}>
                <div className="listBox">
                    <div className='documentation'>
                        <ul>
                            <li>{`Id: ${currGame.id} `}</li>
                            <li>{`Game: ${currGame.name}  `}</li>
                            <li>{`Published: ${currGame.release_year}  `}</li>
                            <li>{`Platform: ${currGame.platform}`}</li>
                        </ul>
                        <img className="gameImage" src={` ${currGame.cover_art} `} alt='' />
                    </div>
                    <div className='comments'>
                        <p>{`Reviewer's Rating:`} {visualRating(currGame.rating)} {/*{currGame.rating}*/} <br />{reviewStatement(currGame.rating)} </p>
                        <h3>Parental Comments: <br /> {`${currGame.review}`}</h3>
                    </div>
                </div>
                <br />
            </div>
        )
    })


    return (
        <div>
            {gameReviewList}
        </div>
    )




}