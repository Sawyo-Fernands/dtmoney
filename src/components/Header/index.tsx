
import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    openModal:()=>void
}


export function Header({openModal}:HeaderProps){


    return(
        <Container>

            <Content>

                

                <img src={Logo} alt="dtmoney" />
                <button type="button" onClick={openModal}>Nova Transação</button>
            </Content>
            
        </Container>
    )
}