import React, { useState } from 'react'
import './Cm.css'
const Counter = () => {
    const [countevar,setCount] = useState(0);
    const incre = () =>{
        setCount(countevar+1)
    }
    const decre = () =>{
        setCount(countevar-1)
    }
    return(
        <div className='count1'>
            <h1>Counter : {countevar}</h1>
            <button onClick={incre}>Increament</button>
            <button onClick={decre}>decreament</button>
        </div>

    );
}
export default Counter;
