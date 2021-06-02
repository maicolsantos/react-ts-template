import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

test('renders component Button', () => {
  const { container } = render(<Button />)
  expect(container.firstChild).toMatchSnapshot(`
    <h1>Button</h1>
  `)
})
