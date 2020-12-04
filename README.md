
# Install

Run: npm install react-linkedin-insight-tag
  

# Usage
  

`set_linkedin_insight=(partnerId,conversionId=0, subDomain='dc')`
  

You just pass your partnerId and if you want, pass conversionId and subDomain.


```javascript
import logo from './logo.svg';
import './App.css';
import linkedinInsight from 'react-linkedin-insight-tag';

function App() {
  linkedinInsight.init(34343,'dc')
  const linkedincomponent=linkedinInsight.track();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        	<linkedincomponent/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
}```