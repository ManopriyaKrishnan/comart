import styled from "styled-components";

export const ProductContainer = styled.div`
/* border: 1px solid; */
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
margin: 3rem 10rem;
`

export const ProductDescContainer = styled.div`
/* border:1px solid; */
height: 14rem;
width: 11rem;
text-align: center;

`

export const Flex = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export const ProductDiscount = styled.div`
color: ${({theme})=> (theme.color.success)};
font-weight: bold;
`

export const ProductDescCardContainer = styled.div`
background-color:${props=>props.color};
margin-inline: 30px;
border-radius: 5px;
width: 153px;
height: 190px;

`
export const ProductCardContent = styled.div`
margin: 20px 32px;
height: 130px;
width: 94px;
background-color: white;
border-radius: 8px;
text-align: center;
    padding-block: 10px;
`

export const ProductButton = styled.button`
background-color: ${({theme})=> (theme.color.primary)};
color:  ${({theme})=> (theme.color.light)};
border: none;
border-radius: 4px;
padding: 10px 15px;
`
export const SectionCardButton = styled.button`
background-color: ${({theme})=> (theme.color.light)};
color:  ${({theme})=> (theme.color.primary)};
height: 2rem;
width: 7rem;
border: 1px solid #077EFF;
border-radius: 9px;
margin: 16px 0px;
font-weight: bold;
`
export const SectionCardContainer = styled.div`
height: 21rem;
width: 20rem;
border-radius: 10px;
/* border: 1px solid; */
background-color: aliceblue;
`
export const SectionCard = styled.div`
margin-inline: 12rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`

export const SectionCardImage = styled.img`
width:20rem;
 height:12rem;
 border-radius:12px 12px 0px 0px;
`

export const ProductDescPrice = styled.div`
display: flex;
margin-left: 53px;
margin-block: 7px;
font-weight: bolder;
`