import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';

class App extends React.Component {
  state = {language: 'english'}

  onLanguageChange = language => {
    this.setState({language});
  }

  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i className='flag us' onClick={() =>this.onLanguageChange('english')}/>
          <i className='flag nl' onClick={() =>this.onLanguageChange('dutch')}/>
        </div>
        <ColourContext.Provider value="green">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
        </ColourContext.Provider>
      </div>
    )
  }
}

export default App;