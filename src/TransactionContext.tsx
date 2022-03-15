import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TransactionProps{
    id:number;
    title:string;
    category:string;
    amount:number
    createdAt: Date | string;
    type:string;
}

interface TransactionProviderProps{
    children:ReactNode
}

type TransactionOmit=Omit<TransactionProps,'id' | 'createdAt'>

interface TransactionContextProps{
    transactions:TransactionProps[];
    createTransaction:(transaction:TransactionOmit)=>void;
}

export const TransactionContext=createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionProvider({children}:TransactionProviderProps){

    const [transactions,setTransactions]=useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            
            .then(response => setTransactions(response.data.transactions))

    }, []);

    function createTransaction(transaction:TransactionOmit){
       
            api.post('/transactions',transaction)
    }


    return(
        <TransactionContext.Provider value={{transactions,createTransaction}}>
           {children}
        </TransactionContext.Provider>
    )
}