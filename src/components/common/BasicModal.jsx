import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react';

const BasicModal = props => (
  <Modal
    mountNode={props.parent}
    onMount={() => { console.log('hey Guyz'); }}
    trigger={<Button>Basic Modal</Button>} basic size="small">
    <Header icon="id card" content="Log in with either Facebook or Google" />
    <Modal.Content>
      {props.children}
    </Modal.Content>
  </Modal>
);

BasicModal.propTypes = {
  parent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicModal;
