import styled from 'styled-components'

//#101010 calor first box
//#050505 color second box
//#529c54 green color
export const MainBody = styled.div`
    
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    min-height: 600px;
    background-color: #050505 ;

    display: flex;
    flex-wrap: wrap;
    justify-content: center ;
`


export const Box = styled.div`

    background-color: ${props => `${props.colorBg}`};
    color: white;
    width: 80%;
    min-width: 800px ;
    height: ${ props => props.height ? props.height : '50vh'};
    min-height: 450px;
    display: flex;
    flex-direction: ${props => props.direction ? 'column' : 'none'};
    justify-content: ${props => props.direction? 'space-between' : 'none'};
`