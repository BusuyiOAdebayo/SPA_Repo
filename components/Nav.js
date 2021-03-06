/*import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="bio.html">Bio</a></li>
      <li><a href="gallery.html">Gallery</a></li>
      <li><a href="register.html">Register</a></li>
    </ul>
  </nav>
`;*/
/*import html from "html-literal";

export default () => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#register">Register</a></li>
    </ul>
  </nav>
`;*/

// STATE-DRIVEN SPA
import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        link =>
          `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
      )}
    </ul>
  </nav>
`;
