import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector/>
          <ColourContext.Provider value="green">
          <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;
