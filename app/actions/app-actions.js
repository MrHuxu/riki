export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';
export function changeCategory(category) {
  return {
    type : CHANGE_CATEGORY,
    data : category
  };
};

export const CHANGE_SIDEBAR = 'CHANGE_SIDEBAR';
export function changeSidebar(isOpen) {
  return {
    type : CHANGE_SIDEBAR,
    data : isOpen
  };
};