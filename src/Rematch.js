import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import { increment } from './model/count';

function Rematch(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'palegreen',
      }}>
      <div style={{ width: 120 }}>
        <h3>Rematch</h3>
        <h1>{props.count}</h1>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </div>
    </div>
  );
}

const mapState = state => ({
  count: state.count,
});

const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  decrement: () => dispatch.count.decrement(1),
});

export default connect(
  mapState,
  mapDispatch
)(Rematch);
