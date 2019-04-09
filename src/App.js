import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer';
import DogsListContainer2 from './components/allInOne';
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import DogGameContainer from './components/DogGame/DogGameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <main>
      <Route exact path="/" component={DogsListContainer} />
      {/* <Rzoute exact path="/" component={DogsListContainer2} /> */}
      <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
      <Route path="/dog-game/" component={DogGameContainer} />
      </main>
      </div>
    );
  }
}

export default App;
