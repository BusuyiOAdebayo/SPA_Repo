/*import html from "html-literal";

export default () => html`
  <section id="gallery"></section>
`;*/

// STATE-DRIVEN SPA
import html from "html-literal";
// This is the ${st.view}! Was initially between lines 11 and 12.
export default st => html`
  <section id="gallery">
    ${st.pictures.reduce(
      (html, curr) => `${html} <img src=${curr.url} alt=${curr.title}>`,
      ``
    )}
  </section>
`;

/*
From Most
import html from "html-literal";

export default st => html`
  <section id="gallery">
  // using reduce to construct HTML images from array
    ${st.pictures.reduce(
      (html, curr) => `${html} <img src=${curr.url} alt=${curr.title}>`,
      ``
    )}
  </section>
`;
*/

/*
From KE-N and CC
import html from "html-literal";

export default () => html`
  <section id="gallery"></section>
`;
*/

/*
From JH: Shows all the pictures
import html from "html-literal";

export default st => html`
  <section id="gallery">
    ${st.pictures.reduce(
      (html, pic) => html + `<img src=${pic.url} alt=${pic.title}>`,
      ``
    )}
  </section>
`;
*/
