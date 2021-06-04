import React from 'react'

import { Button } from '~/components/Button/Button'
import logo from './logo.svg'
import {
  AppContainer,
  AppLogo,
  AppHeader,
  AppLink,
} from './styles'

export const App = () => (
  <AppContainer>
    <AppHeader>
      <Button />
      <AppLogo src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
    </AppHeader>
  </AppContainer>
)
