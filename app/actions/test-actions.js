export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export function receiveProjects(entities) {
  return {
    type : RECEIVE_PROJECTS,
    data : entities
  }
}

const REQUEST_URL = 'http://blog.xhu.me/project/repos';
export function fetchProjects() {
  return function (dispatch) {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then((responseData) => {
        dispatch(receiveProjects(responseData.entities));
      })
      .done();
  };
};