import { NavLink } from "react-router-dom"
import styled from '@emotion/styled'

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;
  text-decoration: none;
  color: white;
  font-weight: 700;
  &.active {
     text-decoration: underline;
     }
`