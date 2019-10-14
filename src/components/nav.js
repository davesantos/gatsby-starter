import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
  </nav>
)

export default Nav
