import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Modal } from 'semantic-ui-react';

const BasicModal = props => (
  <Modal
    mountNode={document.getElementById('app')}
    onMount={() => { console.log('hey Guyz'); }}
    trigger={<Button>Basic Modal</Button>} basic size="small">
    <Header icon="id card" content="Log in with either Facebook or Google" />
    <Modal.Content>
      {props.children}
    </Modal.Content>
  </Modal>
);

BasicModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasicModal;
