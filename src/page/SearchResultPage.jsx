import Header from "../Components/Header/Header";
import '../App.css';
import SearchResultFilters from "../Components/SearchResult/SearchResultFilters"
import ProductDescription from "../Components/ProductCard/ProductDescription"
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs'
import Footer from "../Components/Footer/Footer"

const SearchResultPage = ({data, updateProduct}) =>{
    // console.log("SearchResultFilters",data)

    const brands = []
    data.forEach(d => {
        if (brands.indexOf(d.brand) === -1 ){
            brands.push(d.brand)
        }
    })
    console.log(brands)

    return(
        <div>
        <Header/>
        <div className="SearchResultContent">
            <SearchResultFilters data={data} brands = {brands} updateProduct={updateProduct}/>
            <div>
                <div className="Flex">

                {data.map((d, idx) => (
                    <ProductDescription key={idx} {...d} />
                ))}
                </div>
                {/* <div className="Flex"> 
                    <ProductDescription {...data[0]} newPrice={10} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={15} discount= {null}/>
                    <ProductDescription {...data[1]} newPrice={22} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={45} discount= {null}/>
                    <ProductDescription {...data[2]} newPrice={40} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={75} discount= {null}/>
                    <ProductDescription {...data[3]} newPrice={13} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={35} discount= {null}/>
                </div>
                <div className="Flex"> 
                    <ProductDescription {...data[4]} newPrice={10} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={15} discount= {null}/>
                    <ProductDescription {...data[5]} newPrice={22} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={45} discount= {null}/>
                    <ProductDescription {...data[6]} newPrice={40} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={75} discount= {null}/>
                    <ProductDescription {...data[7]} newPrice={13} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={35} discount= {null}/>
                </div>
                <div className="Flex"> 
                    <ProductDescription {...data[8]} newPrice={10} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={15} discount= {null}/>
                    <ProductDescription {...data[9]} newPrice={22} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={45} discount= {null}/>
                    <ProductDescription {...data[1]} newPrice={40} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/></>} oldPrice={75} discount= {null}/>
                    <ProductDescription {...data[2]} newPrice={13} rating={<><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarFill size={15} color={"gold"}/><BsStarHalf size={15} color={"gold"}/><BsStar size={15} color={"gold"}/></>} oldPrice={35} discount= {null}/>
                </div> */}
            </div>
           
           
        </div>
        <Footer/>
        </div>
    );

}

export default SearchResultPage;