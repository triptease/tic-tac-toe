import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${({ color }) => color};
  font-size: 96px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ color }) => (!color ? 'pointer' : 'inherit')};
`;

class Tile extends PureComponent {
  render() {
    const { color } = this.props;
    return <Container {...this.props}>{color ? 'x' : ''}</Container>;
  }
}

export default Tile;
