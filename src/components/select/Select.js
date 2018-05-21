import React, { Component } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';

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
        // this.handleChoice = this.handleChoice.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    create(game) {
        this.props.add(game);
    }
    update(game) {
        this.props.up(game);
    }
    delete(gameId) {
        this.props.call(gameId);
    }

    handleChoice(event) {
        this.setState({ value: event.target.value })
        // let currSel = event.target.value;
        // switch (currSel) {
        //     case 'Add':
        //         // <Create addTwo={this.create} />
        //         this.setState({ returnComponent: <Create addTwo={this.create} /> })
        //         // console.log('on Add')
        //         break;
        //     case 'Edit':
        //         // <Update upTwo={this.update} />
        //         this.setState({ returnComponent: <Update upTwo={this.update} /> })
        //         // console.log('on Edit')
        //         break;
        //     case 'Delete':
        //         // <Delete callTwo={this.delete} />
        //         this.setState({ returnComponent: <Delete callTwo={this.delete} /> })
        //         // console.log('on Delete')
        //         break;
        //     default:
        //         this.setState({ returnComponent: '' })
        //         break;
        // }
    }

    /*this.handleChoice*/

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                        <div className="selectBar">
                        <Link to='/' >List formatting options</Link>
                        <Link to='/add' onChange={() }>Add to the list</Link>
                        <Link to='/edit' >Edit List Item</Link>
                        <Link to='/delete' >Delete List Item</Link>
                        </div>
                        {/* <select className="selectContainer" value={this.state.value} onChange={(theChange) => console.log(theChange) }> */}
                            {/* <option value="" defaultValue></option> */}
                            {/* <option value="Add"></option> */}
                            {/* <option value="Edit"></option> */}
                            {/* <option value="Delete"></option> */}
                        {/* </select> */}

                        <Switch >
                            <Route path='/' default />
                            <Route path='/add'
                                component={() => Create} />
                                {/*component={() => <Create addTwo={this.create} />} /> */}
                            <Route path='/edit'
                                component={Update} />
                                {/* component={() => <Update upTwo={this.update} />} /> */}
                            <Route path='/delete'
                                component={Delete} />
                                {/* component={() => <Delete callTwo={this.delete} />} /> */}
                        </Switch>
                    </div>
                </HashRouter>













                {/* <select className="selectContainer" value={this.state.value} onChange={this.handleChoice}>
                    <option value="" defaultValue>List formatting options</option>
                    <option value="Add">Add to the list</option>
                    <option value="Edit">Edit List Item</option>
                    <option value="Delete">Delete List Item</option>

                </select> */}
                {this.state.returnComponent}
            </div>
        )
    }
}