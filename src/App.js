import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

import { timelineStore, moduleInfoStore } from './store/index';
import Header from './components/Header/Header';
import TimeLine from './components/Timeline/TimeLine';
import Footer from './components/Footer/Footer';
import Modules from './components/Modules/Modules';
import Users from './components/Users/Users';

const date = new moment();
console.log(date.toString());

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Provider
            timelineStore={timelineStore}
            moduleInfoStore={moduleInfoStore}
          >
            <Switch>
              <Route path="/timeline" exact component={TimeLine} />
              <Route path="/modules" exact component={Modules} />
              <Route path="/users" exact component={Users} />
              <Redirect from="/" to="/timeline" />
            </Switch>
          </Provider>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
