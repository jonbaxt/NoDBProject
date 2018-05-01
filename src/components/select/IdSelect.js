import React, { Component } from 'react';


export default class IdSelect extends Component {
    constructor() {
        super()
        this.state = {
            id: []
        }
        this.sendId = this.sendId.bind(this);
    }

    sendId(newId) {
        this.props.getYear(newId)
    }


    handleChoice(event) {
        this.setState({ id: event })
        let currSel = event;
        this.sendId(currSel)
    }


    render() {
        function createYears() {
            let options = [];
            for (var i = 1950; i < 2019; i++) {
                options.push(<option key={i} value={i}>{i}</option>)
            }
            return options;
        }
        let optionArr = createYears()
        let mapArr = optionArr.map( (element) => {
            return element
        })

        return (
            <div>
                <select className="selectContainer" value={this.state.id} onChange={(elem) => this.handleChoice(elem.target.value)}>
                    <option value="" defaultValue>Id</option>
                    {mapArr}
                </select>
            </div>
        )



    }



}