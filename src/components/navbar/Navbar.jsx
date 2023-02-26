import React, { useState } from 'react';
import "./navbar.css"
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBCollapse,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
  MDBInput
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar sticky expand='lg' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'>DASHBOARD PANEL</MDBNavbarBrand>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className="mb-2 mb-lg-0 d-flex justify-content-center">
              <MDBNavbarItem>
              <MDBInput id='form10Example2' label='Search.....' type='search' />
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBInputGroup tag="form" className="d-flex w-auto me-5">
            <MDBNavbarItem className='d-flex align-items-center gap-4'>
            <span id="icons" className="material-symbols-outlined">account_circle</span>
            <span class="material-symbols-outlined">logout</span>
              </MDBNavbarItem>
            </MDBInputGroup>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}