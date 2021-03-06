import React, { Component } from 'react';

import Create from './create/Create';
import Update from './update/Update';
import Delete from './delete/Delete';


export default class Select extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            returnComponent: ''
        }
        this.handleChoice =this.handleChoice.bind( this );
        this.create = this.create.bind( this );
        this.update = this.update.bind( this );
        this.delete = this.delete.bind( this );
    }
    create(game){
        this.props.add(game);
    }
    update(game){
        this.props.up(game);
    }
    delete(gameId){
        this.props.call(gameId);
    }

    handleChoice(event){
        this.setState({ value: event.target.value})
        let currSel = event.target.value;
        switch (currSel){
            case 'Add':
            // <Create addTwo={this.create} />
            this.setState({returnComponent: <Create addTwo={this.create} />})
            // console.log('on Add')
            break;
            case 'Edit':
            // <Update upTwo={this.update} />
            this.setState({returnComponent: <Update upTwo={this.update} />})
            // console.log('on Edit')
            break;
            case 'Delete':
            // <Delete callTwo={this.delete} />
            this.setState({returnComponent: <Delete callTwo={this.delete} />})
                // console.log('on Delete')
                break;
            default:
            this.setState({returnComponent: ''})
                break;
        }
    }
    render() {
        return (
            <div>
            <select className="selectContainer" value={this.state.value} onChange={this.handleChoice}>
              <option value="" defaultValue>List formatting options</option>
              <option value="Add">Add to the list</option>
              <option value="Edit">Edit List Item</option>
              <option value="Delete">Delete List Item</option>

            </select>
            {this.state.returnComponent}
            </div>
        )
    }
}