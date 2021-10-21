import React from 'react';

import classes from './Error.module.scss';

const Error: React.FC<ErrorProps> = ({ code = 404 }) => {
  const errors: Errors = {
    404: '404 Not Found',
  };

  return (
    <div className={classes.error_page}>
      {errors[code]}
    </div>
  );
};

type Errors = {
  [key: string]: string;
};

type ErrorProps = {
  code?: number;
};

export default Error;
