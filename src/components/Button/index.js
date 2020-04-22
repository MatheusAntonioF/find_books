import React from 'react';

import { Button, withStyles } from '@material-ui/core';


export default function ButtonComponent({ color, children, ...rest}) {


  const ButtonStyles = withStyles(theme => ({
    root: {
      backgroundColor: theme.palette[color].main,
      color: 'white',

      '&:hover': {
        backgroundColor: theme.palette[color].main,
      }
    }
  }))(Button);

  return (
    <ButtonStyles variant="outlined" color="primary" {...rest}>
      {children}
    </ButtonStyles>
  );
}
