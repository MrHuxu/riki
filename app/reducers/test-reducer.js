import {
  RECEIVE_PROJECTS
} from '../actions/test-actions';

export function test(state = {
  entities: []
}, action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        entities: action.data
      });

    default:
      return state;
  }
};