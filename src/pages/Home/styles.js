import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '25%',
    paddingBottom: 15,
    backgroundColor: '#ede7f6',
    boxShadow: '0px 0px 5px 0px rgba(64,63,64,1)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 30,
    fontSize: 38,
    color: theme.palette.primary.main,

    '& > *': {
      marginRight: 10,
    }
  },
  form: {
    display: 'flex',
    alignItems: 'center',

    '& > *': {
      marginLeft: 15 
    },
    
  },
  input: {
    '& .MuiFormHelperText-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: theme.palette.primary.dark,
    },
  },
  icon: {
    fill: theme.palette.secondary.light,
    cursor: 'pointer',
  }
}));

export default useStyles;