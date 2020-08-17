import React from 'react'
import { Form, Input } from '@rocketseat/unform'

import { Container } from './styles'

export default function Profile() {
  return (
    <Container>
      <Form>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do App</button>
    </Container>
  )
}
