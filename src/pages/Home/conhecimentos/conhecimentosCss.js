import styled from 'styled-components'

export const Links = styled.div`
    width: 70%;
    min-width: 750px;
    height: 35%;
    min-height: 180px;

    display: flex;
    flex-direction: column;
    

    background-color: #151515;
    border: 1px solid linear-gradient(to right, #86eb88, #2a7e2d);
    margin: 0 auto;
    padding: 15px;
    border-radius: 1em;
    transform: translate(0, -30%);

    h1 {
        width: 50%;
        margin: 0 auto ;
        text-align: center;
        color: white;
        font-size: 20px;
        padding-bottom: 5px;
        margin-bottom: 20px ;
        border-bottom: 1px solid #529c54;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
    }
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    p {
        color: #529c54;
        font-size: 17px;
        text-align: center;
    }
    img {
        width: 170px;
        height: 70px;
        background-color: gray;
    }
    img:hover {
        background: linear-gradient(87deg, rgba(134,235,136,1) 0%, rgba(42,126,45,1) 59%);
        cursor: pointer;
    }
`

export const BoxConhecimentos = styled.div`
    width: 100%;
    height: 65%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 20px;
        text-align: center;
        color: white;
        width: 50%;
        border-bottom: 1px solid white;
        border-image: linear-gradient(to right, #86eb88, #2a7e2d) 1;
        padding: 5px;
    }

    .boxTec {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        
    }

    /* .boxLogo {
        width: 10%;
        min-width: 115px;
        height: 110px;
        background-color: red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;

    }
    .boxLogo img {
        width: 80px;
        height: 80px;        
    }

    .boxLogo img:hover {
        cursor: pointer;
        width: 90px;
        height: 90px;        
    }

    p {
        color:  white;
        font-size: 15px;
    } */
`