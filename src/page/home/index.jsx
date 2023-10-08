import { Container, Content } from "./styled"
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'

export function Home(){
    return(
        <Container>
        
                <Header />
                
                <Content>
                    <main>
                        <div>
                            <h1> Assistência técnia em Smartphones  </h1>
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