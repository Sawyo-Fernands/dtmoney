import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import Close from '../../assets/close.svg'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'

import { FormEvent, useContext, useState } from 'react';

import { useTransactions } from '../../hooks/TransactionContext';



interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){

    const {createTransaction}=useTransactions()

    const [type,setType]=useState('')

    const [title,setTitle]=useState('')
    const [category,setCategory]=useState('')
    const [amount,setAmount]=useState(0)


    async function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

       await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('')
        setAmount(0)
        setCategory('')
        setType('')
        onRequestClose()
    }

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={Close} alt="Fechar Modal" />
            </button>
        <Container onSubmit={handleCreateNewTransaction}>

        <h2>Cadastrar Transação</h2>

        <input type="text"  placeholder='Titulo' value={title} onChange={e=>setTitle(e.target.value)}/>

        <input type="number"  placeholder='Valor' value={amount} onChange={e=>setAmount(Number(e.target.value))}/>

        <TransactionTypeContainer>
            <RadioBox type="button" 
            onClick={()=>setType('deposit')} 
            isActive={type ==='deposit' }
            activeColor="green"
            >

                <img src={Income} alt="" />
                <span>Entrada</span>

            </RadioBox>

            <RadioBox type="button" 
            onClick={()=>setType('withdraw')}
            isActive={type ==='withdraw' }
            activeColor="red"
            >

                <img src={Outcome} alt="" />
                <span>Saída</span>

            </RadioBox>
        </TransactionTypeContainer>

        <input type="text"  placeholder='Categoria' value={category} onChange={e=>setCategory(e.target.value)}/>

        <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )

}