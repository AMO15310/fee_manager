import React from "react";
import "./signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Alert } from "bootstrap";

class SignupPage extends React.Component {
  constructor() {
    super();
  }
  state = {
    fullName: "",
    userName: "",
    email: "",
    password1: "",
    password2: "",
    showAlert: false,
  };

  changeFull = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };
  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  changePass1 = (event) => {
    this.setState({
      password1: event.target.value,
    });
  };

  changePass2 = (event) => {
    this.setState({
      password2: event.target.value,
    });
  };

  changeUser = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  toggleAlert = () => {
    this.setState({
      showAlert: !this.state.showAlert,
    });
  };

  componentDidMount() {
    this.init();
  }

  init = () => {};

  sendData = (event) => {
    event.preventDefault();
    if (this.state.password1 !== this.state.password2) {
      console.log("Password isnt the same");
      return false;
    }
    if (!this.state.password1 || !this.state.email) {
      console.log("Please fill the form");
      return false;
    }
    const data = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password1,
    };
    const url = "http://localhost:4420/signup";
    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.request.response);
      });
  };

  render() {
    return (
      <div className="signup">
        <div className="container  d-flex  w-50   bg-success">
          <div className="form-control ">
            <div className="d-flex justify-content-center  my-4 ">
              {this.state.showAlert && (
                <div class="alert alert-success">
                  <strong>Success!</strong> Indicates a successful or positive
                  action.
                </div>
              )}
            </div>

            <div className="text-muted lead  text-center font-weight-bold">
              Signup
            </div>

            <form action="" onSubmit={this.sendData}>
              <input
                type="text"
                value={this.state.fullName}
                onChange={this.changeFull}
                placeholder="Full Name"
                name="full"
                className="form-control mt-3"
                // required
              />
              <input
                type="text"
                value={this.state.userName}
                onChange={this.changeUser}
                placeholder="UserName"
                className="form-control mt-3"
                // required
              />
              <input
                type="text"
                value={this.state.email}
                onChange={this.changeEmail}
                placeholder="Email"
                className="form-control mt-3"
                // required
              />
              <input
                type="password"
                value={this.state.password1}
                onChange={this.changePass1}
                placeholder="Password"
                className="form-control mt-3"
                // required
              />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.changePass2}
                placeholder="Confirm Password"
                className="form-control  mt-3 mb-3 "
                // required
              />
              {/* <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">
                Please fill out this field.
              </div> */}
              {/* <label className="form-check-label mb-1">
                <input type="checkbox" className="form-check-input" />
                Remember me
              </label> */}
              <input
                type="submit"
                value="Submit"
                onSubmit={this.sendData}
                className="btn btn-primary form-control mb-3 btn-block"
              />
              <div className="text-muted">
                Have an account?
                <Link to="/" className="text-secondary mx-2">
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupPage;
