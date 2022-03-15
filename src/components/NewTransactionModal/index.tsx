import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles';

import Close from '../../assets/close.svg'
import Income from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import { useState } from 'react';


interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){


    const [type,setType]=useState('')

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
        <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text"  placeholder='Titulo'/>

        <input type="number"  placeholder='Valor'/>

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

        <input type="text"  placeholder='Categoria'/>

        <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )

}