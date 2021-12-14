/*import html from "html-literal";

export default () => html`
  <header>
    <h1>Savvy Coders Example SPA</h1>
  </header>
`;*/

// State-Driven SPA
import html from "html-literal";

export default st => html`
  <header>
    <h1>Savvy Coders Example SPA ${st.header}</h1>
  </header>
`;
