import { Container } from "./style";

export function Header(){
    return(
        <Container>
            <div>
                <img src="" alt="Logo Bytech" />
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