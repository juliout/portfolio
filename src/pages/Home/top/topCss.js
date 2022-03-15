import styled from 'styled-components'

export const BoxText =  styled.div`
    width: 50%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

   span {
    color: white;
    font-size: 35px;
   }
    
    p { 
        font-size: 70px;
        color: #529c54;
    }
    .dev{
        
        font-size: 70%;
        margin-top: 10px;
        border-style: solid;
        border-width: 1px;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        padding: 5px;
        text-align: center;
        width: 90%;
        color: white;
    }
`

export const BoxMore = styled.div`
    
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    span {
        
        width: 60%;
        height: 50%;
        box-sizing: border-box;
        
        font-size: 20px;
        color: #529c54;
        text-align: center;
        padding: 5px;
        padding-top: 20px;
        margin-bottom: 40px;
    }
    p {
        color: white;
        cursor: pointer;
    }

    p:hover {
        color: #529c54;
    }

    img {
        width: 15px;
    }

`