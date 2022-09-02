import React, { Component } from 'react';
// class 스스로를 this라 부름
// render -> componentDidMount 
class ClassComponent extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        // class안에 메소드 사용할 경우 항상 binding해주어야 한다
        // 혹은 arror function으로 만들면 된다.
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.timerID = setInterval(()=> this.tick(), 10000);
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');

    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }
    tick() {
        console.log('thic');
        this.setState( {date: new Date()});

    }
    handleClick() {
        alert(this.state.date)
    }
    render() {
        console.log('render');
        return (
            <div>
                <h2 onClick={this.handleClick}>Hello, world!</h2>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default ClassComponent;