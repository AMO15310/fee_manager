import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    showAlert2: false,
    className: "",
    mainMess: "",
  };

  componentDidMount() {
    this.init();
  }

  init = () => {};
  handleUser = (val) => {
    this.setState({
      email: val.target.value,
    });
  };
  handlePass = (val) => {
    this.setState({
      password: val.target.value,
    });
  };
  sendData = (e) => {
    e.preventDefault();
    const User = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!User.password || !User.email) {
      console.log("Please fill all details");
      return;
    }
    axios
      .post("http://localhost:4420/login", User)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <div className=" content ">
        <div className="container  mt-5 w-50  d-flex align-items-center h-30 bg-primary ">
          <div className="form-control ">
            <div className="d-flex justify-content-center  my-4 ">
              {this.state.showAlert2 && (
                <div className={this.state.className}>
                  <strong>{this.state.mainMess}</strong> {this.state.succMess}
                </div>
              )}
            </div>
            <div className="text-muted lead  text-center font-weight-bold">
              Login
            </div>
            <form action="" onSubmit={(e) => this.sendData(e)}>
              <div className="form-floating my-3">
                <input
                  type="email"
                  id="username"
                  name="username"
                  className="form-control "
                  placeholder="Enter email"
                  onChange={(val) => this.handleUser(val)}
                  required
                />
                <label htmlFor="username" className="form-label">
                  Email
                </label>
              </div>
              <div className="form-floating my-3">
                <input
                  type="password"
                  id="pwd"
                  className="form-control "
                  placeholder="Enter Password"
                  onChange={(val) => this.handlePass(val)}
                  name="pwd"
                  required
                />
                <label htmlFor="pwd" className="form-label ">
                  Password
                </label>
              </div>
              <button
                className="btn btn-outline-primary  mb-2 mt-2"
                type="submit"
                onClick={(e) => this.sendData(e)}
              >
                Submit
              </button>
              <div className="text-muted ">
                Do not have an account?{" "}
                <Link to="/signup" className="text-secondary">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
