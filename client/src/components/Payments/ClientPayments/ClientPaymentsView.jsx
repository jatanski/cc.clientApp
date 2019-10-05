import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon } from 'mdbreact';
const ClientPaymentsView = ({users}) => {
    // const renderCard = users.map(user => {
    //     return (
    //         <MDBCol key={user.name}>
    //             <PaymentCard  user={user}></PaymentCard>
    //         </MDBCol>
            
    //     );
    // }); 

    return (
        <section className="payments">
            <MDBContainer>
                <MDBRow>
                    <MDBCol className="center" md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <p className="h4 text-center py-4">List of previous payments</p>
                                <MDBTable hover>
                                    <MDBTableHead>
                                        <tr>
                                        <th>#</th>
                                        <th>First</th>
                                        <th>Last</th>
                                        <th>Handle</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        </tr>
                                        <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        </tr>
                                        <tr>
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                                    <div className="text-center" >
                                        <i  className="h1" >
                                            <MDBIcon style={{ color: '#ff7043' }} onClick={() => console.log('see')} icon="plus" />
                                        </i>
                                    </div>
                                
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
  );
}


export default ClientPaymentsView;