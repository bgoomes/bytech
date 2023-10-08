import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
                         "content"
                         "footer";

    
    
`

export const Content = styled.section`
    grid-area: content;

    width: 980px;
    margin: 0 auto;

    

    > main{
        display: flex;
        flex-direction: row;
        gap: 15px;
        justify-content: space-between;

        > div{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 60%;
            padding: 15px;

            > h1{
                font-size: 36px;
                line-height: 30px;
                color: red;
            }

            > p{
                font-size: 18px;
                font-weight: 400;
                text-align: justify;
            }
        }

       
    }
`