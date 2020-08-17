import React from 'react'
import { Link } from 'react-router-dom'

import logo from '~/assets/tecnica_logo.png'

import { Container, Content, Profile } from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="tecnica" height="50px" width="200px" />
          <Link to="/">Painel</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Nome Usuário</strong>
              <Link to="profile">Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/60/abott@adorable.png"
              alt="user"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  )
}

export default Header
