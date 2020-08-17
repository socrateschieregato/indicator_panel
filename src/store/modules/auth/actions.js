export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  }
}

export function signInSucess(token, username) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, username },
  }
}

export function signUpRequest(username, password, name) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, password, name },
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  }
}
