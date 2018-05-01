import React, { Component } from 'react';


export default class RateSelect extends Component {
    constructor() {
        super()
        this.state = {
            rating: ''
        }
        this.sendRating = this.sendRating.bind( this );
    }

    sendRating(newRating){
        this.props.retrieve(newRating)
    }


    handleChoice(event) {
        this.setState({ rating: event })
        let currSel = event;
        this.sendRating(currSel)
    }


    render() {
        return (
            <div>
                <select className="selectContainer" value={this.state.rating} onChange={(elem) => this.handleChoice(elem.target.value)}>
                    <option value="" defaultValue>Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>

                </select>
            </div>
        )



    }



}