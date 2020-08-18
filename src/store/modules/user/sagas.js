import { takeLatest, call, put, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '~/services/api'

import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions'

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data

    const resUser = yield call(api.get, 'user/', {
      params: { username: rest.username },
    })

    const firstName = name.split(' ')[0].toLowerCase()
    const lastName = name.split(' ').slice(-1).pop().toLowerCase()

    const profile = {
      username: rest.username,
      first_name: firstName,
      last_name: lastName,
      email,
      ...(rest.oldPassword ? rest : {}),
    }

    const response = yield call(api.put, `users/${resUser.data[0].id}`, profile)

    toast.success('Perfil atualizado com sucesso')

    yield put(updateProfileSuccess(response.data))
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados')
    yield put(updateProfileFailure())
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)])
