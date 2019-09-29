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
import RadioInput from "./RegisterFormRadioInput";
import "./registerForm.scss";

const RegisterFormView = ({
  changeForm,
  handleInputChange,
  register,
  showSpinner,
  isAdminTrue,
  isAdminFalse
}) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="center" md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleInputChange}
                    id="registerFormName"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleInputChange}
                    id="registerFormEmail"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={handleInputChange}
                    id="registerFormConfirmEmail"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    onChange={handleInputChange}
                    id="registerFormPassword"
                  />
                </div>
                <p>Register as?</p>
                <RadioInput
                  isAdmin={isAdminTrue}
                  id="adminInput"
                  labelText="Admin"
                ></RadioInput>
                <RadioInput
                  isAdmin={isAdminFalse}
                  id="userInput"
                  labelText="User"
                ></RadioInput>
                <div className="text-center py-4 mt-3">
                  <MDBBtn onClick={register} color="deep-orange" type="submit">
                    {showSpinner ? (
                      <div
                        className="spinner-grow spinner-grow-sm white text-success"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : null}
                    Register
                  </MDBBtn>
                </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>
                    Are you member?
                    <span onClick={changeForm} className="activeLink">
                      {" "}
                      Sign In
                    </span>
                  </p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterFormView;
