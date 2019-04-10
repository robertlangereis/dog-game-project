import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import DogGameContainer from './components/DogGame/DogGameContainer'
import DogsListContainer from './components/DogListPage/DogsListContainer'
import HomePageContainer from './components/HomePage/HomePageContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={HomePageContainer}/>
          <Route exact path="/dog-list" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          <Route exact path="/dog-game/" component={DogGameContainer} />
        </main>
      </div>
    );
  }
}

export default App;
