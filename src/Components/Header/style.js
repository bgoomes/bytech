import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    height: 80px;

    padding: 30px;
    position: fixed;
    top: 0;

    border-bottom: 1px solid #c0c0c0;
    
    >div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin: 0 auto;
        width: 980px;
        

        > .nav{
            width: 400px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
            > a{
                text-decoration: none;
                color: #000;

                &:hover{
                    color: red;
                }
            }

            >span{
                

                >a{
                    
                    border-radius: 50px;
                    padding: 10px;
                   
                    color: #000;
                    transition: filter 0.9s;
                    &:hover{
                        background-color: red;
                        color: #fff;
                        filter: brightness(0.9);
                    }
                }
            }

        }
    }


`