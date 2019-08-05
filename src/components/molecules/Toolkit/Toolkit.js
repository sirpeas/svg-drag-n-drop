import React, { PureComponent } from 'react';

import Tool from './Tool';
import { Container, ToolsWrapper } from './styles';

const tools = ['workflow', 'chat_say', 'chat_confirm'];

class Toolkit extends PureComponent {

  render() {
    return (
      <Container>
        Toolkit <br />
        <ToolsWrapper>
          {
            tools.map((type) => (
              <Tool
                key={type}
                type={type}
              />
            ))
          }
        </ToolsWrapper>
      </Container>
    );
  }
}

export default Toolkit;
