import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
// import TagsList from "../components/TagsList"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h1>My Fave Recipes</h1>
              <h4>
                A collection of my family favorite recipes with a Venezuelan
                Taste
              </h4>
            </div>
          </div>
        </header>
        {/* <TagsList /> */}
        <AllRecipes />
      </main>
    </Layout>
  )
}
