import { Flex, ProductButton } from "../ProductCard/ProductCardStyled"
import {SearchContainer,SearchSelect,SearchOption,SearchForm,SearchFlex} from "./SearchResultFiltersStyled"
import '/Users/mano/Desktop/html/restuarant/comart/src/App.css';
import {BsStarFill,BsStarHalf,BsStar,BsCircleFill} from 'react-icons/bs'
import React from "react";

function SearchResultFilters({brands, data, updateProduct}){

    let oldData

    const filterProducts = e => {
        const val = e.target.value
        oldData = [...data]
        console.log(oldData)
        const newData = data.filter(d => d.brand == val)

        updateProduct(newData)

    }

    const resetData = () => {
        console.log('reset clicked')
        updateProduct(oldData)
    }

return(
    <SearchContainer>
        <h3>Filters <span style={{fontSize:'8px', cursor:'pointer', textDecoration:'underline'}} onClick={resetData} >&nbsp;clear filter</span></h3>
        <hr/>
        <p><b>Categories</b></p>
        <SearchForm>
            <SearchSelect name="Footwear" id="Footwear">
                <SearchOption value="Footwear">Footwear</SearchOption>
                <SearchOption value="Women">Women's Footwear</SearchOption>
                <SearchOption value="Kids">Kids & Infant Footwear</SearchOption>
                <SearchOption value="Mens">Men's Footwear</SearchOption>
            </SearchSelect>
        </SearchForm>
        <p><b>Price</b></p>
        <SearchForm >
            <input type="radio" id="Any Price" name="price" value="Any Price"/>
            <label for="Any Price">Any Price</label><br/>
            <input type="radio" id="25" name="price" value="25"/>
            <label for="25">$25 to $50</label><br/>
            <input type="radio" id="50" name="price" value="50"/>
            <label for="50">$50 to $100</label><br/>
            <input type="radio" id="100" name="price" value="100"/>
            <label for="100">$100 to $200 & more</label><br/>
        </SearchForm>
        <SearchFlex>
            <input type="text" style={{width:"25px", marginRight:"10px"}} placeholder="min"></input>
            <input type="text" style={{width:"25px", marginRight:"10px"}} placeholder="max"></input>
            <ProductButton style={{width:"70px"}}>Search</ProductButton>
        </SearchFlex>
        <p><b>Brand</b></p>
        <SearchForm >
            {brands.map((brand, index) => (
                <React.Fragment key={index}>
                   <input type="radio" id={brand} name="brand" value={brand} onChange={(e) => filterProducts(e)} />
                   <label for={brand}>{brand}</label><br/>
                </React.Fragment>
            ))}
            {/* <input type="radio" id="Adidas" name="brand" value="Adidas"/>
            <label for="Adidas">Adidas</label><br/>
            <input type="radio" id="Reebok" name="brand" value="Reebok"/>
            <label for="Reebok">Reebok</label><br/>
            <input type="radio" id="Clarks" name="brand" value="Clarks"/>
            <label for="Clarks">Clarks</label><br/>
            <input type="radio" id="Nike" name="brand" value="Nike"/>
            <label for="Nike">Nike</label><br/>
            <input type="radio" id="Underarmour" name="brand" value="Underarmour"/>
            <label for="Underarmour">Underarmour</label><br/>
            <input type="radio" id="Puma" name="brand" value="Puma"/>
            <label for="Puma">Puma</label><br/>
            <input type="radio" id="Calvin Klein" name="brand" value="Calvin Klein"/>
            <label for="Calvin Klein">Calvin Klein</label><br/>
            <input type="radio" id="Fila" name="brand" value="Fila"/>
            <label for="Fila">Fila</label><br/> */}
            {/* <SearchSelect name="Footwear" id="Footwear">See more
                <SearchOption value="Underarmour">Underarmour</SearchOption>
                <SearchOption value="Puma">Puma</SearchOption>
                <SearchOption value="Calvin Klein">Calvin Klein</SearchOption>
                <SearchOption value="Fila">Fila</SearchOption>
            </SearchSelect> */}
        </SearchForm>
        <p><b>Customer Ratings</b></p>
        <SearchForm >
            <input type="radio" id="4+" name="rating" value="4+"/>
            <label for="4+"><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></label><br/>
            <input type="radio" id="3+" name="rating" value="3+"/>
            <label for="3+"><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></label><br/>
            <input type="radio" id="2+" name="rating" value="2+"/>
            <label for="2+"><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></label><br/>
            <input type="radio" id="1+" name="rating" value="1+"/>
            <label for="1+"><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/><BsStar size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></label><br/>
        </SearchForm>
        <p><b>Colors</b></p>
        <SearchForm >
            <input type="radio" id="Beige" name="color" value="Beige"/>
            <label for="Beige"><BsCircleFill color="#dad0b7"/>Beige</label><br/>
            <input type="radio" id="Black" name="color" value="Black"/>
            <label for="Black"><BsCircleFill color="Black"/>Black</label><br/>
            <input type="radio" id="Blue" name="color" value="Blue"/>
            <label for="Blue"><BsCircleFill color="Blue"/>Blue</label><br/>
            <input type="radio" id="Bronze" name="color" value="Bronze"/>
            <label for="Bronze"><BsCircleFill color="#a17a7a"/>Bronze</label><br/>
            <input type="radio" id="Brown" name="color" value="Brown"/>
            <label for="Brown"><BsCircleFill color="Brown"/>Brown</label><br/>
        </SearchForm>

    </SearchContainer>
)
}

export default SearchResultFilters