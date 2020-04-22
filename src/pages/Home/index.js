import React, { useState } from 'react';

import { Button, TextField, InputAdornment } from '@material-ui/core';

import { MenuBook, Close } from '@material-ui/icons';

import useStyles from './styles';

import api from '../../services/api';

export default function Home() {
  const [books, setBooks] = useState([]);

  const [searchInput, setSearchInput] = useState('');

  const classes = useStyles();

  async function fetchBooks(value){
    setSearchInput(value)

    const { data } = await api.get(`/volumes?q=${searchInput}`);

    setBooks(data.items)
  }

  return (
    <div className={classes.root}>
        <div className={classes.container}>
          <span className={classes.title}>
            <MenuBook style={{ fontSize: 50 }} /> 
            Encontre seu livro aqui! 
          </span>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField 
              className={classes.input}
              label="Procure seu livro" 
              placeholder="Digite aqui..." 
              helperText="Procure por nome, autor, edição..." 
              size="small"
              value={searchInput}
              onChange={(e) => fetchBooks(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                      <Close className={classes.icon} onClick={() => setSearchInput('')} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary">Pesquisar</Button>
          </form>
        </div>
    </div>
  );
}
