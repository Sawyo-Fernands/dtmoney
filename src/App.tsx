import React from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import {createServer} from 'miragejs'

createServer({

  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return[
        {
          id:1,
          nome:'teste'
        }
      ]
    })
  }
})

export function App() {
  return (
    < >
      <Header/>   
      <Dashboard/>
    <GlobalStyle />
    </>
    
    
  );
}


