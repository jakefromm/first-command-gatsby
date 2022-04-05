import * as React from "react"
import SearchBar from "../components/SearchBar"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
     <SearchBar />
    </main>
  )
}

export default IndexPage
