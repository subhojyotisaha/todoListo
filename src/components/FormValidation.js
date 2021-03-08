import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

export class FormValidation extends Component {
  state = initialState;

  validateDetails = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "Field cannot be Blank!";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Not a valid email!";
    }

    if (this.state.password.length < 8) {
      passwordError = "Password is too short!";
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleChange = (event) => {
    const isChecked = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isChecked
        ? event.target.checked
        : event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateDetails();
    if (isValid) {
      this.setState(initialState);
      console.log(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>
        <div>
          <input
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.emailError}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.passwordError}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormValidation;
