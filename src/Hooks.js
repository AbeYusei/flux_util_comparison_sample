import React, { useState, useReducer } from 'react';

export default function(props) {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'lightskyblue',
      }}>
      <div style={{ width: 120 }}>
        <h3>
          Hooks
          <br />
          (not uses global state)
        </h3>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      </div>
    </div>
  );
}
