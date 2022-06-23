import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site(siteMetadata: {}) {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`

const FetchDataExample = () => {
  console.log(useStaticQuery(getData))
  // const data = useStaticQuery(getData)

  // fetching destructuring
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      fetching:
      {/* <h1>{data.site.siteMetadata.author}</h1>
      <h1>
        {data.site.siteMetadata.complexData.map((item, index) => {
          return (
            <p key={index}>
              {item.name}: {item.age}
            </p>
          )
        })}
      </h1> */}
      {/* destructured title */}
      <p>site title is: {title}</p>
    </div>
  )
}

export default FetchDataExample
