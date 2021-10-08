import React from 'react';
import {
  Row, Col, Navigation, NavigationAction, Button,
} from '@ff/ui-kit';

import logo from './assets/gnivc-logo.png';

const Header = () => (
  <Row
    style={{ padding: '20px 40px', marginBottom: '30px', backgroundColor: '#224b8d' }}
    justify="space-between"
  >
    <Col xs={12} sm={6}>
      <Row align="middle" colGap="lg" wrap={false}>
        <img
          src={logo}
          alt="gnivc logo"
          style={{ display: 'block', height: '30px' }}
        />
        <Navigation horizontal>
          <NavigationAction active>Каталог</NavigationAction>
          <NavigationAction>Каталог</NavigationAction>
          <NavigationAction>Каталог</NavigationAction>
        </Navigation>
      </Row>
    </Col>

    <Col xs={12} sm={6}>
      <Row wrap={false} colGap="lg" align="middle" justify="end">
        {/* поискать нормальные кнопки */}
        <Button variant="text" type="primary" style={{ fontSize: '16px', color: '#fff' }}>
          Добавить задачу
        </Button>
        <Button variant="text" type="primary" style={{ fontSize: '16px', color: '#fff' }}>
          Имя Фамилия
        </Button>
        <img
          src="#"
          alt="profile logo"
          style={{
            display: 'block',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Row>
    </Col>
  </Row>
);

export default Header;
