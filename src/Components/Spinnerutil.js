import React, { Component } from 'react';
import loading from '../loads.gif';

 const Spinnerutil=()=>  {
  
    return (
      <div className="text-center">
        <img className='my-3' src={loading} alt='picture loading'/>
        
      </div>
    );
  }


export default Spinnerutil;
