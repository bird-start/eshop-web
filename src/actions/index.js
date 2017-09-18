import actionTypes from './action_types';


function showAllItems(){
  // return fetch('/data.json').then((res) => {
  //   return res.json();
  // }).then((json) => {
  //   return Object.assign({}, state, {
  //     items: json.items
  //   });
  // });
  return {
    type: actionTypes.SHOW_ALL_ITEMS
  }
}



export {
  showAllItems
};
