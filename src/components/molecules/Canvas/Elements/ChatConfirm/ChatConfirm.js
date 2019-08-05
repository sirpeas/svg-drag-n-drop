import React, { PureComponent, Fragment } from 'react';

import withSVGDrag from 'components/organisms/withSVGDrag';

import { Rect, Text } from './styles';

class ChatConfirm extends PureComponent {
  render() {
    return (
      <Fragment>
        <Rect
          rx="20"
          ry="20"
        />
        <Text
          x="18"
          y="34"
        >
          Chat Confirm
        </Text>
      </Fragment>
    );
  }
}

export default withSVGDrag(ChatConfirm);
