import { LogoDiv } from "./boxLogo"


export default function BoxLogo({image, text, alt}) {
    return (
        <LogoDiv>
            <img src={image} alt={alt} />
            <p>{text}</p>
        </LogoDiv>
    )
}