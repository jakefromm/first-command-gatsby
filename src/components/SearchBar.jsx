import React from 'react'
import Helmet from 'react-helmet'

export default function SearchBar() {   
    return (
        <>
            <div>
                <Helmet >
                    <script src="https://assets.sitescdn.net/answers-search-bar/v1.0/answerstemplates.compiled.min.js"></script>
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="https://assets.sitescdn.net/answers-search-bar/v1.0/answers.css"
                    />
                    <script
                        src="https://assets.sitescdn.net/answers-search-bar/v1.0/answers.min.js"
                        onload="ANSWERS.domReady(initAnswers)"
                        async
                        defer
                    ></script>
                </Helmet>
                <h2>search bar below</h2>
                <div className="search_form"></div>
                <h2>search bar above</h2>
            </div>
        </>
    )
}