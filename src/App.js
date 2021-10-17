import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Component/Home';
//http://doc.blog.etherial.fr
class App extends Component {
  render() {
    return (
      <Router>

        <div>
          <Route exact path={'/'} component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
