import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Form,
  Input,
  Label,
  Spinner,
} from 'reactstrap';
import { connect } from 'react-redux';
import { login, loginFailed, loginSuccess } from '../redux/users/actions';
import withRouter from '../HOCs/withRouter';

import { createStructuredSelector } from 'reselect';
import { selectLoading, selectUser } from '../redux/users/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => {
      dispatch(login(payload));
    },
    loginSuccess: (payload) => {
      dispatch(loginSuccess(payload));
    },
    loginFailed: (payload) => {
      dispatch(loginFailed(payload));
    },
  };
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  user: selectUser,
});

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isRemember: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlerIsRememberChange = this.handlerIsRememberChange.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  handleLogin(e) {
    e.preventDefault();

    // should call api
    this.props.loginSuccess({
      username: this.state.username,
      role: 'ok',
    });
    this.props.toggleModal();
    this.props.router.navigate('/food');
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlerIsRememberChange(e) {
    this.setState({ isRemember: e.target.checked });
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.props.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={(e) => this.handleLogin(e)}>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    value={this.state.isRemember}
                    onChange={this.handlerIsRememberChange}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
              {this.props.isLoading && (
                <Spinner color="secondary">Loading</Spinner>
              )}
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginModal)
);
