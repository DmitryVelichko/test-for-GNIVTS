import { observer } from 'mobx-react';
import React from 'react';

import PieChart from '../../charts/PieChart';
import BarChart from '../../charts/BarChart';
import Container from '../../layouts/Container';
import Sidebar from '../../layouts/Sidebar';
import Main from '../../layouts/Main';
import classes from './Home.module.scss';

const Home: React.FC = observer(() => (
  <Main>
    <Sidebar />

    <Container>
      <div className={classes.charts}>
        <BarChart />
        <PieChart />
      </div>
    </Container>
  </Main>
));

export default Home;
