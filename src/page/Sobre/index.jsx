import { Container, Content } from "./style"
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

export function Sobre(){
    return(
        <Container>
        
                <Header />
                
                <Content>
                    <main>
                        <div>
                            <h1> Sobre nós</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aliquid nisi, placeat beatae doloremque labore delectus nam, voluptatibus, libero 
                                distinctio hic iure nemo explicabo corporis sequi? Laudantium tempore deserunt autem!
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam aperiam magni ullam expedita e
                                xercitationem explicabo eius iste molestias. Amet labore sed suscipit sequi sunt ipsa, doloribus necessitatibus 
                                fugiat cupiditate et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit quibusdam ipsam unde 
                                voluptatibus pariatur quaerat, ut debitis soluta, quos cum quis esse dolore nostrum laudantium corporis! Assumenda, unde eum!
                            </p>
                        </div>
                        

                        
                        <img src="" alt="imagem telefone" />
                    </main>    
                </Content>
                
                <Footer />
          
        </Container>
      
    )
}