import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  containerBooks: {
    display: 'flex',
    flexDirection: 'column',

    marginTop: 10,
    padding: 5,

    width: '100%',
    height: '75%',
  },

  continerGrid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',

    width: '100%'
  },

  profileBook: {
    width: '100%',
    height: 180,
    padding: 10,
  },

  cardArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    height: '100%',

    '& > *': {
      marginLeft: 20,
      marginRight: 5,
    }
  },

  thumbnail: {
    width: 140,
    height: 140,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },

  contentCard: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,

    width: '75%',
    height: '100%',
  },

  description: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    height: '100%',
  }
}));

export default useStyles;