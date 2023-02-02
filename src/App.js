import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import GoTop from './components/GoTop';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App =()=> {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState('light');

 const toggle = () => {
    if (mode === 'light') {
     setMode('dark');
      document.body.style.backgroundColor = "rgb(0 4 20)";
    } else {
     setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }
    return (
      <>
        <Router>
          <Navbar mode={mode} toggle={toggle} />
          <LoadingBar
            color='#f11946'progress={progress}
          />
          <Routes>
            <Route exact path='/NewsMonkey' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/Business' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="business" pageSize={pageSize} country='in' category='business' />}></Route>
            <Route exact path='/Entertainment' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />}></Route>
            <Route exact path='/General' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' />}></Route>
            <Route exact path='/Health' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="health" pageSize={pageSize} country='in' category='health' />}></Route>
            <Route exact path='/Science' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="science" pageSize={pageSize} country='in' category='science' />}></Route>
            <Route exact path='/Sports' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="sports" pageSize={pageSize} country='in' category='sports' />}></Route>
            <Route exact path='/Technology' element={<News mode={mode} toggle={toggle} setProgress={setProgress} key="technology" pageSize={pageSize} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
        <GoTop/>
      </>
    )
}
export default App;

