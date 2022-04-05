

import React from "react";

const HtmlAttributes = {
  lang: "en"
}

const HeadComponents = [
    <script src="https://assets.sitescdn.net/answers-search-bar/v1.0/answerstemplates.compiled.min.js">
</script>,
    <script
    src="https://assets.sitescdn.net/answers-search-bar/v1.0/answers.min.js"
    onload="ANSWERS.domReady(initAnswers)"
    async
    defer
  ></script>,
  <script>
  function initAnswers() {
    ANSWERS.init({
      apiKey: "7a8bbf9f6fb3b05b29db26ca74e96ffe",
      experienceKey: "first-command-answers",
      experienceVersion: "PRODUCTION",
      locale: "en", // e.g. en
      businessId: "3345689",
      templateBundle: TemplateBundle.default,
      onReady: function() {
        ANSWERS.addComponent("SearchBar", {
          container: ".search_form",
          name: "search-bar", //Must be unique for every search bar on the same page
          redirectUrl: "https://google.com",
          placeholderText: "Search...",
        });
      },
    })
  }
</script>,

]

const BodyAttributes = {
  "data-theme": "dark"
}

export function onRenderBody({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes
}, pluginOptions) {
  setHtmlAttributes(HtmlAttributes)
  setHeadComponents(HeadComponents)
  setBodyAttributes(BodyAttributes)
}