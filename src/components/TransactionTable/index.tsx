import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transactionprops{
    id:number;
    title:string;
    category:string;
    amount:number
    createdAt: Date | string;
    type:string;
}


export function TransactionTable(){

    const [transactions,setTransactions]=useState<Transactionprops[]>([])

    useEffect(() => {
        api.get('transactions')
            
            .then(response => setTransactions(response.data.transactions))

    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   
                   {
                       transactions.map((value)=>(
                        <tr key={value.id}>
                        <td>
                        {value.title}
                        </td>
                        <td className={value.type}>{value.amount}</td>
                        <td>{value.category}</td>
                        <td>{value.createdAt}</td>
                    </tr>
                       ))
                   }
                   
                    
                </tbody>
            </table>
        </Container>
    )
}