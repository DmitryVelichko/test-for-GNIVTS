import React from 'react';

import classes from './Error.module.scss';

const Error: React.FC<ErrorProps> = ({ code = 404 }) => {
  const errors: Errors = {
    404: '404 Not Found',
  };

}

export default Error;
