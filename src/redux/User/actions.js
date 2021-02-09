function loginUser(username) {
  return {
    type: 'LOGIN',
    payload: {
      username,
    },
  }
}

function logoutUser() {
  return {
    type: 'LOGOUT',
  }
}

export { loginUser, logoutUser }
