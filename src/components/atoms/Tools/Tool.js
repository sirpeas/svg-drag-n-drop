import React, { PureComponent } from 'react';

import { Container } from './styles';

const componentTypes = {
  workflow: 'workflow',
  'chat_reply': 'Chat reply',
  'chat_say': 'Chat say',
};

class Tool extends PureComponent {

  _onDragStart = (e) => {
    // TODO: Data needs to be in json format
    e.dataTransfer.setData('text/plain', JSON.stringify(componentTypes[this.props.type]))
  }

  _onDragging = (e) => {

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
