import React, { PureComponent, createRef } from 'react';

import { SVGWorkflow, ChatConfirm, ChatSay } from './Elements';

import { Container, SVGRoot } from './styles';

const blockTypes = {
  chat_confirm: ChatConfirm,
  chat_say: ChatSay,
}

class Canvas extends PureComponent {
  SVGCanvas = createRef();
  state = {
    workflow: {},
    blocks: this.props.blocks || [],
    origin: {
      x: null,
      y: null,
    },
    drop: {
      x: 1,
      y: 1,
    }
  }

  componentDidMount() {
    const SVGCanvasRect = this.SVGCanvas.current.getBoundingClientRect();

    this.setState({
      origin: {
        x: window.pageXOffset + SVGCanvasRect.left,
        y: window.pageYOffset + SVGCanvasRect.top,
      }
    });
  }

  _onDragOver = (e) => {
    e.preventDefault();
  };

  _onDrop = (e) => {
    const transferedData = JSON.parse(e.dataTransfer.getData('text/plain'));
    const offsetX = 50;
    const offsetY = 30;

    let newWorkflow = { ...this.state.workflow };
    let newBlocks = [ ...this.state.blocks ];

    switch (transferedData.type) {
      // INFO: Workflow doesn't contain a type
      case undefined: {
        newWorkflow = transferedData;
        break;
      }
      default: {
        newBlocks = newBlocks.concat([transferedData]);
        break;
      }
    }

    this.setState({
      workflow: newWorkflow,
      blocks: newBlocks,
      drop: {
        x: Math.abs(this.state.origin.x - e.clientX + offsetX),
        y: Math.abs(this.state.origin.y - e.clientY + offsetY),
      },
      isDragging: false,
    }, () =>
      this.setState({ drop: {
        x: 1,
        y: 1,
      }}));
  }

  render() {
    const { workflow, blocks, origin, drop } = this.state;

    return (
      <Container
        onDragOver={this._onDragOver}
        onDrop={this._onDrop}
      >
        <SVGRoot
          ref={this.SVGCanvas}
          xmlns="http://www.w3.org/2000/svg"
        >
          {Object.keys(workflow).length > 0 &&
            <SVGWorkflow
              origin={origin}
              drop={drop}
            />
          }
          {blocks.map((block) => {
            const BlockComponent = blockTypes[block.type];

            return <BlockComponent
              key={block.id}
              origin={origin}
              drop={drop}
            />
          })}
        </SVGRoot>
      </Container>
    )
  }
}

export default Canvas;
