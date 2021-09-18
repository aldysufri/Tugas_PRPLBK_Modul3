import React from 'react';
import './App.css';
import Home from "./Components/Home";


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <div>           
          <h1>ASTORE DISTRO</h1>
        <div>         
        <Home />
        </div>
        </div>
      </div>
    )
  }
}

export default App;