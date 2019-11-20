import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'
import {
  Project,
  Item,
} from "components"

const PostLink = ({ post }) => (
  <Project>

    <Item>

    <Link to={post.frontmatter.path}>

    <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />

    {post.frontmatter.title} ({post.frontmatter.date})

    </Link>

    </Item>
  </Project>
)

export default PostLink
