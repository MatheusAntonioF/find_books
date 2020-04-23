import React from 'react';

import useStyles from './styles';

import { 
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';

export default function ListBooks({ books }) {
  const classes = useStyles();
  console.log(books);

  return (
    <div className={classes.containerBooks}>
      <Grid container className={classes.continerGrid} spacing={3}>
        {books.map(book => (
          <Grid item xs={4} key={book.id}>
            <Card className={classes.profileBook} elevation={3}>
              <CardActionArea className={classes.cardArea}>
                <CardMedia 
                  className={classes.thumbnail}
                  title="Capa do livro"
                  image={book.volumeInfo.imageLinks.thumbnail}
                />
                <CardContent className={classes.contentCard}>
                  <Typography className={classes.titleBook}>
                    {book.volumeInfo.title}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        
        {/* <Grid item xs={4}>
          <Paper>teste 2</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper>teste 2</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>teste 2</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}
