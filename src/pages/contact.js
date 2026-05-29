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
    this.state = {
      formSubmitted: false
    };
    this.handleThanks = this.handleThanks.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleThanks = e => {
    this.setState({
      formSubmitted: true
    });
  };
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => this.handleThanks())
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const formSubmittedClass = this.state.formSubmitted ? "submitted" : "";
    const showThanks = this.state.formSubmitted ? "show" : "";
    return (
      <main className="container contact-page">
        <Helmet
          title="Contact | Quinton Jason"
          meta={[
            {
              name: "description",
              content:
                "Contact Quinton Jason about design systems, frontend architecture, accessibility, teaching, writing, and web work."
            }
          ]}
        />
        <div className="archive-intro">
          <p className="section-heading__eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p>
            For design systems, frontend architecture, accessibility, teaching,
            writing, or web work, email is the most reliable place to start.
          </p>
          <p>
            <a className="button button--primary" href="mailto:quinton.jason@gmail.com">
              Email Quinton
            </a>
            <a
              className="button button--secondary button--spaced"
              href="https://www.linkedin.com/in/quintonjason/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <form
          name="contact"
          id="contact__form"
          method="post"
          className={`${formSubmittedClass}`}
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
          style={{ maxWidth: "500px" }}
        >
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label htmlFor="name">Your name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label>Your email:</label>
            <br />
            <input
              type="email"
              name="email"
              required
              onChange={this.handleChange}
            />
          </p>
          <p>
            <label htmlFor>
              Message:<br />
              <textarea
                name="message"
                id="message"
                required
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button className="btn btn__submit" type="submit">
              Send
            </button>
          </p>
        </form>
        <div className={`form__thanks ${showThanks}`}>
          <p>Thanks for your submission!</p>
        </div>
      </main>
    );
  }
}
