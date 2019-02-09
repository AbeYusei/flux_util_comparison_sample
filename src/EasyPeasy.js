import React from 'react';
import { StoreProvider, createStore, useStore, useActions } from 'easy-peasy';

const store = createStore({
  count: {
    value: 0,
    increment: (state, payload) => {
      state.value = state.value + payload;
    },
    decrement: (state, payload) => {
      state.value = state.value - payload;
    },
  },
});

export default () => (
  // 👇 wrap your app to expose the store
  <StoreProvider store={store}>
    <Counter />
  </StoreProvider>
);

function Counter() {
  // 👇  use hooks to get state or actions
  const countValue = useStore(state => state.count.value);
  const increment = useActions(actions => actions.count.increment);
  const decrement = useActions(actions => actions.count.decrement);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        background: 'lemonchiffon',
      }}>
      <div style={{ width: 120 }}>
        <h3>EasyPeasy</h3>
        <h1>{countValue}</h1>
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => decrement(1)}>-1</button>
      </div>
    </div>
  );
}
