import React, { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import {createServer} from 'miragejs'

import Modal from 'react-modal'

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
      <Header openModal={openModalTransaction}/>   
      <Dashboard/>
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={closeModalTransaction}
        >
        <h2>Modal</h2>
      </Modal>
    <GlobalStyle />
    </>
    
    
  );
}


