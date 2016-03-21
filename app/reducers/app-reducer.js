import {
  CHANGE_CATEGORY,
  CHANGE_SIDEBAR
} from '../actions/app-actions';

export function app(state = {
  sidebarOpen : false,
  category    : 'hacker-news'
}, action) {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return Object.assign({}, state, {
        sidebarOpen : false,
        category    : action.data
      });

    case CHANGE_SIDEBAR:
      return Object.assign({}, state, {
        sidebarOpen : action.data,
        category    : state.category
      });

    default:
      return state;
  }
};