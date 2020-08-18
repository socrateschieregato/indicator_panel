import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { updateProfileRequest } from '~/store/modules/user/actions'

import { Container, Wrapper } from './styles'

export default function Profile() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.user.profile)

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data))
  }

  return (
    <Wrapper>
      <Container>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <Input name="username" placeholder="Usuário" disabled />
          <Input name="name" placeholder="Nome Completo" />
          <Input name="email" placeholder="Seu endereço de e-mail" />

          <hr />

          <button type="submit">Atualizar Perfil</button>
        </Form>

        <button type="button">Sair do App</button>
      </Container>
    </Wrapper>
  )
}
