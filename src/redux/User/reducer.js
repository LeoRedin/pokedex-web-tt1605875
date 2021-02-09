const INITIAL_STATE = {
  username: '',
  isAuthenticated: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
  /* ACTION */
  /* 2 INFORMAÇÕES VITAIS */
  /* OBRIGATÓRIA: type */
  /* OPCIONAL: payload */
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload.username,
      }
    case 'LOGOUT':
      return INITIAL_STATE
    default:
      return state
  }
}

export default userReducer
