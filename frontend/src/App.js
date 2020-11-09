
import './App.css';
import './Styles/Navigation.css';

import React from 'react';
import Navigation from './components/Navigation'
import NoteList from './components/NotesList'
import CreateNote from './components/CreateNote'
import User from './components/CreateUser'
import{BrowserRouter as Router ,Route} from 'react-router-dom'

function App() {
  return (
  <Router>
   
      <Route path='/' exact component={Navigation}/>
      <Route path='/Note/:id' component={NoteList}/>
      <Route path='/User/:id'  component={User}/>
      <Route path='/edit/:id' component={CreateNote}/>
      
  </Router>
  );
}

export default App;
