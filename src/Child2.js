import React from 'react';
import { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    console.log(state);

    return(
        <div>
            <hr />
            <h2>This is Second Child Using Counter Reducer</h2>
            <h4>Value of Reducer Counter is: {state}</h4>                 
            <button onClick={() => dispatch('INCREMENT')}>Increament Reducer Counter</button>
            <button onClick={() => dispatch('DECREMENT')}>Decreament Reducer Counter</button>
            <button onClick={() => dispatch('DEFAULT')}>Reset Reducer Counter</button>
        </div>
    )
}

export default Child2;