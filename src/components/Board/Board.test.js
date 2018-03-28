import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';
import Tile from './Tile/Tile';

it('renders without crashing', () => {
  shallow(<Board />);
});

it('has 9 Tiles by default', () => {
  const board = shallow(<Board />);
  expect(board.find(Tile).length).toBe(9);
});

it('has 16 tiles if given a size of 4', () => {
  const board = shallow(<Board size={4} />);
  expect(board.find(Tile).length).toBe(16);
});

it('renders "uncolored" Tiles to start with', () => {
  const board = shallow(<Board />);
  board.find(Tile).forEach(tile => {
    expect(tile.prop('color')).toBe(undefined);
  });
});

it('clicking on a tile "colors" it', () => {
  const board = shallow(<Board />);
  board
    .find(Tile)
    .first()
    .simulate('click');

  expect(
    board
      .find(Tile)
      .first()
      .prop('color')
  ).toEqual(expect.any(String));
});

it('clicking on a tile does not "color" other tiles', () => {
  const board = shallow(<Board />);
  board
    .find(Tile)
    .first()
    .simulate('click');

  expect(
    board
      .find(Tile)
      .at(1)
      .prop('color')
  ).toBe(undefined);
});

it('gives a red color to the first clicked tile', () => {
  const board = shallow(<Board />);
  board
    .find(Tile)
    .first()
    .simulate('click');

  expect(
    board
      .find(Tile)
      .first()
      .prop('color')
  ).toBe('#FF6666');
});

it('gives the turquoise color to the second clicked tile', () => {
  const board = shallow(<Board />);
  board
    .find(Tile)
    .first()
    .simulate('click');

  board
    .find(Tile)
    .at(1)
    .simulate('click');

  expect(
    board
      .find(Tile)
      .at(1)
      .prop('color')
  ).toBe('#44FFD1');
});

it('does not change anything if an already "colored" tile is clicked', () => {
  const board = shallow(<Board />);
  board
    .find(Tile)
    .first()
    .simulate('click');

  const color = board
    .find(Tile)
    .first()
    .prop('color');

  board
    .find(Tile)
    .first()
    .simulate('click');

  expect(color).toBe(
    board
      .find(Tile)
      .first()
      .prop('color')
  );
});
