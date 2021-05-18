import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const arrayUrls = [
  'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  'https://img.pokemondb.net/artwork/charmander.jpg',
  'https://img.pokemondb.net/artwork/pikachu.jpg',
  'https://img.pokemondb.net/artwork/jigglypuff.jpg',
  'https://img.pokemondb.net/artwork/squirtle.jpg'
];

ReactDOM.render(
  <Carousel images = {arrayUrls}/>,
  document.querySelector('#root')
);
