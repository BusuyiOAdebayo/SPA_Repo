/*import html from "html-literal";
import sharkimage from "../../assets/image/funshark.jpeg";
export default () => html`
  <section id="jumbotron">
    <h2>Savvy Coders Nov. 2021 Fullstack Cohort</h2>
    <a href="" onClick="alert('Hello! You clicked the Button!')">
      "Call to Action" "Button"
    </a>
  </section>
  <section id="shark">
    <img src="${sharkimage}" />
  </section>
`;*/

// State-Driven SPA
import html from "html-literal";
import sharkimage from "../../assets/image/funshark.jpeg";

export default () => html`
  <section id="jumbotron">
    <h2>Savvy Coders Javascript Fullstack Cohort</h2>
    <a href="" onClick="alert('Hello! You clicked the Button!')"
      >"Call to Action Button"</a
    >
  </section>
  <div id="shark">
    <img src="${sharkimage}" />
  </div>
`;
