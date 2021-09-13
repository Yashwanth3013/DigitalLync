import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import CarrerSupport from './pages/CarrerSupport';
import FullStackMaster from './pages/FullStackMaster';
import CloudStackMaster from './pages/CloudStackMaster';
import MarketingStackMaster from './pages/MarketingStackMaster';
import JobReadyProgram from './pages/JobReadyProgram';
import OnlinePayment from './pages/OnlinePayment';
import AWS from './pages/AWS';
import Python from './pages/Python';
import Devops from './pages/Devops';
import Angular from './pages/Angular';
import React from './pages/Reactt';
import ViewAllCourses from './pages/ViewAllCourses';
import DataScience from './pages/DataScience';
import DataAnalysis from './pages/DataAnalysis';
import ViewFullStack from './pages/ViewFullStack';
import Privacy from './pages/Privacy';
import Home from './pages/Home'
import Programs from './pages/Programs';
import Training from './components/home/Training';
import Review from './components/Programs/CloudStack/ReadMore/Review';
import Read from './components/Programs/CloudStack/ReadMore/Read';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/CarrerSupport">
          <CarrerSupport/>
        </Route>
        <Route path="/FullStack">
          <FullStackMaster/>
        </Route>
        <Route path="/CloudStack">
          <CloudStackMaster/>
        </Route>
        <Route path="/MarketingStack">
          <MarketingStackMaster/>
        </Route>
        <Route path="/JobReady">
          <JobReadyProgram/>
        </Route>
        <Route path="/OnlinePay">
          <OnlinePayment/>
        </Route>
        <Route path="/AWS">
          <AWS/>
        </Route>
        <Route path="/Python">
          <Python/>
        </Route>
        <Route path="/Devops">
          <Devops/>
        </Route>
        <Route path="/Angular">
          <Angular/>
        </Route>
        <Route path="/React">
          <React/>
        </Route>
        <Route path="/Fullstack">
          <ViewFullStack/>
        </Route>
        <Route path="/AllCourses">
          <ViewAllCourses/>
        </Route>
        <Route path="/DataScience">
          <DataScience/>
        </Route>
        <Route path="/DataAnalysis">
          <DataAnalysis/>
        </Route>
        <Route path="/Privacy">
          <Privacy/>
        </Route>
        <Route path="/Program">
          <Programs/>
        </Route>
        <Route path="/Review">
          <Review/>
        </Route>
        <Route path="/Read">
          <Read/>
        </Route>
      </Switch>

 

    </div>
  );
}

export default App;
