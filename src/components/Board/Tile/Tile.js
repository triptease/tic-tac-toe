import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${({ color }) => color};
  font-size: 64px;
  border: 1px solid #000000;
  cursor: ${({ color }) => (!color ? 'pointer' : 'inherit')};
`;

class Tile extends PureComponent {
  render() {
    const { color, onClick } = this.props;
    return (
      <Container onClick={onClick} color={color}>
        {color ? 'x' : ''}
      </Container>
    );
  }
}

export default Tile;
