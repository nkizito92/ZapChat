
export const fetchlogin = user => {
  return function(dispatch) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
          dispatch({
          type: "LOGIN",
          payload: result
        });
      });
  };
};
export const putUserIntoReduxState = user => {
  return {
    type: "LOGIN",
    payload: user
  };
};
export const logout = () => {
  // console.log("logout action");
  return { type: "LOGOUT" };
};

export const signup = user => {
  return function(dispatch) {
    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user
      })
    })
      .then(res => res.json())
      .then(result => {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));
        dispatch({ type: "SIGNUP", payload: result });
      });
  };
};

// export const getUser = user => {
//     return {
//         type: 'GET_USER',
//         user: user
//     }
// }

// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch({ type: 'LOADING_USERS' })
//         fetch('http://localhost:3000/users').then(res => {
//             return res.json()
//         }).then(users => {
//             dispatch({ type: 'ADD_USERS', users: users })
//         })
//     }

// }

// export const fetch"login" = (account) => {
//     console.log(account)
//     return dispatch => {
//         fetch('http://localhost:3000/login', {

//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 user: account
//             })
//         }
//         )
//             .then(res => res.json())
//             .then(userJSON => {
//                 if (userJSON.error) {
//                     dispatch(addUser(account))
//                     // alert("Invalid credentials")
//                 }
//             })
//     }
// }

// export const addUser = user => {
//     return {
//         type: 'ADD_USER',
//         user: user
//     }
// }

// export const createUser = user => {

//     return (dispatch) => {
//         fetch('http://localhost:3000/users', {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ user: user })
//         })
//             .then(res => res.json())
//             .then(newUser => dispatch(getUser(newUser)))
//             .catch(error => {
//                 console.log(error)
//             })
//     }
// }