import {FooterContainer,FooterSection,FooterLogo} from './FooterStyled'
import {HeaderLogo,Flex} from "../Header/HeaderStyled";

function Footer(){
    return(
        <>
        <FooterContainer>
            <div><b>Get to know US</b>
                <FooterSection style={{paddingTop:'10px'}}>Careers</FooterSection>
                <FooterSection>Blog</FooterSection>
                <FooterSection>About Comart</FooterSection>
                <FooterSection>Investor Relations</FooterSection>
                <FooterSection>Comart Devices</FooterSection>
                <FooterSection>Comart Science</FooterSection>
            </div>
            <div><b>Make Money with US</b>
                <FooterSection style={{paddingTop:'10px'}}>Sell on Comart</FooterSection>
                <FooterSection>Become an Affiliate</FooterSection>
                <FooterSection>Promote Products</FooterSection>
                <FooterSection>Teams</FooterSection>
                <FooterSection>Comart Forums</FooterSection>
            </div>
            <div><b>About Comart</b>
                <FooterSection style={{paddingTop:'10px'}}>Comart Policies</FooterSection>
                <FooterSection>Investors</FooterSection>
                <FooterSection>Press</FooterSection>
                <FooterSection>Comart Impact</FooterSection>
                <FooterSection>Legal Imprint</FooterSection>
                <FooterSection>Terms and Condition</FooterSection>
            </div>
            <div><b>Comart Help</b>
                <FooterSection style={{paddingTop:'10px'}}>Help Center</FooterSection>
                <FooterSection>Trust and Safety</FooterSection>
                <FooterSection>Privacy Settings</FooterSection>
                <FooterSection>Terms of Use</FooterSection>
            </div>
        </FooterContainer>
        <FooterLogo>
            <Flex>        
                <HeaderLogo color="primary">Co</HeaderLogo>
                <HeaderLogo color="secondary">mart</HeaderLogo>
            </Flex>

        </FooterLogo>
        </>
    )
}

export default Footer;