import React from 'react';

import useStyles from './styles';

import { 
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';

export default function ListBooks({ books }) {
  const classes = useStyles();
  console.log(books);

  return (
    <div className={classes.containerBooks}>
      <Grid container className={classes.continerGrid} spacing={3}>
        {books.map(book => {
          let { title, authors, description, previewLink } = book?.volumeInfo;

          if(!authors){
            authors = [];
          }

          return (
            <Grid item xs={4} key={book.id}>
              <Card className={classes.profileBook} elevation={3}>
                <CardActionArea className={classes.cardArea}>
                  <CardMedia 
                    className={classes.thumbnail}
                    title="Capa do livro"
                    image={book.volumeInfo.imageLinks.thumbnail}
                  />
                  <CardContent className={classes.contentCard}>
                    <Typography color="primary">
                      <Link href={previewLink} rel="noreferrer" target="_blank">
                        {title}
                      </Link>
                    </Typography>
                    {authors.map(author => (
                      <Typography key={Math.random()} variant="caption">
                        {author}
                      </Typography>
                    ))}
                    <Typography variant="subtitle2" className={classes.description}>
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
        
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
