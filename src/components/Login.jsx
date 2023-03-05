import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
class Login extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {};

  render() {
    return (
      <div className=" content ">
        <div className="container  mt-5 w-50  d-flex align-items-center h-30 bg-primary ">
          <div className="form-control ">
            <div className="text-muted lead  text-center font-weight-bold">
              Login
            </div>
            <form action="">
              <div className="form-floating my-3">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control "
                  placeholder="Enter username"
                  required
                />
                <label htmlFor="username" className="form-label">
                  Username
                </label>
              </div>
              <div className="form-floating my-3">
                <input
                  type="password"
                  id="pwd"
                  className="form-control "
                  placeholder="Enter Password"
                  name="pwd"
                  required
                />
                <label htmlFor="pwd" className="form-label ">
                  Password
                </label>
              </div>
              <button className="btn btn-outline-primary  mb-2 mt-2">
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
