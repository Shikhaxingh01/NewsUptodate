
import './App.css';

import React from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { useState } from 'react';

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
 import LoadingBar from 'react-top-loading-bar';


const App=()=>  {
 const  pageSize=16;
  const apikey="4ed393259b2f4f338916fe05081ae7d7";
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
      <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
      <Route exact path="/business"  element={<News setProgress={setProgress} apikey={apikey}key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
      <Route exact path="/general"element={<News setProgress={setProgress} apikey={apikey} key="general"pageSize={pageSize} country="us" category="general"/>}></Route>
      <Route exact path="/health"element={<News setProgress={setProgress} apikey={apikey} key="health"  pageSize={pageSize} country="us" category="health"/>}></Route>
      <Route exact path="/science"  element={<News setProgress={setProgress} apikey={apikey} key="science"pageSize={pageSize} country="us" category="science"/>}></Route>
      <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
      <Route exact path="/techonology" element={<News setProgress={setProgress} apikey={apikey}key="techology" pageSize={pageSize} country="us" category="techology"/>}></Route>
      </Routes>
      </Router>
      </div>
      </>
    
    );
  }
  export default App;

