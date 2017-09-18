import actionTypes from '../actions/action_types';
let items = [{
  id: 1,
  name: 'nike T-shirt',
  price: 100
}, {
  id: 2,
  name: 'nike T-shirt',
  price: 100
}, {
  id: 3,
  name: 'nike T-shirt',
  price: 100
}];


export default function showAllItems(state = [], action) {
  switch (action.type) {
    case actionTypes.SHOW_ALL_ITEMS:
      return Object.assign({}, state, {
        items
      });
      break;
    default:
      return state;
      break;
  }
}
