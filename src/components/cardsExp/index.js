import { CardExperiencia } from "./cardsExpStyled";

export default function CardExp({image, nome, data}){
    return(
        <CardExperiencia>
            <img src={`images/${image}`} alt="unicesumar" />
            <div>
                <h1>{nome}</h1>
                <p>{data}</p>
            </div>
        </CardExperiencia>
    )
}