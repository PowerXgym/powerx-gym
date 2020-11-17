import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";
import Workout from './components/Workout/Workout';
import AboutUs from './components/AboutUs/AboutUs';
import Training from './components/Training/Training';
import ChooseUs from './components/ChooseUs/ChooseUs';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/Notfound';
import MembershipForm from './components/MembershipForm/MembershipForm';
import Pricing from './components/Pricing/Pricing';
import Payment from './components/Payment/Payment';
import Classes from './components/Classes/Classes';
import ClassDescription from './components/Classes/ClassDescription';
import HomeHeader from './components/HomeHeader/HomeHeader';

function App() {
  return (
    <div>
      <Router>
        <Switch>

        <Route path="/Membership">
          <MembershipForm/>
        </Route>
         <Route path="/pricing">
          <Pricing/>
        </Route>
        <Route path="/payment">
          <Payment/>
        </Route>
        <Route   path="/home">
          <HomeHeader></HomeHeader>
          <Workout></Workout>
          <AboutUs></AboutUs>
          <Training></Training>
          <ChooseUs></ChooseUs>
          <Footer></Footer>
        </Route>
        <Route exact  path="/">
          <HomeHeader></HomeHeader>
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
        <Route path="*">
          <Notfound></Notfound>
        </Route>
        </Switch>
      </Router>
        </div>
  );
}

export default App;
