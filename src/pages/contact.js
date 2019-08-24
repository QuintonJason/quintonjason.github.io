import React from "react";

import Layout from "../layouts/index";

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
      <Layout>
        <div className="container">
          <h1>Contact</h1>
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
        </div>
      </Layout>
    );
  }
}
