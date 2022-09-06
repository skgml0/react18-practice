import React from 'react';
import Dialog from './Dialog';

function ThankyouDialog() {
    return (
        <div>
            <Dialog title={<h1 style={{color: 'purple'}}>Thanks</h1>} description="It is honor to meet you" button={<button style={{backgroundColor:"yellow", fontSize:15}}>king</button>} />
        </div>
    );
}

export default ThankyouDialog;