import React, {useState} from "react";

function Counter(props){
    let count = 0;
    return(
        <div>
            <p>총 {count}번 클릭</p>
            <button onClick={()=> {count++
            console.log(count);
            }}>클릭</button>
        </div>
    );
}
export default Counter;