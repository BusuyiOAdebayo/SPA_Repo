/*import html from "html-literal";

export default () => html`
  <header>
    <h1>Savvy Coders Example Stateless SPA</h1>
  </header>
`;*/

// State-Driven SPA
import html from "html-literal";

export default st => html`
  <header>
    <h1>Savvy Coders Example State-Driven SPA ${st.header}</h1>
  </header>
`;
