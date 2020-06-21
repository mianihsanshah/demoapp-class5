import React, { useContext } from 'react';
import CounterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(CounterContext);
    console.log(counterValue);
    return(
        <div>
            <h2>This is First Child Component Using React's Context API</h2>
            <h4>Value of Context Counter is: {counterValue[0]}</h4>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increament Context Counter</button>
            <button onClick={() => {counterValue[1](--counterValue[0])}}>Decreament Context Counter</button>
        </div>
    )
}

export default Child;