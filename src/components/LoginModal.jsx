import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

class LoginModal extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    parent: PropTypes.node.isRequired,
  }

  state = { open: false }

  show = size => () => this.setState({ size, open: true })

  close = () => this.setState({ open: false })

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Button onClick={this.show('medium')}>Register with Email</Button>
        <Modal
          dimmer="blurring"
          size={size}
          open={open}
          mountNode={this.props.parent}
          onClose={this.close}
        >
          <Modal.Header>
            {this.props.header}
          </Modal.Header>
          <Modal.Content>
            {this.props.children}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
