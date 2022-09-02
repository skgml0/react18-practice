import React from 'react';
// 호출 순서 (클릭한 애의 부모에서 캡쳐링 > 자식 > 다시 위로 버블링)
// handleClickCapture
// handleClickCapture2
// handleButtonClick
// handleClickBubble
function Event() {
    const handleButtonClick = (e) => {
        console.dir(e);
        console.log('handleButtonClick');
    }
    
    const handleMouseLeave = (e) => {
        console.log(e);
    }
    const handleClickCapture = () => {
        console.log('handleClickCapture');
    }
    const handleClickCapture2 = () => {
        console.log('handleClickCapture2');
    }
    const handleClickBubble= ()=> {
        console.log('handleClickBubble');
    }

    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
            <button onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}>버튼</button>
            </div>
        </div>
    );
}

export default Event;