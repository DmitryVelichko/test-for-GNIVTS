import React, { CSSProperties } from 'react';
import cn from 'classnames';

import classes from './Button.module.scss';
/*
type ButtonProps = {
  modal?: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Button: FC<ButtonProps> = ({modal, setModal}) => {    
  if(modal){
    return <button onClick={()=> setModal(false) }>Cards</button>
  }else{
    return <button onClick={()=>setModal(true)}>List</button>
  }
}
*/

type ButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { type, onClick, children, isDisabled, isLoading, isActive } = props;

  const mainClass = cn({
    [classes.btn]: true,
    [classes.disabled]: isDisabled,
    [classes.active]: isActive,
    loading: isLoading,
  });

  return (
    <button
      className={mainClass}
      type={type}
      onClick={onClick}
      style={ButtonStyles}
    >
      {children}
    </button>
  );
};


