import produce from 'immer'

const INITIAL_STATE = {
  profile: null,
}

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = { username: action.payload.username }
        break
      }
      case '@auth/UPDATE_PROFILE_SUCESS': {
        draft.profile = action.payload.profile
        break
      }
      default:
    }
  })
}
