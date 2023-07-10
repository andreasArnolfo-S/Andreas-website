import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = (props) => (

  <div className="card" style={{backgroundImage: `url(${props.data.image}) ` }}>
    <h1 className="card_title myFont">{props.data.title}</h1>
    <p className="card_about">
      {props.data.description}
    </p>
    <div className="card_actions">
      <div className="card_action">
        <Link to={props.data.url} className="card_btn">
          Voir le projet
        </Link>
      </div>
    </div>
  </div>
);
export default Card;
