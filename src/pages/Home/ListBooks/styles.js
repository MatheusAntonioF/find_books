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
    padding: 10,
    width: '100%',
    height: 180,
  },
  cardArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',


    '& > *': {
      marginLeft: 20,
    }
  },
  thumbnail: {
    width: 140,
    height: 140,
  },
  contentCard: {
    display: 'flex',
    flexDirection: 'column',

    padding: 0,

    width: '75%',
  },
  titleBook: {
  }

}));

export default useStyles;