import assert from 'assert';
import reducer from 'reducers/root';

describe('root reducer', () => {
  describe('#increment', () => {
    it('should return increment count', () => {
      const action = {
        type: 'increment'
      };
      const state = reducer(undefined, action);
      assert(state.counter === 1);
    });
  });

  describe('#decrement', () => {
    it('should return decrement count', () => {
      const action = {
        type: 'decrement'
      };
      const state = reducer(undefined, action);
      assert(state.counter === -1);
    });
  });
});
