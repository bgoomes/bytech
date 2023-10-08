import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;

    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    color: #c0c0c0;

    border-top: 1px solid #c0c0c0;

    position: fixed;
    bottom: 0;
    

    > p{
        font-size: 12px;
    }

    > span{
        font-size: 10px;
        margin-top: 5px;

        >a {
        color: #c0c0c0; 
        &:hover{
            color: #d3d3d3
        }
       }
    }

    
`