import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path= "/"  element={<News country="in" category="general" />} />
          <Route path= "/home"  element={<News country="in" category="general" />} />
          <Route path= "/business"  element={<News country="in" category="business" />} />
          <Route path= "/science"  element={<News country="in" category="science" />} />
          <Route path= "/sports"  element={<News country="in" category="Sports" />} />
          <Route path= "/entertainment"  element={<News country="in" category="entertainment" />} />
          <Route path= "/technology"  element={<News country="in" category="technology" />} />
          <Route path= "/health"  element={<News country="in" category="health" />} />
          </Routes>
          </Router>
       </div>
    )
  }
}


