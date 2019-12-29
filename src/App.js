import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Login from './components/Login'
import NoMatch from './route/NoMatch'
import Home from './components/Home'
import Logout from './components/Logout'
import About from './components/About'
import Language from './components/Language'
import ChildRoute from './components/Route'
import Axios from './components/Axios'
import Crypto from './components/Crypto'
import NodeForge from './components/NodeForge'
import Socket from './components/Socket'
import Redux from './components/Redux'
import Hook from './components/Hook'
import Ant from './components/Ant'
import { Select, Tag } from 'antd';
import PropTypes from 'prop-types'
import PrivateRoute from './route/PrivateRoute'
import { FormattedMessage  } from 'react-intl';
const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    // this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }
  onLogout = () => {
    this.props.onLogined('logout');
  }
  incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }
  componentDidMount(){
    console.log('componentDidMount');
  }
  // componentWillMount(){
  //   console.log('componentWillMount');
  // }
  componentDidCatch(){
    console.log('componentDidCatch');
  }
  // componentDidUpdate(){
  //   console.log('componentDidUpdate');
  // }
  // componentWillReceiveProps(){
  //   console.log('componentWillReceiveProps');
  // }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  render(){
    console.log('app',this.props);
    const env = process.env.NODE_ENV;
    const { value, onIncrement, onDecrement, langs, onChangeLangs, login } = this.props
    console.log('langs: ' + langs + ', login: ' + login);
    this.privateMenus = [
      {route: '/home', component: <Home user={this.props.user} />, name: <FormattedMessage id="home" />},
      {route: '/language', component: <Language langs={langs} onChangeLangs={onChangeLangs} />, name: <FormattedMessage id="language" />},
      {route: '/ant', component: <Ant />, name: 'Ant'},
      {route: '/route', component: <ChildRoute />, name: <FormattedMessage id='route' />},
      {route: '/axios', component: <Axios />, name: 'Axios'},
      {route: '/crypto', component: <Crypto />, name: 'Crypto'},
      {route: '/nodeforge', component: <NodeForge />, name: 'NodeForge'},
      {route: '/socket', component: <Socket />, name: 'Socket'},
      {route: '/redux', component: <Redux value={value} onIncrement={onIncrement} onDecrement={onDecrement} />, name: 'Redux'},
      {route: '/hook', component: <Hook langs={langs} />, name: 'Hook'},
    ];
    this.privateLinks = [
      ...(this.privateMenus.slice(0)),
      {route: '/redirect', name: 'Redirect'},
      {route: '/dynamic', name: 'Dynamic'},
    ].map((a, i)=><li key={i}><Link to={a.route}>{a.name}</Link></li>);
    this.privateRoutes = this.privateMenus.map((a, i)=><PrivateRoute path={a.route} login={this.props.login} key={i}>{a.component}</PrivateRoute>);
    console.log('App.js - this.props', this.props);
    return (
      <div className="App" id="app">
          <Router>
            <header>
              <Tag color="blue">{env}</Tag>
              <span style={{color: '#f9eaea', margin: '0 10px 0 0'}}><FormattedMessage id="click_time" values={{num: value}} /></span>
              {
                login ? <Logout onLogined={this.props.onLogined} /> : <p><FormattedMessage id="nologin" /></p>
              }
              <Select defaultValue={langs} size="small" style={{ width: 90 }} onChange={onChangeLangs}>
                <Option value="en">English</Option>
                <Option value="zh">中文</Option>
              </Select>
            </header>
            <div id="nav">
                <nav>
                    {!login&&
                      <ul>
                        <li><Link to="/login"><FormattedMessage id="login" /></Link></li>
                        <li><Link to="/about"><FormattedMessage id="about" /></Link></li>
                      </ul>
                    }
                    {login&&
                      <ul>
                        {this.privateLinks}
                      </ul>
                    }
                </nav>
            </div>
            <div>
              <Switch>
                <Route path="/login">
                  <Login onLogined={this.props.onLogined} onUserLogin={this.props.onUserLogin} />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/redirect">
                  <Redirect to="/about" />
                </Route>
                {this.privateRoutes}
                {login&&
                  <Route path="/" exact>
                    <Home user={this.props.user} />
                  </Route>
                }
                {!login&&
                  <Route path="/" exact>
                    <Login onLogined={this.props.onLogined} onUserLogin={this.props.onUserLogin} />
                  </Route>
                }
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

App.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
export default App;
