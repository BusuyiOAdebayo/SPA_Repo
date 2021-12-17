/*import html from "html-literal";

export default () => html`
  <form id="register" method="POST" action="">
    <div>
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter Your Username"
      />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" name="password" id="password" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="your@email.here"
      />
    </div>
    <input type="submit" name="register" value="Register" />
  </form>
`;*/

// State-Driven SPA
import html from "html-literal";

export default () => html`
  <form id="form" method="POST" action="">
    <div>
      <label for="url">Photo URL:</label>
      <input type="text" name="url" id="url" placeholder="Enter Photo URL" />
    </div>
    <div>
      <label for="title">Photo Title/Description:</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Photo Description"
      />
    </div>
    <input type="submit" name="submit" value="Submit Photo" />
  </form>
`;
