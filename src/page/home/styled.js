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

    width: 1080px;
    margin: 0 auto;
    padding-top: 50px;

    

    > main{
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: space-between;

        > div{
            display: flex;
            flex-direction: column;
            gap: 40px;
            width: 50%;
            padding: 15px;
            margin-top: 40px;

            > h1{
                font-size: 36px;
                line-height: 30px;
                color: red;
            }

            > p{
                font-size: 18px;
                font-weight: 400;
                text-align: left;
            }
        }

        >img{
            width: 450px;
        }

       
    }
`

export const Button = styled.button`
    width: 100%;
    height: 34px;
    font-size: 18px;

    margin-top: 30px;

    color: #fff;

    border: none;
    border-radius: 50px;
    background-color: red;
    opacity: 0.6;

    &:hover{
        opacity: 1;
    }
`