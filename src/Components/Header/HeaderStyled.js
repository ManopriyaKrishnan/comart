
import styled from "styled-components";

export const Flex = styled.div`
display: flex;
`
export const HeaderFlex = styled.div`
display:flex;
background-color: ${({theme})=> (theme.color.primary)};
/* justify-content: space-around; */
padding-inline: 13rem;
`
export const HeaderButton = styled.button`
background-color: ${({theme})=> (theme.color.light)};
color: ${({theme})=> (theme.color.primary)};
height: 35px;
width: 5rem;
border: none;
border-radius: 7px;
margin: 16px;
font-weight: bold;
`
export const HeaderInput = styled.input`
height: 30px;
border-radius: 8px;
border: none;
width: 33rem;
margin: 17px 70px;
`
export const HeaderSpan = styled.span`
color:white;
margin: 21px;
`
export const HeaderLogo = styled.div`
color: ${(props) => props.theme.color[props.color]};
font-size: xx-large;
font-weight: bolder;
font-style: italic;
margin-top: 12px;
`

HeaderLogo.defaultProps = {
    color:"Red"
}

