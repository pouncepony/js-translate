import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColourContext from '../context/ColourContext';

class Button extends React.Component {

  render() {
    const text = this.context === 'english' ? 'Submit' : "Voorleggen";
    return (
      <ColourContext.Consumer>
        {(colour) =>
          <button className={`ui button ${colour}`}>
            <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Submit' : "Voorleggen"}
            </LanguageContext.Consumer>
          </button>
        }
      </ColourContext.Consumer>
    );
  }
}

export default Button;
