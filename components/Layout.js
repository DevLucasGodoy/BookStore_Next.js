import React, { Children } from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>LucasGodoy</title>
      </Head>

      <AppBar position="static">
        <Toolbar>
          <Typography>Livraria do Godoy</Typography>
        </Toolbar>
      </AppBar>

      <Container>{children}</Container>
    </div>
  );
}
