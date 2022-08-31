import './App.css';
import React from 'react';
// Error 발생시 fallback 실행 (보여줄 문구 또는 컴포넌트)
// 에러 발생시 처리해주는 ErrorBoundary는 클래스형 컴포넌트로 고정, 함수형 컴포넌트로 대체할 수 없다.
// 해당 컴포넌트 없을 시 JS문제로 인해 발생하는 에러는 전체 코드에 영향을 줌- 이용 x 
function App() {
   class ErrorBoundary extends React.Component{
    state = {error: null};
    static getDerivedStateFromError(error){
      return {error}
    }
    render() {
      const {error} = this.state;
      if (error) {
        return this.props.fallback;
      }
      return this.props.children;
    }
   }
   const Child = () => {
    throw new Error("Something Wrong...");
   };
   
  return (
    <>
      <p>App</p>
      <ErrorBoundary fallback={<p>There is some Error...</p>}>
        <Child />
      </ErrorBoundary>
    </>
  );
}

export default App;
