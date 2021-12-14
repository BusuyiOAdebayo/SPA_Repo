/*import html from "html-literal";

export default () => html`
  <section id="gallery"></section>
`;*/

// State-Driven SPA
import html from "html-literal";

export default st => html`
  <section id="gallery">
    This is the ${st.view}!
    ${st.pictures.reduce(
      (html, curr) => `${html} <img src=${curr.url} alt=${curr.title}>`,
      ``
    )}
  </section>
`;
