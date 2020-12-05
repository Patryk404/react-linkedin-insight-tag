
# Install

Run: npm install react-linkedin-insight-tag
  

# Usage
  
`.init(partnerId: any, subDomain: any)`
`.track(conversionId: any, partnerId: any, subDomain: any)` 
  
You just pass your partnerId and if you want, pass conversionId and subDomain.

## Example Use:

```javascript
import logo from './logo.svg';
import './App.css';
import linkedinInsight from 'react-linkedin-insight-tag';

function App() {
  linkedinInsight.init(34343,'dc')
  const url=linkedinInsight.track(2000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <img src={url} width='1' height='1' alt=''/>
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
```

## Running Tests

`npm test`
