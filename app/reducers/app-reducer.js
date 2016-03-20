import {
  CHANGE_CATEGORY
} from '../actions/app-actions';

export function app(state = {
  category: 'hacker-news'
}, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return Object.assign({}, state, {
        category: action.data
      });

    default:
      return state;
  }
};