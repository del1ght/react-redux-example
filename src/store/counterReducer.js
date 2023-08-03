const initialState = {
  counter: 0,
};

const INCREASE_COUNTER = 'INCREASE_COUNTER';
const DECREASE_COUNTER = 'DECREASE_COUNTER';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + action.payload };
    case DECREASE_COUNTER:
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const increaseCounterAction = (payload) => ({
  type: INCREASE_COUNTER,
  payload,
});

export const decreaseCounterAction = (payload) => ({
  type: DECREASE_COUNTER,
  payload,
});
