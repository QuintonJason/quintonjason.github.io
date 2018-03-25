import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>Contact</h1>
        <form
          name="contact"
          id="contact__form"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label htmlFor="name">Your name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Your email:</label>
            <br />
            <input type="email" name="email" onChange={this.handleChange} />
          </p>
          <p>
            <label htmlFor>
              Message:<br />
              <textarea
                name="message"
                id="message"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button className="btn" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    );
  }
}
