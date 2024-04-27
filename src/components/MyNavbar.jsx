import React, { useState } from 'react';
import { Navbar, Nav, Button, NavDropdown, Dropdown } from 'react-bootstrap';
import SearchPage from './SearchPage';
import LogoNetflix from "../assets/netflix_logo.png";
import Avatar from "../assets/avatar.png";

const MyNavbar = () => {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const handleSearchButtonClick = () => {
    setShowSearchPage(!showSearchPage);
  };

  return (
    <>
      <Navbar className="bg-black" expand="lg">
        <Navbar.Brand>
          <img src={LogoNetflix} id="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="d-flex justify-content-between">
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>TV Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My List</Nav.Link>
          </Nav>
          <Nav className="mx-5">
          <Button variant="danger" className="netflix-search-btn" onClick={handleSearchButtonClick}>Search</Button>



            <Nav.Link>Yahia</Nav.Link>
            <NavDropdown title={<img src={Avatar} id="avatar" alt="propic" />} alignRight>
              <Dropdown.Item>Account</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Logout</Dropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showSearchPage && <SearchPage />}
    </>
  );
};

export default MyNavbar;
