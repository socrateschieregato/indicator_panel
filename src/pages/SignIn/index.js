import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import { signInRequest } from '~/store/modules/auth/actions'

import logo from '~/assets/tecnica_logo.png'

const schema = Yup.object().shape({
  username: Yup.string().required('O username é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
})

function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.auth.loading)

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password))
  }

  return (
    <>
      <img src={logo} alt="tecnica-balancas" height="66.84px" width="250px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Usuário" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta de acesso</Link>
      </Form>
    </>
  )
}

export default SignIn
