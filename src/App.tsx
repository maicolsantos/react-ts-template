import React from 'react'

import { i18n } from './i18n'
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
      {/* eslint-disable-next-line react/no-danger */}
      <p dangerouslySetInnerHTML={{ __html: i18n.t('general.description') }} />
      <AppLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        { i18n.t('general.link') }
      </AppLink>
    </AppHeader>
  </AppContainer>
)
