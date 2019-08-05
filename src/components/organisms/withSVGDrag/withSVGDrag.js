import React, { PureComponent } from 'react';

import { Container } from './styles';

const withSVGDrag = (Component) =>
  class WithSVGDragComponent extends PureComponent {
    state = {
      isDragging: false,
      coordinates: {
        x: this.props.drop.x || 0,
        y: this.props.drop.y || 0,
      },
      // INFO: it's 0:0 for SVG
      origin: {
        x: this.props.origin.x || null,
        y: this.props.origin.y || null,
      },
    };

    static defaultProps = {
      drop: {},
      origin: {},
    }

    _onDragStart = (e) => {
      const originCoordinates = { ...this.state.origin };
      const originalCoordinates = { ...this.state.coordinates };

      if (originCoordinates.x === null && originCoordinates.y === null) {
        originCoordinates.x = e.clientX;
        originCoordinates.y = e.clientY;
      } else {
        originCoordinates.x = e.clientX - originalCoordinates.x;
        originCoordinates.y = e.clientY - originalCoordinates.y;
      };

      this.setState({
        isDragging: true,
        origin: {
          ...originCoordinates,
        },
      });
    }

    _onDragEnd = () => {
      this.setState({
        isDragging: false,
      });
    }

    _onDraging = (e) => {
      if (this.state.isDragging) {
        const { origin } = this.state;

        this.setState({
          coordinates: {
            x: e.clientX - origin.x,
            y: e.clientY - origin.y,
          },
        });
      }
    }

    render() {
      return (
        <Container
          x={this.state.coordinates.x}
          y={this.state.coordinates.y}
          onMouseDown={this._onDragStart}
          onMouseMove={this._onDraging}
          onMouseUp={this._onDragEnd}
        >
          <Component {...this.props}/>
        </Container>
      );
    }
  }

export default withSVGDrag;
