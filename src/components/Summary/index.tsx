import { Container } from "./styles";
import Icon from '../../assets/income.svg'
import Outcome from '../../assets/outcome.svg'
import Total from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";


export function Summary(){

    const transaction=useContext(TransactionContext)

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={Icon} alt="Entradas" />
                </header>
                <strong>R$ 1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={Outcome} alt="Saídas" />
                </header>
                <strong>R$ 1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>R$ 1000.00</strong>

            </div>
           
        </Container>
    )
}