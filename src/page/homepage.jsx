import Header from "../Components/Header/Header";
import ProductCard from '../Components/ProductCard/ProductCard'
import Footer from "../Components/Footer/Footer"

const HomePage = (props) =>{
    console.log(props)
    return(
        <>
        <Header/>
        <ProductCard data={props.data}/>
        <Footer/>
        </>
    );

}

export default HomePage;