// import React and our routing dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingUp from './singup';

// import our shared layout component
import Layout from '../components/Layout';

// import our routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import Note from './note';

// define our routes
const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/mynotes" component={MyNotes} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={Note} />
        <Route path="/signup" component={SignUp} />
      </Layout>
    </Router>
  );
};

export default Pages;
