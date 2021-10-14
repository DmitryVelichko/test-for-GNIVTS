import React, { FC, useState, useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import classes from './App.module.scss'
import Home from '../routes/Home'
import NotFound from '../routes/NotFound'
import Contacts from '../routes/Contacts'
import PostItem from '../routes/PostItem'

const App: FC = () => (
  <>
    <ul className={classes.ul}>
      <li>
        <Link to='/'>
          <button className={classes.btn}>Домой</button>
        </Link>
      </li>
      <li>
        <Link to='/contacts'>
          <button className={classes.btn}>Контакты</button>
        </Link>
      </li>
    </ul>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/posts' component={Home} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/post/:id' component={PostItem} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
