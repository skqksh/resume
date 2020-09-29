import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.nav`
  color: blue;
  padding: 16px;
  background-color: #eee;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    li {
      list-style-type: none;
      color: red;
      a {
        text-decoration: none;
      }
    }
  }
`

const Header = (): JSX.Element => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Portfolio">Portfolio</Link>
        </li>
      </ul>
    </Container>
  )
}

export default Header
