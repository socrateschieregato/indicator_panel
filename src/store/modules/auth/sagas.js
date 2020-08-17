import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import history from '~/services/history'
import api from '~/services/api'

import { signInSucess, signFailure } from './actions'

export function* signIn({ payload }) {
  try {
    const { username, password } = payload

    const response = yield call(api.post, 'api/token/', {
      username,
      password,
    })
    const { access } = response.data

    if (!access) {
      toast.error('User not allowed')
      return
    }

    yield put(signInSucess(access, username))

    history.push('/panel')
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados')
    yield put(signFailure())
  }
}

export function* signUp({ payload }) {
  try {
    const { username, password, name } = payload

    yield call(api.post, 'admin/auth/user/add/', {
      name,
      username,
      password,
    })
    history.push('/')
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!')

    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
])
