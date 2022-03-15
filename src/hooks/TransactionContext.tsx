import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

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
    createTransaction:(transaction:TransactionOmit)=>Promise<void>;
}

const TransactionContext=createContext<TransactionContextProps>({} as TransactionContextProps)

export function TransactionProvider({children}:TransactionProviderProps){

    const [transactions,setTransactions]=useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions')
            
            .then(response => setTransactions(response.data.transactions))

    }, []);

   async function createTransaction(transactionInput:TransactionOmit){
       
          const response= await api.post('/transactions',{
              ...transactionInput,
                createdAt:new Date()

            })
          const { transaction }=response.data

          setTransactions([...transactions,transaction])
    }


    return(
        <TransactionContext.Provider value={{transactions,createTransaction}}>
           {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions(){

    const context=useContext(TransactionContext)

    return context
    
}