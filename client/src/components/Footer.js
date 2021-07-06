import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';

const Footer = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Full-stack Engineer Pre-assessment Project
        </Typography>
        <Copyright />
    </React.Fragment>    
  )
}

export default Footer;