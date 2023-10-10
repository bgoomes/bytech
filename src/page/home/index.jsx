import { Container, Content, Button } from "./styled"
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import Img from '../../assets/iPhone.png'

export function Home(){
    return(
        <Container>
        
                <Header />
                
                <Content>
                    <main>
                        <div>
                            <h1> Assistência técnia em Smartphones  </h1>
                            <p>
                                Somos uma assistência técnica especializada em Smartphones, nosso atendimento diferenciado, vamos até você onde você estiver!
                                <br/> Isso mesmo, você escolhe onde quer ser atendido, em casa, faculdade, trabalho...<br/>
                                Venha viver a expêriencia Bytech!
                            </p>

                            <Button>
                                Faça um orçamento!
                            </Button>

                        </div>
                        

                        
                        <img src={Img} alt="imagem telefone" />
                    </main>    
                </Content>
                
                <Footer />
          
        </Container>
      
    )
}