import * as React from "react"
import { Helmet } from "react-helmet";

export default function SearchApp() {


  // const answersScript =
  //   <script>
  //     {ANSWERS.init({
  //       apiKey: "7a8bbf9f6fb3b05b29db26ca74e96ffe", //sample test experience
  //       experienceKey: "first-command-answers", //sample test experience
  //       businessId: "3345689", //sample test experience
  //       experienceVersion: "PRODUCTION",
  //       onReady: function () {
  //         // init components
  //         ANSWERS.addComponent("SearchBar", {
  //           container: ".search-bar",
  //           name: "search_form",
  //           redirectURL: "https://advisor_firstcommand_com.yextpages.net/index.html"
  //         });
  //       }
  //     })}</script>
  // const headerScript = <script src="https://assets.sitescdn.net/answers-search-bar/v1.0/answerstemplates.compiled.min.js"></script>
  // const onloadScript =
  //   <script
  //     src="https://assets.sitescdn.net/answers-search-bar/v1.0/answers.min.js"
  //     onload="ANSWERS.domReady(initAnswers)"
  //     async
  //     defer
  //   ></script>





  return (
    <div className="SearchApp">
      {/* <Helmet>
        {headerScript}
        {answersScript}
        {onloadScript}
      </Helmet> */}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="answers-layout">
        <div className="search-bar"></div>
        {/* <div className="spell-check"></div>
          <div className="direct-answer"></div>
          <div className="universal-results"></div>
          <div className="location-bias"></div> */}
      </div>
    </div>
  );
}
