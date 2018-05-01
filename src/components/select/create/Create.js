import React, { Component } from 'react';
//import axios from 'axios';
import RateSelect from '../RateSelect';
import YearSelect from '../YearSelect';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            nameInput: '',
            yearInput: '',
            platformInput: '',
            ratingInput: '',
            reviewInput: '',
            cover_artInput: ''
           
        }
        this.createNewGame = this.createNewGame.bind( this )
        this.handleRating = this.handleRating.bind( this )
        this.handleYear = this.handleYear.bind( this )
    }
    

    changeNameInput(newName) {
        this.setState({ nameInput: newName })
    }
    changeYearInput(newYear) {
        this.setState({ yearInput: newYear })
    }
    changePlatorm(newPlatform) {
        this.setState({ platformInput: newPlatform })
    }
    changeRating(newRating){
        this.setState({ratingInput: newRating})
    }
    changeReview(newReview){
        this.setState({reviewInput: newReview})
    }
    changeCoverArt(newCover){
        this.setState({cover_artInput: newCover})
    }

    createNewGame() {

        const newGame = {
            name: this.state.nameInput,
            platform: this.state.platformInput,
            release_year: this.state.yearInput,
            rating: this.state.ratingInput,
            review: this.state.reviewInput,
            cover_art: this.state.cover_artInput
        }
        
        this.setState({
            nameInput: '',
            platformInput: '',
            yearInput: '',
            ratingInput: '',
            reviewInput: '',
            cover_artInput: ''
        })
        console.log(newGame)
        this.props.addTwo(newGame)
    }

    handleRating(newRating){
        this.setState({ ratingInput: newRating })
        console.log(this.state.ratingInput)
    }

    handleYear( newYear ){
        this.setState({ yearInput: newYear })
        console.log(this.state.yearInput)
    }



    render() {
        return (
                <div className="createBox">
                <h1>Input a Game:</h1>
               
                Game Name: <input
                    className="textContainer"
                    type='text'
                    placeholder={`Game title`}
                    value={this.state.nameInput}
                    onChange={(element) => this.changeNameInput(element.target.value)} /><br />
                    
                    Year Released: <YearSelect
                    getYear={this.handleYear}
                    onChange={(element) => this.changeYearInput(element.target.value)} /> <br />
                    
                    GamePlatform: <input
                    className="textContainer"
                    type='text'
                    placeholder={`Platform`}
                    value={this.state.platformInput}
                    onChange={(element) => this.changePlatorm(element.target.value)} /> <br />

                    Your Rating: <RateSelect 
                    retrieve={this.handleRating}
                    onChange={(element) => this.changeRating(element.target.value)} /> 1 meaning not recommended, 5 meaning completely recommended <br />

                    Review: <textarea
                    className="textContainer"
                    rows= "4"
                    cols= "80"
                    type='text'
                    placeholder={`Write a review about the game.`}
                    value={this.state.reviewInput}
                    onChange={(element) => this.changeReview(element.target.value)} /> <br />

                    Cover Art: <input
                    className="textContainer"
                    type='text'
                    placeholder={`Cover Art URL`}
                    value={this.state.cover_art}
                    onChange={(element) => this.changeCoverArt(element.target.value)} /> <br />

                <button onClick={this.createNewGame}>Add</button>
            </div>
        )
    }


}