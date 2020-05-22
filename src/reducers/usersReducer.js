// const usersReducer = (state = { users: [], loading: false }, action) => {
//     switch (action.type) {
//         case "LOADING_USERS":
//             return {
//                 ...state,
//                 users: [...state.users],
//                 loading: true
//             }
//         case "GET_USERS":
//             return {
//                 ...state,
//                 users: action.users

//             }
//         case "ADD_USER":
//             console.log("The state ", state)
//             console.log("actions ", action.user)
//             return {
//                 ...state,
//                 user: [...state.users, action.user]
//             }

//         default:
//             return state
//     }
// }
const initialState = {
    currentUser: {},
  };

const usersReducer = function(currentState = initialState, action) {
    let newState = { ...currentState };
  
    switch (action.type) {
        case "LOGIN":
            debugger
        console.log("in reducer: ", action.payload);
        newState.currentUser = action.payload.user
          ? action.payload.user
          : action.payload;
        break;
      case "SIGNUP":
        newState.currentUser = action.payload;
        break;
      case "LOGOUT":
        // console.log("out");
        localStorage.clear();
        newState.currentUser = {};
        break;
        default:
            return newState
    }
  };
  

export default usersReducer