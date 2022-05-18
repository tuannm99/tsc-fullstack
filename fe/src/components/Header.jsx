import React from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
      isTokenExisted: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    this.setState({
      isTokenExisted: localStorage.getItem('token'),
    });
  }

  handleLogout() {
    localStorage.removeItem('token');
    this.setState({
      isTokenExisted: false,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/food">
                    <span className="fa fa-list fa-lg"></span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {!this.state.isTokenExisted ? (
                    <Button outline onClick={this.toggleModal}>
                      <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
                  ) : (
                    <Button outline onClick={this.handleLogout}>
                      <span className="fa fa-sign-in fa-lg"></span> Logout
                    </Button>
                  )}
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <LoginModal
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
      </React.Fragment>
    );
  }
}

export default Header;
