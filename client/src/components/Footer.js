import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';

const Footer = () => (
  <>
    <Typography variant="h6" align="center" gutterBottom>
      Xendit
    </Typography>
    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
      Full-stack Engineer Pre-assessment Project
    </Typography>
    <Copyright />
  </>
);

export default Footer;
