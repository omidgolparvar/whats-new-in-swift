import React from 'react';

import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import VersionChanger from './Components/VersionChanger.js'
import MainContent from './Components/MainContent.js'

import './App.css';

import { Provider } from './Context'

class App extends React.Component {
  state = {
    usingSwiftVersions: {
      from: 1.1,
      to: 1.2,
    },

    methods: {
      setSourceVersion: (version) => {
        console.log(`Source Changed: ${version}`)
        const usingSwiftVersions = {...this.state.usingSwiftVersions, from: version}
        this.setState({ usingSwiftVersions: usingSwiftVersions })
      },
    
      setDestinationVersion: (version) => {
        console.log(`Destination Changed: ${version}`)
        const usingSwiftVersions = {...this.state.usingSwiftVersions, to: version}
        this.setState({ usingSwiftVersions: usingSwiftVersions })
      }
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className="App">
          <Header />
          <div className='uk-container uk-container-small uk-section'>
            <VersionChanger />
            <hr className='uk-divider-icon'/>
            <MainContent />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }

}

export default App;
