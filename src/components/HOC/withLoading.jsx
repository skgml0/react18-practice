import React, { useState, useEffect } from 'react';
// 컴포넌트 입력받아 컴포넌트 반환한다 = HOC = 고차컴포넌트는 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수
// HOC는 변경 대신에 입력 컴포넌트를 컨테이너 구성요소로 감싸서 조합을 사용해야 합니다. 
// ref는 전달되지 않는다. (고차 컴포넌트는 모든 props를 래핑된 컴포넌트에 전달하는 것이 원칙이지만, refs에서는
// 동작하지 않습니다. 이는 리액트에서 ref가 실제 prop이 아닌 key처럼 특별하게 취급되기 때문입니다. )
// 해결방법은 React.forwardRef API를 사용하는 것입니다 

export default function withLoading(Component) {
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true);
        useEffect(()=> {
            const timer = setTimeout(()=> setLoading(false),1000);
            return () => clearTimeout(timer);
        },[])
        return loading ? <p>Loading...</p> : <Component {...props}/>;
    }
   return WithLoadingComponent;
}