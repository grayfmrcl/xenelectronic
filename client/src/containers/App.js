import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Topbar from '../components/Topbar';
import Heading from '../components/Heading';
import ContainerGrid from '../components/ContainerGrid';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Topbar />
      <main>
        <Heading />
        <Container className={classes.cardGrid} maxWidth="md">
          <ContainerGrid />
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Footer />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;