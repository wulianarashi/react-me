import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import Home from './page/home'
// import Movie from './page/movie'
// import Me from './page/me'
import LazyLoad from "./component/lazy-load"
import ScrollToTop from './component/scroll-top'
import './assets/css/index.scss'

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route path='/movie' component={LazyLoad(()=>import("./page/movie"))}></Route>
              <Route path='/me' component={LazyLoad(()=>import("./page/me"))}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
          </ScrollToTop>  
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
