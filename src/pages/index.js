import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome! My name is Mehmood Ahmad and by profession I am a web developer. You can find me at <a href="https://mehmoodahmad.me">https://mehmoodahmad.me</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
