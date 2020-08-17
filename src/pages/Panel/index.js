import React from 'react'
import api from '~/services/api'

// import { Container } from './styles';

function Panel() {
  api.get('weight')

  return <div>Panel</div>
}

export default Panel
