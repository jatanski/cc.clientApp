import React from 'react'
import {
    MDBCardHeader,
    MDBCard,
    MDBDataTable,
    MDBListGroupItem,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';
import { defaultProps } from 'recompose';


const FristLoginView = () => {

    const data = {
        columns: [{
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Surname',
                field: 'position',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Price',
                field: 'salary',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Age',
                field: 'age',
                sort: 'asc',
                width: 200
            }
        ],
        rows: [{
                name: 'Tiger Nixon',
                position: 'System Architect',
                salary: '$320',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
            },
            {
                name: 'Garrett Winters',
                position: 'Accountant',
                salary: '$170',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Ashton Cox',
                position: 'Junior Technical Author',
                salary: '$86',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Cedric Kelly',
                position: 'Senior Javascript Developer',
                salary: '$433',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
            },
            {
                name: 'Airi Satou',
                position: 'Accountant',
                salary: '$162',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Brielle Williamson',
                position: 'Integration Specialist',
                salary: '$372',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Herrod Chandler',
                position: 'Sales Assistant',
                salary: '$137',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Rhona Davidson',
                position: 'Integration Specialist',
                salary: '$327',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            },
            {
                name: 'Colleen Hurst',
                position: 'Javascript Developer',
                salary: '$205',
                age: <button type="submit" className="btn btn-outline-success waves-effect">
                Pay for Subscription
            </button>
                
            }
            
            
        ]
    };
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <MDBCard className="mb-4">
                        <MDBCardHeader>
                            <MDBCardTitle>List of Mentors</MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBDataTable
                            scrollY
                            maxHeight="20vh"
                            striped
                            bordered
                            small
                            data={data}
                            />
                            
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        
    );
}

export default FristLoginView;