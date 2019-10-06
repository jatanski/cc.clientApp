import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBIcon, MDBInput, MDBContainer } from 'mdbreact';
import src1 from '../../../assets/avatar.png';
import "./profile.scss";

const ProfilePageView = ({
  user,
  handleInputChange,
  changeDetails
}) => {
  return (
    <React.Fragment>
        <MDBRow className="justify-content-center">
        <MDBCol sm="12" md="6" lg="3" className="mb-5">
            <MDBCard>
                <MDBCardImage className="img-fluid" src={user.avatar ? user.avatar : src1} />
                <MDBCardBody>
                    <MDBCardTitle className="text-center mb-2 font-bold h3">{user.name ? user.name : null}</MDBCardTitle>
                    <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">{user.email ? user.email : null}</MDBCardTitle>
                    <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">{user.dateOfBirth ? user.dateOfBirth : null}</MDBCardTitle>
                    <MDBCardText>
                        <strong className="mb-2">About: </strong>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione perferendis quod animi dignissimos consectetur quibusdam numquam laboriosam, minus, provident...
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="9">
        <section className="pb-3">
          <MDBCol size="12" md="8">
                <MDBCard className="w-150 mb-4">
                <MDBCardBody>
                <MDBCardTitle className="text-center">Profile page</MDBCardTitle>
                <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form>
            <div className="grey-text">
              <MDBInput
               onChange={handleInputChange}
                label="Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                id="profileFormName"
              />
              <MDBInput
                label="Surname"
                icon="user-edit"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="E-mail"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label
                icon="calendar"
                group
                type="date"
                validate
                error="wrong"
                success="right"
              />
             <MDBInput
                label="Password"
                icon="lock-open"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
             <MDBInput
                label="Confirm password"
                icon="lock"
                group
                type="password"
                validate
                error="wrong"
                success="right"
              />
            </div>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupFileAddon01">
                    Change avatar
                    </span>
                </div>
                <div className="custom-file">
                    <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                    aria-describedby="inputGroupFileAddon01"
                    />
                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                      File...
                    </label>
                </div>
            </div>
            <div className="text-center upload-file-form">
              <MDBBtn onClick={changeDetails} outline color="secondary">
                Confirm <MDBIcon icon="check" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </section>
      </MDBCol>
    </MDBRow>
    </React.Fragment>
  );
}

export default ProfilePageView;