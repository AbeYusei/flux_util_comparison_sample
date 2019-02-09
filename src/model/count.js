export default {
  state: 0,
  reducers: {
    increment: (state, payload) => state + payload,
    decrement: (state, payload) => state - payload,
  },
};
