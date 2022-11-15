import {ProductContainer,ProductDescContainer,Flex,ProductDiscount,ProductDescCardContainer} from './ProductCardStyled'
import {ProductCardContent,ProductButton,SectionCardButton,SectionCardContainer,SectionCard,SectionCardImage } from './ProductCardStyled'
import ProductDescription from "./ProductDescription"

function ProductCard({data}){
    // const ProductDescription=({image_url, brand, display_name,categories, discount })=>{
    //     return(
    //         <ProductDescContainer>
    //             <Flex>
    //             <img src ={image_url} alt={display_name} style={{width:"100px", height:'100px',paddingLeft: '30px'}}/>
    //             <div style={{color:'#363535',fontSize: 'small'}}>{brand}</div>
    //             <div style = {{fontWeight:'bold'}}>{display_name}</div>
    //             <div>{categories}</div>
    //             <ProductDiscount>Upto {discount}% OFF</ProductDiscount>
    //             </Flex>
    //         </ProductDescContainer>
            
    //     )
    // }
    
    const ProductDescCard1 = () =>{
        return(
            <ProductDescCardContainer color='pink'>
                <ProductCardContent >
                    <h4>Deals of the day</h4>
                    <ProductButton>View All</ProductButton>
                </ProductCardContent>

            </ProductDescCardContainer>
        )
    }
    const ProductDescCard2 = () =>{
        return(
            <ProductDescCardContainer color='aliceblue'>
                <ProductCardContent >
                    <h4 style={{marginBlockStart:'4px',marginBlockEnd:'15px'}}>Jewellery for Men and Women</h4>
                    <ProductButton>View All</ProductButton>
                </ProductCardContent>

            </ProductDescCardContainer>
        )
    }
    const SectionCard1 = ({image_url, display_name,content }) => {
        return(
            <SectionCardContainer>
            <Flex>
                <SectionCardImage src ={image_url} alt={display_name}/>
                <div style={{padding:"10px"}}>
                <h3 style={{marginBlock: "0.33em"}}>{content}</h3>
                <div style={{fontSize: "small"}}>Upgrade their fun with finds from Little Tikes, Coleman, & more</div>
                <SectionCardButton>Shop now</SectionCardButton>
                </div>
            </Flex>
            </SectionCardContainer>    
        )
    }
    
    return(
        <>
        <ProductContainer>
            <ProductDescCard1 />  
            <ProductDescription {...data[0]} discount = '20' />
            <ProductDescription {...data[1]}/>
            <ProductDescription {...data[2]}/>
            <ProductDescription {...data[3]}/>
        </ProductContainer>
        <ProductContainer>
            <ProductDescCard2 />
            <ProductDescription {...data[4]}/>
            <ProductDescription {...data[5]}/>
            <ProductDescription {...data[6]}/>
            <ProductDescription {...data[7]}/>
        </ProductContainer>
        <SectionCard>
            <SectionCard1 {...data[8]} content={'All-day backyard play'}/>
            <SectionCard1 {...data[9]} content={'Low prices on top gear'}/>
            <SectionCard1 {...data[10]} content={'A feast fit for Easter'}/>
        </SectionCard>
        </>
    );
}

export default ProductCard;