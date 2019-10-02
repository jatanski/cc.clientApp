import React from "react";
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBCard, MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBNavLink } from 'mdbreact';
const ClientPaymentsView = ({users}) => {
    const renderCard = users.map(user => {
        return (
            <MDBCol key={user.name}>
                <SubscriptionCard user={user}></SubscriptionCard>
                
            </MDBCol>
        );
    }); 

    return (
        <section className="payments">
            <MDBContainer >
                <MDBRow scrollY>
                    
                        {renderCard}
                    </MDBRow> 
            </MDBContainer>
        </section>
  );
//     return (
//         <section className="payments">
//             <MDBContainer>
//                 <p className="h4 text-center py-4">My sybscriptions</p>
//                 <MDBRow>
//                     <MDBCol className="center" md="5">
//                         <MDBCard>
//                             <MDBCardBody>
                                
//                                 <MDBTable hover>
//                                     <MDBTableHead>
//                                         <tr>
//                                         <th>#</th>
//                                         <th>First</th>
//                                         <th>Last</th>
//                                         <th>Handle</th>
//                                         </tr>
//                                     </MDBTableHead>
//                                     <MDBTableBody>
//                                         <tr>
//                                         <td>1</td>
//                                         <td>Mark</td>
//                                         <td>Otto</td>
//                                         <td>@mdo</td>
//                                         </tr>
//                                         <tr>
//                                         <td>2</td>
//                                         <td>Jacob</td>
//                                         <td>Thornton</td>
//                                         <td>@fat</td>
//                                         </tr>
//                                         <tr>
//                                         <td>3</td>
//                                         <td>Larry</td>
//                                         <td>the Bird</td>
//                                         <td>@twitter</td>
//                                         </tr>
//                                     </MDBTableBody>
//                                 </MDBTable>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol className="center" md="6">
//                         <MDBCard>
//                             dwdqd
//                         </MDBCard>
//                     </MDBCol>
//                     <MDBCol className="center" md="6">
//                         <MDBCard>
//                             <MDBCardBody>
//                                 <MDBTable hover>
//                                     <MDBTableHead>
//                                         <tr>
//                                         <th>#</th>
//                                         <th>First</th>
//                                         <th>Last</th>
//                                         <th>Handle</th>
//                                         </tr>
//                                     </MDBTableHead>
//                                     <MDBTableBody>
//                                         <tr>
//                                         <td>1</td>
//                                         <td>Mark</td>
//                                         <td>Otto</td>
//                                         <td>@mdo</td>
//                                         </tr>
//                                         <tr>
//                                         <td>2</td>
//                                         <td>Jacob</td>
//                                         <td>Thornton</td>
//                                         <td>@fat</td>
//                                         </tr>
//                                         <tr>
//                                         <td>3</td>
//                                         <td>Larry</td>
//                                         <td>the Bird</td>
//                                         <td>@twitter</td>
//                                         </tr>
//                                     </MDBTableBody>
//                                 </MDBTable>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </MDBContainer>
//         </section>
//   );
}


export default ClientPaymentsView;