import React, { useEffect } from "react";
import "./login.scss";

const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  return (
    <>
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>UserName:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                // value={this.state.username}
                // onChange={(event) => this.handleOnChangeUsername(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <div className="custom-input-password">
                <input
                  // type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  // onChange={(event) => {
                  //   this.handleOnChangePassword(event);
                  // }}
                />
                <span
                // onClick={() => {
                //   this.handleShowHidePassword();
                // }}
                >
                  {/* <i
                    class={
                      this.state.isShowPassword
                        ? "fa fa-eye"
                        : "fa fa-eye-slash"
                    }
                  ></i> */}
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                // onClick={() => {
                //   this.handleLogin();
                // }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot: your password?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i class="fab fa-google google"></i>
              <i class="fab fa-facebook facebook"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
