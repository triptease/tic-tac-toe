import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Tile from './Tile/Tile';

const Container = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  grid-auto-rows: 1fr;
`;

class Board extends PureComponent {
  static defaultProps = {
    size: 3
  };

  state = {
    rows: [...Array(this.props.size)].map(row => [...Array(this.props.size)])
  };

  static getColoredCount(tiles) {
    return tiles.reduce(
      (count, tile) => count + (tile === undefined ? 0 : 1),
      0
    );
  }

  static getNextColor(rows) {
    const colouredTilesCount = rows.reduce(
      (count, row) => count + Board.getColoredCount(row),
      0
    );

    return colouredTilesCount % 2 ? '#44FFD1' : '#FF6666';
  }

  checkTileAtIndex = (xCoordinate, yCoordinate) => {
    this.setState(({ rows }) => {
      const color = Board.getNextColor(rows);
      return {
        rows: rows.map((row, y) =>
          row.map(
            (tile, x) => (xCoordinate === x && yCoordinate === y ? color : tile)
          )
        )
      };
    });
  };

  onTileClick = event => {
    const { x, y } = event.target.dataset;

    this.checkTileAtIndex(Number(x), Number(y));
  };

  render() {
    const { size } = this.props;
    const { rows } = this.state;

    return (
      <Container size={size}>
        {rows.map((row, y) =>
          row.map((color, x) => (
            <Tile
              key={`${x}.${y}`}
              color={color}
              data-x={x}
              data-y={y}
              onClick={!color ? this.onTileClick : undefined}
            />
          ))
        )}
      </Container>
    );
  }
}

export default Board;
