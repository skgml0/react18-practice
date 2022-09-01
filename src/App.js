import './App.css';
import React, { useState,useEffect } from 'react';
// slice(시작요소, 끝낼 요소 -1) 배열로 반환된다. 
// {} 로 
// Fetch api -> 네트워크 통신도구 
// 상황별 핸들링 -> 1.데이터/2. 에러/3. 로딩  
function App() {
  const [data,setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch('https://api.publicapis.org/entries').then(function (response)
    {return response.json();
    }).then(function (myJson){
      setData(myJson);
      console.log(data)
    }).catch((error)=> {
      setError(error);
      alert(error);
    })
  },[]);

  if (error !== null)
  {
    return <p>{error}</p>;
  }

  if(data ===null) {
    return <p style={{color:"red", fontSize:30}}>Loading...</p>
  }
  return (
    <>
      <p>cat</p>
      {/* JSON.stringify : 보기 좋은 형태로 바꿔주는것  */}
      {/* <p>{JSON.stringify(data,null,2)}</p> */}

      {data.entries.map((value,index)=> (
        <div key={index}>
        <p>API : {value.API}</p>
        <p>DESCRIPTION : {value.Description}</p>
        <br />
        </div>
      ))}
    </>
  );
}

export default App;
