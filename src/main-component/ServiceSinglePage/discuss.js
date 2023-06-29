import React, { Component } from "react";
import axios from "axios";

class Discuss extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    events: "",
    notes: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { name, email, subject, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (
      error.name === "" &&
      error.email === "" &&
      error.subject === "" &&
      error.notes === ""
    ) {
      // Send the form data to the server
      axios
        .post("http://localhost:8800/api/forms", {
          name,
          email,
          subject,
          notes,
        })
        .then((response) => {
          // Handle successful form submission
          console.log("Form submitted successfully");
          // Reset the form fields
          this.setState({
            name: "",
            email: "",
            subject: "",
            events: "",
            notes: "",
            error: {},
          });
        })
        .catch((error) => {
          // Handle form submission error
          console.error("Form submission error:", error);
        });
    }

    this.setState({ error });
  };

  render() {
    const { name, email, subject, error } = this.state;

    return (
      <div className="wpo-service-single-item">
        <div className="wpo-service-contact-area">
          <div className="wpo-contact-title">
            <h2>Have a project in mind? Let's discuss</h2>
            <p>
              Get in touch with us to see how we can help you with your project
            </p>
          </div>
          <div className="wpo-contact-form-area">
            <form method="post" onSubmit={this.submitHandler} className="form">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                  <div className="form-field">
                    <input
                      className="form-control"
                      value={name}
                      onChange={this.changeHandler}
                      type="text"
                      name="name"
                      placeholder="Your Name"
                    />
                    <p>{error.name ? error.name : ""}</p>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                  <div className="form-field">
                    <input
                      className="form-control"
                      onChange={this.changeHandler}
                      value={email}
                      type="email"
                      name="email"
                      placeholder="Your Email"
                    />
                    <p>{error.email ? error.email : ""}</p>
                  </div>
                </div>
                <div className="col col-lg-12 col-12">
                  <div className="form-field">
                    <select
                      className="form-control"
                      onChange={this.changeHandler}
                      value={subject}
                      name="subject"
                    >
                      <option disabled="disabled">Services</option>
                      <option>Furniture</option>
                      <option>Complete Interior</option>
                      <option>Exterior Design</option>
                    </select>
                    <p>{error.subject ? error.subject : ""}</p>
                  </div>
                </div>
                <div className="fullwidth col col-lg-12 col-12">
                  <textarea
                    className="form-control"
                    name="notes"
                    id="notes"
                    placeholder="Message..."
                    onChange={this.changeHandler}
                    value={this.state.notes}
                  ></textarea>
                </div>
              </div>
              <div className="submit-area">
                <button type="submit" className="theme-btn-s4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Discuss;
