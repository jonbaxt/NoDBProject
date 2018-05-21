import React, { Component } from 'react';
import axios from 'axios';



import './App.css';
import Select from './components/select/Select';

import Footer from './components/ComponentBoxes/Footer';

import List from './components/select/List/List.js';
// import IdSelect from './components/select/IdSelect'

class App extends Component {
  constructor() {
    super()
    this.state = {
      games_data: []
    }
    this.handleCreateGame = this.handleCreateGame.bind(this);
    this.handleUpdateGame = this.handleUpdateGame.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
    // this.handleId = this.handleId.bind( this );
  }

  componentDidMount() {
    axios.get('./api/games-data/read')
      .then((response) => {
        this.setState({ games_data: response.data })
        // console.log( response.data )
      })
      .catch((errMess) => console.log(errMess));
  }

  handleCreateGame(game) {
    axios.post('/api/games-data/create', game)
      .then((newArray) => {
        this.setState({ games_data: newArray.data })
      }
      )
      .catch((errMess) => console.log(errMess));
  }

  handleUpdateGame(game) {
    console.log(game);
    axios.put('/api/games-data/update', game)
      .then((newArray) => {
        this.setState({ games_data: newArray.data })
      }
      ).catch((errMess) => console.log(errMess));
  }

  handleDeleteGame(number) {
    axios.delete('/api/games-data/' + number)
      .then((newArray) => {
        console.log(newArray)
        this.setState({ games_data: newArray.data })
      }
      ).catch((errMess) => console.log(errMess));
  }

  // handleId(){
  // let idArray = this.state.games_data.map( (element, index) => {
  //   element
  // })
  // let games = this.state.games_data;
  // console.log(games)
  // let arr = [];
  // for(var key in games_data){
  //   arr.push(games[key].id)
  // }
  // console.log(arr) 
  // console.log(idArray)
  // }

  render() {
    return (
      <div className="App">
        <div className="image-top" >
          <img className='imageresize' src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Sonic_the_Hedgehog_1_Genesis_box_art.jpg/220px-Sonic_the_Hedgehog_1_Genesis_box_art.jpg" alt='' />
          <img src="https://i.ytimg.com/vi/j8YFxB6rYIo/hqdefault.jpg" alt='' />
          <img className='imageresize' src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Sonic_%26_Knuckles_cover.jpg/220px-Sonic_%26_Knuckles_cover.jpg" alt='' />

        </div>

        <header className="App-header">
          <h1 className="App-title">PARENTAL GAMING HELPS</h1>
          <p>A website for parents to give feedback on what they think a game is appropriate for their kids. Not meaning it's a bad game but do you want your kid playing it.</p>
          <Select
            add={this.handleCreateGame}
            up={this.handleUpdateGame}
            call={this.handleDeleteGame} />

            {/* <IdSelect /> */}
          <div/>
        </header>

        <section className='displayarea'>

          <div className='list-container'>
            <List cr={this.state.games_data} />
          </div>
        </section>
        <Footer />

        {/* {this.handleId()}  */}
      </div>
    );
  }
}

export default App;
