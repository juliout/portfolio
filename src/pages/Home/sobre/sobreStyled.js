import styled from 'styled-components'

export const BoxSobre = styled.div` 
    background-color: #101010;
    width: 90%;
    height: 80%;
    margin: 5% auto;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        width: 17%;
        min-width: 200px;
        max-width: 300px;
        height: 55%;
        
        padding: 10px;
        border: 3px solid red;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;

    }
    
    div {
        width: 50%;
        height: auto;
        background-color: #151515;
        padding: 10px;
        display:  flex;
        justify-content: space-around;
        
        flex-wrap: wrap;

    }

    p{
        width: 90%;
        height: auto;
        min-height: 120px;
        background-color: #202020;
        color: white;
        padding: 20px 10px;
        border-radius: 10px;
        text-align: center;
        margin-bottom: max(1%, 20px);    
}

    span {
        
        background-color: #202020;
        height: 30px;
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 10px;
        color: white;
        margin: 5px;
    }
    span:hover{
        color: #86eb88;
        cursor: pointer;
    }
`