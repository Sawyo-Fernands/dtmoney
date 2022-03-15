import React, { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import {createServer, Model} from 'miragejs'
import { NewTransactionModal } from './components/NewTransactionModal'

createServer({

  models:({
    transaction: Model,
  }),

  seeds(server) {
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: 'Freelancer de Websites',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12 09:00:00'),
      },
      {
        id: 2,
        title: 'Aluguel',
        type: 'withdraw',
        category: 'Casa',
        amount: 1100,
        createdAt: new Date('2021-02-14 11:00:00'),
      }
      ]
    })
  },
 
  routes(){
      this.namespace ='api';

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)

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


