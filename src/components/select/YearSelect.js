import React, { Component } from 'react';


export default class YearSelect extends Component {
    constructor() {
        super()
        this.state = {
            year: ''
        }
        this.sendYear = this.sendYear.bind(this);
    }

    sendYear(newYear) {
        this.props.getYear(newYear)
    }


    handleChoice(event) {
        this.setState({ year: event })
        let currSel = event;
        this.sendYear(currSel)
    }


    render() {
        function createYears() {
            let options = [];
            for (var i = 2018; i > 1959; i--) {
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
                <select className="selectContainer" value={this.state.year} onChange={(elem) => this.handleChoice(elem.target.value)}>
                    <option value="" defaultValue>Year</option>
                    {mapArr}
                </select>
            </div>
        )



    }



}