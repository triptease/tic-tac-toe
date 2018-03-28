import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Tile from './Tile/Tile';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

class Board extends PureComponent {
  static defaultProps = {
    size: 3
  };

  state = {
    tiles: [...Array(this.props.size ** 2)]
  };

  checkTileAtIndex = index => {
    this.setState(({ tiles }) => {
      const colouredTiles = tiles.filter(color => !!color);
      const color = colouredTiles.length % 2 ? '#44FFD1' : '#FF6666';

      return {
        tiles: tiles.map((tile, i) => (index === i ? color : tile))
      };
    });
  };

  render() {
    const { tiles } = this.state;

    return (
      <Container>
        {tiles.map((color, index) => (
          <Tile
            key={index}
            color={color}
            onClick={!color ? () => this.checkTileAtIndex(index) : undefined}
          />
        ))}
      </Container>
    );
  }
}

export default Board;
