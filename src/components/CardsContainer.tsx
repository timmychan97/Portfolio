import React from 'react';
import { Art1 } from '../arts/Art1';
import { Art2 } from '../arts/Art2';
import { Art3 } from '../arts/Art3';
import { Art4 } from '../arts/Art4';
import { Art5 } from '../arts/Art5';
import { Art6 } from '../arts/Art6';
import Card from './Card';
import '../css/CardsContainer.css';

export default class CardsContainer extends React.Component {
  arts = [Art1, Art2, Art3, Art4, Art5, Art6];
  render() {
    return (
      <div className="CardsContainer">
        {this.arts.map((art, i) =>
          <Card key={i} art={art} />
        )}
      </div>
    );
  }
}
