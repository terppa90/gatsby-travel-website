import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Herosection from "../components/HeroSection"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Herosection />
    <Image />
  </Layout>
)

export default IndexPage
