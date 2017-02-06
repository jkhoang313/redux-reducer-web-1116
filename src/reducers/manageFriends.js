export function manageFriends(state, action){
  if (action.type === "ADD_FRIEND") {
    return Object.assign({}, state, {friends: state.friends.concat(action.payload)})
  } else if (action.type === "REMOVE_FRIEND") {
    var friendSelected = state.friends.findIndex( friend => friend.id === action.payload )
    var newFriendsArray = state.friends.slice(0, friendSelected).concat(state.friends.slice(friendSelected + 1))
    return Object.assign({}, state, {friends: newFriendsArray})
  } else {
    return state
  }
}
