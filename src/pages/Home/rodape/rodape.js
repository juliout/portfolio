import styled from 'styled-components'

export const RodapeDiv = styled.div`
    width: 100%;
    height: 70px;
    margin-top: 20px;
    background-color: #151515;

    display: flex;
    justify-content: space-around;
    align-items: center;

    color: white;

    ul {
        display: flex;
        width: 200px;
        justify-content: space-around;
        list-style: none;
        
    }

    li {
        cursor: pointer;
    }
    a { 
        text-decoration: none;
        color: white
    }
`
