import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Background from './Background.png';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="App-header">
        <img src={Background} alt='website logo' />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>
          Manish Gupta
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </h2>
        <p>Just a name, soon will be a brand!</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <br /><br /><br /><br /><br /><br /><br /><br />
        <a href="https://www.twitter.com/i_am_manish09"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
        {/* <i class="fa fa-facebook-square" aria-hidden="true"></i> */}
        <hr />
        <div className="copyright">
          <p1>© 2020, Manish Gupta</p1>
        </div>
      </header>
    </div>
  );
}

export default App;
