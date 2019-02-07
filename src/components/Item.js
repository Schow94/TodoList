import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <li className="ui items">
      <div className="item">
        <div className="ui avatar image">
          <img alt="/" src={props.image}></img>
        </div>
        <div className="content">
          <div className="header">
            {props.title} 
          </div>
          <span className="date"> {new Date().toLocaleString()}</span>
          <div className="meta">
            <p>{props.description}</p>
          </div>
          <div className="extra">
            {props.category}
          </div>
        </div>
      </div>
      <span className="close">x</span>
    </li>
    
  );
};


export default Item;