import React, { Component } from 'react';

import '../../select.css'


export default class Delete extends Component {
    constructor() {
        super()
        this.state = {
            idRequest: ''
        }
        this.handleDelete = this.handleDelete.bind( this );
    }
    changeIdInput( newId ){
        this.setState({ idRequest: newId})
    }
    handleDelete(){
        let num = Number(this.state.idRequest)
       this.props.callTwo(num)
       this.setState({
           idRequest: ''
       })
    }



    render() {
        return (
            <div className="deletebox">
                <h1>Delete a Game</h1>
                <p> Id: <input
                    className="textContainerId"
                    type='text'
                    placeholder='#'
                    value={this.state.idRequest}
                    onChange={(element) => this.changeIdInput(element.target.value)} /> 
             
                <button onClick={this.handleDelete}>Delete Review</button></p>
            </div>
        )
    }


}