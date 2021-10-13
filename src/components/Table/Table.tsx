import React, { FC, useEffect, useState } from 'react';

import { PostProps } from '../Posts/Post';
import classes from './Table.module.scss';

type TableProps = {
  data: PostProps[];
  search: string;
};



export default Table;
