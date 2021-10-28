import { createGlobalStyle } from 'styled-components'

import variables from './variables'
import header from './header'
import loading from './loading'
import login from './view/login'
import home from './view/home'
import generations from './view/generations'
import button from './components/button'

const styles = {
  header: header(variables),
  login: login(variables),
  loading: loading(variables),
  home: home(variables),
  generations: generations(variables),
  button: button(variables)
}

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.secondary};
  overscroll-behavior: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export default styles
export { GlobalStyle }
