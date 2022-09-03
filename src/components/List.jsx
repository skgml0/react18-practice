import React from 'react';

function List() {
    const todos = [
        {id:1, text:"Drink water"},
        {id:2, text:"Wash Car"},
        {id:3, text:"Listen Lecture"},
        {id:4, text:"Go to Bed"},
    ];
    const Item = (props)=> {
        return <li>{props.text}</li>
    }

    const todoList = todos.map((todo)=><Item key={todo.id} {...todo} />)
    return (
        <div>
            {todoList}
        </div>
    );
}

export default List;