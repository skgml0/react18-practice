import React from 'react';
function ItemList({items}) {
    let result =[];
    for (let i=0; i<items; i++){
        for (let j=0; j<items; j++){
            for (let k=0; k<items; k++)
            {
                for(let z=0; z<items; z++)
                {result.push(i);}
            }}
        }

    console.log(result)
    return (
        <div className="container">
            {
                result.map((v,i)=> (
                      <div key={i} className="box" />
                   ))
            }
        </div>
    );
};

export default ItemList;