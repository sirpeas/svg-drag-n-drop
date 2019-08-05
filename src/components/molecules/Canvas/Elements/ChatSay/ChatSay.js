import React, { PureComponent, Fragment } from 'react';

import withSVGDrag from 'components/organisms/withSVGDrag';

import { Rect, Text } from './styles';

class ChatSay extends PureComponent {
  render() {
    return (
      <Fragment>
        <Rect
          rx="20"
          ry="20"
        />
        <Text
          x="25"
          y="34"
        >
          Chat Say
        </Text>
      </Fragment>
    );
  }
}

export default withSVGDrag(ChatSay);
