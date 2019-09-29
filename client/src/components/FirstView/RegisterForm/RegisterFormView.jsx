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
import TextInput from "./RegisterFormTextInput";

const RegisterFormView = ({
  changeForm,
  handleInputChange,
  register,
  showSpinner,
  isAdminTrue,
  isAdminFalse,
  showAdminInput
}) => {
  const inputs = [
    {
      label: "Your name",
      icon: "user",
      type: "text",
      onChange: handleInputChange,
      id: "registerFormName"
    },
    {
      label: "Your mail",
      icon: "envelope",
      type: "email",
      onChange: handleInputChange,
      id: "registerFormEmail"
    },
    {
      label: "Confirm your email",
      icon: "exclamation-triangle",
      type: "password",
      onChange: handleInputChange,
      id: "registerFormConfirmEmail"
    },
    {
      label: "Your password",
      icon: "lock",
      type: "password",
      onChange: handleInputChange,
      id: "registerFormPassword"
    }
  ];

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="center" md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  {inputs.map(input => {
                    return <TextInput {...input}></TextInput>;
                  })}
                </div>
                <div className="firstView__registerForm--radiosInput">
                  <p>Register as?</p>
                  <RadioInput
                    isAdmin={isAdminTrue}
                    id="adminInput"
                    labelText="Admin"
                  ></RadioInput>
                  {showAdminInput ? (
                    <MDBInput
                      label="Secret password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={handleInputChange}
                      id="registerFormAdminPassword"
                    />
                  ) : null}
                  <RadioInput
                    isAdmin={isAdminFalse}
                    id="userInput"
                    labelText="User"
                  ></RadioInput>
                </div>
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
