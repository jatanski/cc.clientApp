import React from "react";
import "./paymentsList.scss";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from 'mdbreact';

const Payments = () => {
    return (
        <section className="payments">
            <MDBContainer>
                <MDBTable>
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
            </MDBContainer>
        </section>
  );
}


export default Payments;