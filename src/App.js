import './App.css';
import React, { useState,useEffect } from 'react';
import ControlledComponent from './components/Form/ControlledComponent';
import UncontrolledComponent from './components/Form/UncontrolledComponent';
function App() {
 
  return (
    <>
    <UncontrolledComponent/>
    <ControlledComponent/>
    </>
  );
}

export default App;
