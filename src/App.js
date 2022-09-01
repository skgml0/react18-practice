import './App.css';
import React, { useState,useEffect } from 'react';
// Key와 리렌더링 알아보기
// key -> value 를 특정
// ** key 없으면 버튼 그대로, 안에 값 다시 다 렌더링, 포커스만 그 자리 그대로  
// ** key 있으면 컴포넌트 자체 위치만 바꿈 
// Array.prototype.filter() 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
// Array.prototype.find() 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환, 그런 요소가 없다면 undefined반환

// (v,index)=> key={index}로 주었을 경우 한 값에 특정할 수 있는 index가 아니다. 
// 항목들이 재배열 안되면 index 써도 o 
// 그러나 재배열 된다면, 비효율적인 동작을 한다 
// key는 중복없고, 바뀌지않는 값을 줘야 제대로 재사용 가능!
const todos =[[
 {id:1, value: "Wash dishes1"},
 {id:2, value: "Wash dishes2"},
 {id:3, value: "Wash dishes3"},
 {id:5, value: "Wash dishes5"},
 {id:4, value: "Wash dishes4"},
],[
  {id:1, value: "Wash dishes1"},
  {id:2, value: "Wash dishes2"},
  {id:5, value: "Wash dishes5"},
  {id:3, value: "Wash dishes3"},
  {id:4, value: "Wash dishes4"},
 ],[
   {id:3, value: "Wash dishes3"},
  {id:1, value: "Wash dishes1"},
  {id:2, value: "Wash dishes2"},
  {id:4, value: "Wash dishes4"},
  {id:5, value: "Wash dishes5"},
 ]
];
function App() {

   const [items, setItems]= useState(todos[0]);

   useEffect(()=>{
    const interval = setInterval(()=> {
      const random = Math.floor(Math.random() *3);
      setItems(todos[random]);
    },1000)

    return () => {
      clearInterval(interval);
    }
   },[])

   const handleDoneClick = (todo) => {
    console.dir(todo)
    // items에 들어있는 todos를 하나씩 꺼냈을때 선택한 todo와 같지 않은 것들만 새 배열로 반환해서 저장
    setItems((items) => items.filter((item)=> item != todo));
   };
   
   const handleRestoreClick = () => {
    setItems((items)=> [
      ...items,
      // 기존에 들어있는 items 중에 특정 item을 포함하고 있지않은 값을 반환해라 
      todos.find((item)=> !items.includes(item))
    ]);
   };
  return (
    <>
      {items.map((todo)=> (
        <div >
          <span>{todo.value}</span>
          <button onClick={()=> handleDoneClick(todo)}>Done</button>
        </div>
      ))}
      <button onClick={handleRestoreClick}>Restore</button>
    </>
  );
}

export default App;
