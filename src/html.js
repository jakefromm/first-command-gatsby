import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
       
        <script
          dangerouslySetInnerHTML={{
            __html: `
                    function initAnswers() {
                        ANSWERS.init({
                            apiKey: "7a8bbf9f6fb3b05b29db26ca74e96ffe",
                            experienceKey: "first-command-answers",
                            experienceVersion: "PRODUCTION",
                            locale: "en", // e.g. en
                            businessId: "3345689",
                            templateBundle: TemplateBundle.default,
                            onReady: function () {
                                ANSWERS.addComponent("SearchBar", {
                                    container: ".search_form",
                                    name: "search-bar", //Must be unique for every search bar on the same page
                                    redirectUrl: "https://google.com",
                                    placeholderText: "Search...",
                                });
                            },
                        })
                    }`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            src="https://assets.sitescdn.net/answers-search-bar/v1.0/answers.min.js"
            onload="ANSWERS.domReady(initAnswers)"
            async
            defer`,
          }}
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
