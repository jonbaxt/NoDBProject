import React, { Component } from 'react';

import axios from 'axios';
import FromWebSecond from './FromWebSecond'
// import { Z_ASCII } from 'zlib';
// import xmlToJson from './xmlToJson';

export default class FromWeb extends Component{
    constructor(){
        super()

        this.state = {
            data: ''
        }
        // this.XMLtoJSON = this.XMLtoJSON.bind( this );
    }



componentDidMount(){
    // axios.get(`http://thegamesdb.net/api/GetGamesList.php?name=sonic`)
    // axios.get(`http://thegamesdb.net/api/GetGamesList.php?name=digdug`)
    // axios.get('/api/gamesDb/digdug')
    axios.get('/api/people')
    .then( (elements) => {
        // this.setState({ data: elements.data.results})
        // console.log(elements.data.results)
        let saveArray = elements.data.results
        let newArray = saveArray.map( element => element.name)
        let boom = '';
        
        for(var key in newArray){
            boom += ` |${newArray[key]}| `
        }

        // let saveArray = this.state.data.map( (element )=> { element.name})
        // console.log(newArray)
        // console.log(boom)
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