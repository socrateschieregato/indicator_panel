import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '~/assets/tecnica_logo.png'

import { signUpRequest } from '~/store/modules/auth/actions'

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  username: Yup.string().required('O username é obrigatório'),
  password: Yup.string()
    .min(6, 'a senha precisa de no mínimo 6 caracteres')
    .required('A senha é obrigatória'),
})

function SignUp() {
  const dispatch = useDispatch()

  function handleSubmit({ username, password, name }) {
    dispatch(signUpRequest(username, password, name))
  }

  return (
    <>
      <img src={logo} alt="tecnica-balancas" height="66.84px" width="250px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="username" placeholder="Usuário" />
        <Input name="password" type="password" placeholder="Sua senha" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  )
}

export default SignUp
