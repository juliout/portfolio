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

    img {
        width: 80px;
        height: 80px;        
    }

    img:hover {
        cursor: pointer;
        width: 90px;
        height: 90px;        
    }

    p {
        color:  white;
        font-size: 15px;
        margin-top: 5%;
    }

`