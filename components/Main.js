/*import html from "html-literal";
import * as views from "./views";
export default () => html`
  ${views["Home"]()} ${views["Bio"]()} ${views["Gallery"]()}
  ${views["Register"]()}
`;*/

// STATE-DRIVEN SPA
import html from "html-literal";
import * as views from "./views";

export default st => html`
  ${views[st.view](st)}
`;
