/*import html from "html-literal";
import * as views from "./views";
export default () => html`
  ${views["Home"]()} ${views["Bio"]()} ${views["Gallery"]()}
  ${views["Register"]()}
`;*/

// State-Driven SPA
import html from "html-literal";
import * as views from "./views";

export default st => html`
  ${views[st.view](st)}
`;
