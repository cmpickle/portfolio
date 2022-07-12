import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Projects } from './Projects';
import { Printing } from './Printing';
import { Blog } from './Blog';

let history = createBrowserHistory();

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <Switch>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/3d-printing'>
          <Printing />
        </Route>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);
