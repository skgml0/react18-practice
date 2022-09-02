import './App.css';
import React, { useState,useEffect } from 'react';
import ClassComponent from './components/ClassComponent';
// slice(시작요소, 끝낼 요소 -1) 배열로 반환된다. 
// {} 로 
// Fetch api -> 네트워크 통신도구 
// 상황별 핸들링 -> 1.데이터/2. 에러/3. 로딩  
function App() {
 
  return (
    <>
    <ClassComponent/>
    </>
  );
}

export default App;
