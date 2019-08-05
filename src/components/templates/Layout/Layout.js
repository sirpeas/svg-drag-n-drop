import React from 'react';

import Canvas from 'components/molecules/Canvas';
import Toolkit from 'components/molecules/Toolkit';

import { Container } from './styles';

const Layout = () => {
  return (
    <Container>
      <Canvas />
      <Toolkit />
    </Container>
  );
}

export default Layout;
