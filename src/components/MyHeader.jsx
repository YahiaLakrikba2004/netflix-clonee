import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-button">
          <p className="header-text text-white">TV Shows / Films</p>
          <Dropdown>
            <Dropdown.Toggle className="genres-button">Genres</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default Header;
