import React, { Component } from 'react';

import axios from 'axios';
import FromWebSecond from './FromWebSecond'

export default class FromWeb extends Component{
    constructor(){
        super()
        this.state = {
            data: ''
        }
    }



componentDidMount(){
        const userInput = 'people/';
    axios.get('/api/startWars/people/' + userInput)
    .then( (elements) => {
        let saveArray = elements.data.results
        // console.log(saveArray)
        let newArray = saveArray.map( element => element.name)
        let boom = '';
        
        for(var key in newArray){
            boom += ` |${newArray[key]}| `
        }
        this.setState({ data: boom})
        

    }).catch( (err) => console.log(err))
}
  render(){


    return (
        <div className='footerBox'>
            Parent Contributors: {this.state.data}
            
            <FromWebSecond />
            </div>
    )
  }



}