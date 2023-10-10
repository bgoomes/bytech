import { Container } from "./style";
import Logo from '../../assets/logo.svg'


export function Header(){
    return(
        <Container>
            <div>
                <img src={Logo} alt="Logo Bytech" />
                <div className="nav">
                    <a href="#">Home</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <span><a href="#">Orçamento</a></span>
                </div>
            </div>
            
        </Container>
    )
}