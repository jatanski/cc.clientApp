import React from "react";
import { MDBRow, MDBInput, MDBContainer, MDBCard, MDBBtn, MDBCol, MDBCardBody, MDBIcon, MDBNavLink, MDBSelect, MDBSelectInput, MDBSelectOption } from 'mdbreact';
import "./paymentForm.scss";

const Payments = () => {

    return (
        <section>
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="center" md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <MDBNavLink  to="/payment">
                                        <div >
                                            <i  className="h1" >
                                                <MDBIcon style={{ color: '#ff7043' }} onClick={() => console.log('see')} icon="arrow-left" />
                                            </i>
                                        </div>
                                    </MDBNavLink>
                                    <p className="h4 text-center py-4">Add Payment</p>
                                    <div className="grey-text">
                                        <MDBInput label="Amount" />
                                        <select className="browser-default custom-select">
                                            <option>Choose your mentor</option>
                                            <option value="1">Jan Gruszka</option>
                                            <option value="2">Kalek Ignacy</option>
                                            <option value="3">Mirek Tomasz</option>
                                        </select>
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <MDBBtn color="deep-orange" type="submit">Add</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
  );
}


export default Payments;