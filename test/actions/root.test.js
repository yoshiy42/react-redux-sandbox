import * as actions from 'actions/root';
import assert from 'assert';

describe('root actions', () => {
  describe('increment action', () => {
    it('should dispatch increment type', () => {
      const expectedAction = {
        type: 'increment'
      };
      assert.deepEqual(actions.increment(), expectedAction);
    });
  });

  describe('increment action', () => {
    it('should dispatch increment type', () => {
      const expectedAction = {
        type: 'increment'
      };
      assert.deepEqual(actions.increment(), expectedAction);
    });
  });
});
