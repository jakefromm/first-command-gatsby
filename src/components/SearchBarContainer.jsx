import * as React from "react"

class SearchBarContainer extends React.Component {
    render() {
      return <div className="SearchBarContainer"></div>;
    }
  
    componentDidMount() {
      const answersScriptPromise = new Promise((resolve, reject) => {
        const answersScript = document.createElement('script');
        document.body.appendChild(answersScript);
        answersScript.onload = resolve;
        answersScript.onerror = reject;
        answersScript.async = true;
        answersScript.src = 'https://assets.sitescdn.net/answers/v1.6/answers.min.js';
      });
  
      answersScriptPromise.then(() => {
        ANSWERS.init({
          apiKey: '7a8bbf9f6fb3b05b29db26ca74e96ffe',
          experienceKey: 'first-command-answers',
          onReady: function() {
            ANSWERS.addComponent('SearchBar', {
              container: '.SearchBarContainer',
              redirectUrl: 'https://answers.firstcommand.com',
              placeholderText: 'Search...'
            });
          }
        });
      });
    }
  }