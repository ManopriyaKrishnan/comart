import {ProductDescContainer,Flex,ProductDiscount,ProductDescPrice} from './ProductCardStyled'

function ProductDescription({image_url, brand, display_name,categories, discount, newPrice, oldPrice, rating }){

    let price
    
    
    if (newPrice && oldPrice) {
        price = (

        <div>
            <span>${newPrice}</span>
            <span style={{textDecoration: 'line-through'}}>${oldPrice}</span>
        </div> 
        )
    } else if (newPrice) {
        
       price = (

        <div>
            ${newPrice}
        </div>
       )
    } else {
        price = null
    }

    return(
        <ProductDescContainer>
            <Flex>
            <img src ={image_url} alt={display_name} style={{width:"100px", height:'100px',paddingLeft: '30px'}}/>
            <div style={{color:'#363535',fontSize: 'small'}}>{brand}</div>
            <div style = {{fontWeight:'bold'}}>{display_name}</div>
            <div>{categories}</div>
            {rating && <div>{rating}</div>}
            {discount && <ProductDiscount>Upto {discount}% OFF</ProductDiscount>}
            <ProductDescPrice>{price}</ProductDescPrice>
            
            </Flex>
        </ProductDescContainer>
        
    )
}

export default ProductDescription;