import React, { Component } from 'react';
//import axios from 'axios';
import RateSelect from '../RateSelect'
import YearSelect from '../YearSelect'

export default class Update extends Component {
    constructor() {
        super()
        this.state = {
            idRequest: '',
            nameInput: '',
            yearInput: '',
            platformInput: '',
            ratingInput: '',
            reviewInput: '',
            cover_artInput: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.handleYear = this.handleYear.bind(this);
    }

    resetState(){
        this.setState({
            idRequest: '',
            nameInput: '',
            yearInput: '',
            platformInput: '',
            ratingInput: '',
            reviewInput: '',
            cover_artInput: ''
        })
    }
    changeIdInput(newId) {
        this.setState({ idRequest: newId })
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
    changeRating(newRating) {
        this.setState({ ratingInput: newRating })
    }
    changeReview(newReview) {
        this.setState({ reviewInput: newReview })
    }
    changeCoverArt(newCover) {
        this.setState({ cover_artInput: newCover })
    }

    handleUpdate() {
        if (this.state.newId === (this.state.newId > 0 && this.state.newId < 1000)) {

            const updatedGame = {
                "id": this.state.idRequest,
                "name": this.state.nameInput,
                "release_year": this.state.yearInput,
                "platform": this.state.platformInput,
                "rating": this.state.ratingInput,
                "review": this.state.reviewInput,
                'cover_art': this.state.cover_artInput
            }
            this.props.upTwo(updatedGame)
           
            this.resetState()

        }
        else {
            
            setTimeout(() => {
                this.resetState()
                this.setState({                 
                    reviewInput: 'Not a number not in scope was entered in Id. Please enter a valid Id.'
                })
                
                setTimeout( () => {
                    this.setState({ 
                    reviewInput: ''})
                }, 3000)    
            }, 1);
                
        }
    }

    handleRating(newRating) {
        this.setState({ ratingInput: newRating })
        // console.log(this.state.ratingInput)
    }

    handleYear(newYear) {
        this.setState({ yearInput: newYear })
        // console.log(this.state.yearInput)
    }



    render() {
        return (
            <div className="updatebox">
                <h1>Update a Game</h1>

                Id:<input
                    className="textContainerId"
                    type='text'
                    placeholder='#'
                    value={this.state.idRequest}
                    onChange={(element) => this.changeIdInput(element.target.value)} /> <br />

                Game Name: <input
                    className="textContainer"
                    type='text'
                    placeholder='Game title'
                    value={this.state.nameInput}
                    onChange={(element) => this.changeNameInput(element.target.value)} /> <br />

                Year Released: <YearSelect
                    getYear={this.handleYear}
                    onChange={(element) => this.changeYearInput(element.target.value)} /> <br />

                Platform: <input
                    className="textContainer"
                    type='text'
                    placeholder='Platform'
                    value={this.state.platformInput}
                    onChange={(element) => this.changePlatorm(element.target.value)} /> <br />

                Your Rating: <RateSelect
                    retrieve={this.handleRating}
                    onChange={(element) => this.changeRating(element.target.value)} /> 1 meaning not recommended, 5 meaning completely recommended   <br />

                Review: <textarea
                    className="textContainer"
                    rows="4"
                    cols="80"
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

                <button onClick={this.handleUpdate}>Edit</button>
            </div>
        )
    }


}