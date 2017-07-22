import { handleActions } from 'redux-actions';

const initialState = {
  counter: 0
};

const Root = handleActions({
  increment: state => Object.assign({}, state, {
    counter: state.counter + 1
  }),
  decrement: state => Object.assign({}, state, {
    counter: state.counter - 1
  })
}, initialState);

export default Root;
