import React,{useReducer} from 'react';
// 그냥 state 관리면 동작할때마다 set해줘야함 
// 사용자가 많이 써야하는 것들 type으로 관리 가능
function Reducer() {
    const initialState = {count: 0, name: 'jimmy'};

    function reducer(state, action){
        switch(action.type){
            case 'reset':
                return initialState;
            case 'increment':
                return { count: state.count+1, name: 'timmy'};
            case 'decrement':
                return {count: state.count -1, name: 'amy'};
            default:
                throw new Error();
        }
    }

    const [state,dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count : {state.count}
            <br />
            Name : {state.name}
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <button onClick={() =>  dispatch({type:'decrement'})}>-</button>
            <button onClick={() => dispatch({type:'increment'})}>+</button>
        </div>
    );
}

export default Reducer;