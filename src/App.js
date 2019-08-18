import React from 'react';
import PageWrapper from './components/PageWrapper'
import Home from './components/Pages/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './components/Pages/About'


function App() {
  return (
    <Router>
      <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />

        <Route
          path="/about"
          component={About}
        />

      </PageWrapper>
    </Router>
  );
}

export default App;
