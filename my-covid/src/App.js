import React from 'react'
//import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//import {world, local, province} from './your-covid'
import {World} from './your-covid'

function App(){
  return (
    <Router>
      <div>
        <h1>
          COVID Tracker
        </h1>
        <nav>
          <table>
            <ul>
              <li>
                <Link to="/world">
                                  World Data
                </Link>
              </li>
              <li>
                <Link to="/local">
                                  Local Data
                </Link>
              </li>
              <li>
                <Link to="/province">
                                  Province Data
                </Link>
              </li>
            </ul>
          </table>
        </nav>
      </div>
      <Switch>
        <Route path="/world">
          <World/>

        </Route>
        <Route path="/local">
          

        </Route>
        <Route path="/province">

        </Route>
      </Switch>
    </Router>
  )
}

export default App;
