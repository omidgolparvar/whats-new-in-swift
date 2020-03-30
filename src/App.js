import React from 'react';

import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import VersionChanger from './Components/VersionChanger.js'
import MainContent from './Components/MainContent.js'
import { Provider } from './Context/Context'
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      versions: {
        from: 5.2,
        to: 5.2,
      }
    }

    this.setSourceVersion = this.setSourceVersion.bind(this)
    this.setDestinationVersion = this.setDestinationVersion.bind(this)

  }

  setSourceVersion(version) {
    console.log(`setSourceVersion: ${version}`)
    this.setState(currentState => ({ 
      ...currentState,
      versions: { ...currentState.versions, from: version }
    }))
  }

  setDestinationVersion(version) {
    console.log(`setDestinationVersion: ${version}`)
    this.setState(currentState => ({ 
      ...currentState,
      versions: { ...currentState.versions, to: version }
    }))
  }

  render() {
    return (
      <Provider value={{
        versions: this.state.versions,
        methods: {
          setSourceVersion: this.setSourceVersion,
          setDestinationVersion: this.setDestinationVersion
        }
      }}>
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
