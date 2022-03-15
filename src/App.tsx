import React, { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import {createServer, Model} from 'miragejs'
import { NewTransactionModal } from './components/NewTransactionModal'

createServer({

  models:{
    transaction:Model
  },

  routes(){
    this.namespace='api';

    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })

  this.post('/transactions',(schema,request)=>{
    const data=JSON.parse(request.requestBody)

    return schema.create('transaction',data)
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


