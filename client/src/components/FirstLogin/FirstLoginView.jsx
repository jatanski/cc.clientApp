import React from 'react'
import "./FirstLogin.scss"
import logo1 from "./img/blur-communication-computer-2148217.jpg"
import logo2 from "./img/computer-contemporary-devices-2089379.jpg"
import logo3 from "./img/computer-hands-laptop-2115217.jpg"

import {
    MDBCardHeader,
    MDBCard,
    MDBCardImage,
    MDBListGroupItem,
    MDBCardBody,
    MDBCardTitle,
    MDBNavLink,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdbreact';
import { defaultProps } from 'recompose';


const FristLoginView = ({request}) => {

   
    return (
        <section >
            <MDBContainer>
                <div className="card-deck mx-2 my-2 text-center">
                        <MDBCard className="card mb-4">
                            <MDBCardHeader className="list-header">Extra hiperr mega pack</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardImage className="img-fluid" src={logo1} waves />
                                <MDBListGroupItem  className="list-item-text">
                                    Full option - contat 24/7, online streams, free access to my videos
                                </MDBListGroupItem>
                                <MDBListGroupItem 
                                className="list-item">
                                    <MDBNavLink to="/home" exact ><button type="submit" className="btn btn-outline-success waves-effect"
                                    onClick={() => request(500)}>
                                        Buy subscription
                                    </button></MDBNavLink>
                                </MDBListGroupItem>
                                <MDBCardTitle className="title">Cost: 500$/month</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="card mb-4">
                            <MDBCardHeader  className="list-header">Big pack</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardImage className="img-fluid" src={logo2} waves />
                                <MDBListGroupItem className="list-item-text">
                                    Consultiong throught messages, access to 10 videos on my site
                                </MDBListGroupItem>
                                <MDBListGroupItem className="list-item">
                                    <MDBNavLink to="/home" exact ><button type="submit" className="btn btn-outline-success waves-effect"
                                    onClick={() => request(300)}>
                                        Buy subscription
                                    </button></MDBNavLink>
                                </MDBListGroupItem>
                                <MDBCardTitle className="title">Cost: 300$/month</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="card mb-4">
                            <MDBCardHeader className="list-header">Small pack</MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardImage className="img-fluid" src={logo3} waves />
                                <MDBListGroupItem className="list-item-text">
                                    
                                    Acces to my 5 videos and 5 meeting on skype.
                                </MDBListGroupItem>
                                <MDBListGroupItem className="list-item">
                                     <MDBNavLink to="/home" exact ><button type="submit" className="btn btn-outline-success waves-effect"
                                    onClick={() => request(100)}>
                                        Buy subscription
                                    </button></MDBNavLink>
                                </MDBListGroupItem>
                                <MDBCardTitle className="title">Cost: 100$/month</MDBCardTitle>
                            </MDBCardBody>
                        </MDBCard>
                </div>
            </MDBContainer>
        </section>
    );
}

export default FristLoginView;