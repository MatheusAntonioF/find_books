import React, { useState } from 'react';

import { Button, TextField, InputAdornment, Icon } from '@material-ui/core';

import { MenuBook, Close } from '@material-ui/icons';

import useStyles from './styles';

import api from '../../services/api';

import ListBooks from './ListBooks';

export default function Home() {
  const [books, setBooks] = useState([]);

  const [isLoad, setIsLoad] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  const classes = useStyles();

  async function handleSubmit(e){    
    try{
      e.preventDefault();

      setIsLoad(true);

      const { data } = await api.get(`/volumes?q=${searchInput}`);

      setBooks(data.items)

    }catch(err){
      console.error(err);
    }
    setIsLoad(false);
  }
  console.log(books);

  return (
    <div className={classes.root}>
        <div className={classes.container}>
          <span className={classes.title}>
            <MenuBook style={{ fontSize: 50 }} /> 
            Find your book here!
          </span>
          <form className={classes.form} onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField 
              className={classes.input}
                label="Procure seu livro" 
                placeholder="Digite aqui..." 
                helperText="Procure por nome, autor, edição..." 
                size="small"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                        <Close className={classes.icon} onClick={() => setSearchInput('')} />
                    </InputAdornment>
                  ),
              }}
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                endIcon={<Icon>send</Icon>
              }>
                {isLoad ? 'Loading...' : 'Send'}
              </Button>
          </form>
        </div>
        {books.length >= 1 && <ListBooks books={books} />}
    </div>
  );
}
