import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBModalFooter
} from "mdbreact";
import "./loginForm.scss";

const LoginFormDisplay = ({
  handleInputChange,
  login,
  changeFormToRegister,
  changeFormToForgetPass,
  showSpinner
}) => {
  return (
    <div className="firstView__loginForm">
      <MDBContainer>
        <MDBRow>
          <MDBCol className="center" md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      onChange={handleInputChange}
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      id="loginFormEmail"
                    />

                    <MDBInput
                      onChange={handleInputChange}
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      id="loginFormPassword"
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn onClick={login} color="deep-orange" type="submit">
                      {showSpinner ? (
                        <div
                          className="spinner-grow spinner-grow-sm white text-success"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : null}
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>
                      Not a member?
                      <span
                        onClick={changeFormToRegister}
                        className="activeLink"
                      >
                        {" "}
                        Sign Up
                      </span>
                    </p>
                    <p onClick={changeFormToForgetPass} className="activeLink">
                      Forgot Password?
                    </p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginFormDisplay;
