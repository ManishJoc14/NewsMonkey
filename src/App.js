import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  state={
    progress:0,
    mode : 'light'
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

   toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({mode:"dark"});
      document.body.style.backgroundColor = "rgb(0 4 20)";
    } else {
      this.setState({mode:"light"});
      document.body.style.backgroundColor = "white";
    }
  }

  render() {
    return (
      <>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/NewsMonkey' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route exact path='/Business' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country='in' category='business' />}></Route>
            <Route exact path='/Entertainment' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' />}></Route>
            <Route exact path='/General' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category='general' />}></Route>
            <Route exact path='/Health' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country='in' category='health' />}></Route>
            <Route exact path='/Science' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country='in' category='science' />}></Route>
            <Route exact path='/Sports' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/Technology' element={<News  mode={this.state.mode} toggleMode={this.toggleMode} setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </>
    )
  }
}

