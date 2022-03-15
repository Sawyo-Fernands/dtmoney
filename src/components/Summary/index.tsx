import { Container } from "./styles";
import Icon from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import { useContext } from "react";
import {  useTransactions } from "../../hooks/TransactionContext";


export function Summary(){

    const {transactions}=useTransactions()

    const summary=transactions.reduce((acc,transaction)=>{
        if(transaction.type ==='deposit'){
            acc.deposits+=transaction.amount
            acc.total += transaction.amount
        }else{
            acc.withdraws+=transaction.amount
            acc.total -= transaction.amount
        }
        return acc
    },{
        deposits:0,
        withdraws:0,
        total:0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Icon} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saídas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(summary.withdraws)}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(summary.total)}</strong>

            </div>
           
        </Container>
    )
}