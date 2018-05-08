import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Helmet
         title="[title] Netlify Prerendering Test"
         meta={[
           {name: "description", content: "[description] Netlify Prerendering Test"},
           {name: "og:title", content: "[og:title] Netlify Prerendering Test" },
           {name: "og:type", content: "website" },
           {name: "og:url", content: "https://netlify-prerendering-test.com" },
           {name: "og:image", content: "/ogp_image.png" },
           {name: "og:description", content: "[og:description] Netlify Prerendering Test"},
         ]}
        />
      </div>
    );
  }
}

export default App;
