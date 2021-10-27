import React from 'react';

import classes from './Card.module.scss';

type CardProps = {
  title?: string;
};

const Card: React.FC<CardProps> = (props) => (
  <div className={classes.component}>
    {props.title && (<h5 className={classes.title}>{props.title}</h5>)}
    {props.children}
  </div>
);

export default Card;
