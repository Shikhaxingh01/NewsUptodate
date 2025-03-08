
import './App.css';

import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { useState } from 'react';

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar';


const App=()=>  {
 const  pageSize=16;
  const apikey="989f658eef694d70816b471063cb552c";
  const [progress, setProgress] = useState(0);
  
 
    return (
      <>
      <div>
        <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
      <Routes>
      <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
      <Route exact path="/business"  element={<News setProgress={setProgress} apikey={apikey}key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
      <Route exact path="/general"element={<News setProgress={setProgress} apikey={apikey} key="general"pageSize={pageSize} country="in" category="general"/>}></Route>
      <Route exact path="/health"element={<News setProgress={setProgress} apikey={apikey} key="health"  pageSize={pageSize} country="in" category="health"/>}></Route>
      <Route exact path="/science"  element={<News setProgress={setProgress} apikey={apikey} key="science"pageSize={pageSize} country="in" category="science"/>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
      <Route exact path="/techonology" element={<News setProgress={setProgress} apikey={apikey}key="techology" pageSize={pageSize} country="in" category="techology"/>}></Route>
      </Routes>
      </Router>
      </div>
      </>
    
    );
  }
  export default App;

