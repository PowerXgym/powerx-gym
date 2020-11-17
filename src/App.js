import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Workout from './components/Workout/Workout';
import AboutUs from './components/AboutUs/AboutUs';
import Training from './components/Training/Training';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';
import Classes from './components/Classes/Classes';
import ClassDescription from './components/Classes/ClassDescription';

function App() {
  return (
    <div>
      <Router>
        <Switch>
       <Route exact path="/">
          <Navbar></Navbar>
          <Workout></Workout>
          <AboutUs></AboutUs>
          <Training></Training>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
        </Route>

        <Route exact path='/home'>
        <Navbar></Navbar>
          <Workout></Workout>
          <AboutUs></AboutUs>
          <Training></Training>
          <ChooseUs></ChooseUs>
          <Footer></Footer>


        </Route>

        <Route exact path="/ourClasses">
          <Classes></Classes>
        </Route>

        <Route exact path="/class/:className">
          <ClassDescription></ClassDescription>
        </Route>

        <Route exact path="*">
          <Notfound></Notfound>
        </Route>

       
        </Switch>
      </Router>
        </div>
  );
}

export default App;
