import React, { PureComponent } from 'react';

import { getDefaultBlockData } from 'utils/blockHelpers';

import { Container } from './styles';

const componentTypes = {
  workflow: 'Workflow',
  'chat_say': 'Chat say',
  'chat_confirm': 'Chat confirm',
};

class Tool extends PureComponent {
  _onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(getDefaultBlockData(this.props.type)))
  }

  _onDragEnd = (e) => {
    e.dataTransfer.clearData('text/plain');
  }

  render() {
    const componentName = componentTypes[this.props.type];

    return (
      <Container
        draggable
        onDragStart={this._onDragStart}
        onDragEnd={this._onDragEnd}
      >
        {componentName}
      </Container>
    );
  }
}

export default Tool;
