import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Pages
import UsersList from './pages/UsersList'
import UsersInfo from './pages/UsersInfo'
import RepoListView from './pages/RepoListView'

//Styles
import './App.scss'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container">
          <Switch>
            <Route path="/" exact component={UsersList} />
            <Route path="/userinfo/:login" exact component={UsersInfo} />
            <Route path="/userinfo/:login/repolist" exact component={RepoListView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
