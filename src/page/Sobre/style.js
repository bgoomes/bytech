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
`