import React from 'react'
import { Redirect, Route, Switch } from 'dva/router'
import Main from '../routes/main'
import Account from '../routes/account'
import First from '../routes/baoming/First'
import Second from '../routes/baoming/Second'
import Third from '../routes/baoming/Third'
import Success from '../routes/baoming/success'
import Login from '../routes/second/index'
import Sq from '../routes/second/sq'
import Import from './ck'
import A from '../routes/Homes/index'
import Jk from '../routes/home/index'
const App = (props) => {
  return (

      <Switch>
        {/* <Route exact path='/' component={Homepage} />
        <Route path='/home' component={Homepage} /> */}
        <Route exact path='/' component={A} />
        <Route path='/account' component={Account} />
        <Route path='/first' component={First} />
        <Route path='/second' component={Second} />
        <Route path='/success' component={Success} />
        <Route path="/login" component={Login} />
        <Route path="/sq" component={Sq} />
        <Route path="/import" component={Import} />
        {/* <Route path="/a" component={A} /> */}
        <Route path="/jk" component={Jk} />
        {/* <Redirect from='*' to='/404' /> */}
      </Switch>

  )
}

export default App
