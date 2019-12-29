// https://cn.redux.js.org/
// https://github.com/reduxjs/redux/tree/master/examples/counter
export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
