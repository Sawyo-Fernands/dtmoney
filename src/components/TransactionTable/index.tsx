
import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "./styles";


export function TransactionTable(){

    const {transactions}=useContext(TransactionContext)

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
                        <td className={value.type}>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(value.amount)}</td>
                        <td>{value.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(value.createdAt))}</td>
                    </tr>
                       ))
                   }
                   
                    
                </tbody>
            </table>
        </Container>
    )
}