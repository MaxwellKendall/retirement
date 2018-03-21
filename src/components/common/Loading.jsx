import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

const Loading = props => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>{`Signing you into ${props.provider}`}</Loader>
      </Dimmer>
      {/* <Image src='/assets/images/wireframe/short-paragraph.png' /> */}
    </Segment>
  </div>
);

Loading.proptypes = {
  provider: PropTypes.string.isRequired,
};

export default Loading;
