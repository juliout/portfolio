import styled from 'styled-components'

export const LogoDiv = styled.div`
        width: 10%;
        min-width: 115px;
        height: 130px;
        background-color: #151515;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        padding: 30px;
        border : 1px solid #151515;
        transition: 0.5s;

    :hover {
        border: 3px solid green;
        border-radius: 2px;
        transition: 0.5s;
    }
    img {
        width: 80px;
        height: 80px;        
    }

    img:hover {
        
        width: 90px;
        height: 90px;
        transition: 0.5s;        
    }

    p {
        color:  white;
        font-size: 15px;
        margin-top: 5%;
    }

`