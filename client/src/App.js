import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Topbar from './components/Topbar';
import Heading from './components/Heading';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <main>
          <Heading />
          <Switch>
            <Route path="/cart">
              <CartContainer />
            </Route>
            <Route path="/">
              <ProductContainer />
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </React.Fragment>
    </Router>
  );
}

export default App;