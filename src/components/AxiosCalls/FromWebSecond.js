import React, { Component } from 'react';

import axios from 'axios';
// import { Z_ASCII } from 'zlib';
// import xmlToJson from './xmlToJson';

export default class FromWeb extends Component{
    constructor(){
        super()

        this.state = {
            data: []
        }
        // this.XMLtoJSON = this.XMLtoJSON.bind( this );
    }



componentDidMount(){
    axios.get('/api/pokemon')
    .then( (elements) => {
        // this.setState({ data: elements.data.results})
        // console.log(elements.data.results)
        console.log(elements.data.sprites.back_female)

        // this.setState({ data.push( elements.data.sprites) })
        
    }).catch( (err) => console.log(err))
}
  render(){
    // let im = this.state.data
    // let images = im.map( (element ) => {
    //     <img src={element} alt='' />
    // } )

    return (
        <div>
            {/* {images} */}
            </div>
    )
  }



}