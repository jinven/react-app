// https://reacttraining.com/react-router/
import React from 'react'
import { BrowserRouter as Router, Switch, Link, Route, useRouteMatch, useParams, NavLink, Redirect, useHistory } from 'react-router-dom'
import Main from './routes/main'
import Hello from './routes/hello'
import Static from './routes/static'
import styleScss from '../assets/css/route.module.scss'
import styleCss from '../assets/css/route.module.css'
function Users() {
  return <h2>Users</h2>
}
function Dynamic() {
  let { id } = useParams()
  return <h2>DYNAMIC, ID: {id}</h2>
}
function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}
function Topics() {
  let match = useRouteMatch()
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={`${match.url}/components`} activeClassName={styleScss.hurray}>Components</NavLink>
          {/* <Link to={`${match.url}/components`}>Components</Link> */}
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`} activeClassName={styleCss.hurray}>Props v. State</NavLink>
          {/* <Link to={`${match.url}/props-v-state`}>Props v. State</Link> */}
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}><Topic /></Route>
        <Route path={`${match.path}`}><h3>Please select a topic.</h3></Route>
      </Switch>
    </div>
  )
}
export default function ChildRoute() {
  let match = useRouteMatch()
  let history = useHistory();
  function sayHello(){
    history.push('/route/hello')
  }
  return (
    <Router>
      <div>
        <h2>route</h2>
        <label><input type="checkbox" /><span>A</span></label>
        <label><input type="checkbox" /><span>B</span></label>
        <label><input type="checkbox" /><span>C</span></label>
        <label><input type="checkbox" /><span>D</span></label>
        <p></p>
        <button>go back</button>
        <button>go forward</button>
        <div>
          <button onClick={sayHello}>say hello</button>
        </div>
        <div>
          <h1>Route props</h1>
          <ul>
            <li><Link to="/route">/route</Link></li>
            <li><Link to={`${match.url}/hello`}>/route/hello</Link></li>
            <li><Link to="/route/hello/you">/route/hello/you</Link></li>
            <li><Link to="/route/static">/route/static</Link></li>
            <li><Link to="/route/dynamic/1">/route/dynamic/1</Link></li>
            <li><Link to="/route/attrs">/route/attrs</Link></li>
            <li><Link to="/route/users">/users</Link></li>
            <li><Link to="/route/redirect">/users</Link></li>
            <li><Link to={`${match.url}/topics`}>/topics</Link></li>
          </ul>
        </div>
        <Switch>
          <Redirect from='/route/redirect' to='/route/users' />
          <Route path={`${match.path}/hello/:name`}>
            <Hello />
          </Route>
          <Route path={`${match.path}/hello`}>
            <Hello />
          </Route>
          <Route path="/route/static">
            <Static />
          </Route>
          <Route path="/route/dynamic/:id">
            <Dynamic />
          </Route>
          <Route path="/route/users">
            <Users />
          </Route>
          <Route path="/route/topics">
            <Topics />
          </Route>
          <Route path="/route">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
