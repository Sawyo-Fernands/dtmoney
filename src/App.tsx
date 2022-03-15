import React, { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import {createServer} from 'miragejs'
import { NewTransactionModal } from './components/NewTransactionModal'

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

  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function openModalTransaction() {
    setNewTransactionModalOpen(true);
  }
  function closeModalTransaction() {
    setNewTransactionModalOpen(false);
  }


  return (
    < >
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={closeModalTransaction}/>

      <Header openModal={openModalTransaction}/>  

      <Dashboard/>

      
    <GlobalStyle />
    </>
    
    
  );
}


