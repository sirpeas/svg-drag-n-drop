import React, { PureComponent, Fragment } from 'react';

import withSVGDrag from 'components/organisms/withSVGDrag';

import { Rect, Text } from './styles';

class SVGWorkflow extends PureComponent {

  render() {
    return (
      <Fragment>
        <Rect />
        <Text
          x="25"
          y="34"
        >
          Workflow
        </Text>
      </Fragment>
    );
  }
}

export default withSVGDrag(SVGWorkflow);
