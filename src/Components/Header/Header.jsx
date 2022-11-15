import { HeaderFlex,HeaderButton,HeaderInput,HeaderSpan,HeaderLogo,Flex} from "./HeaderStyled";
// import './App.css';

function Header(){
return(
    <HeaderFlex>
        <Flex>        
            <HeaderLogo color="light">Co</HeaderLogo>
            <HeaderLogo color="secondary">mart</HeaderLogo>
        </Flex>
        <HeaderInput type="text" placeholder="  Search for products, brands and more.."/>
        <HeaderButton>Login</HeaderButton>
        <HeaderSpan className="material-symbols-outlined">favorite</HeaderSpan>
        <HeaderSpan className="material-symbols-outlined">shopping_cart</HeaderSpan>
    </HeaderFlex>
);

}

export default Header