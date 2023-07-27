import { Body,AccountBox} from "../../../Styled/Styled";
import styled from 'styled-components'
import icon1 from '../images/icon (1).png'
import icon2 from '../images/icon (2).png'
import icon3 from '../images/icon (3).png'
import icon4 from '../images/icon (4).png'
import Information from "../KYC/Information";
const MainBody =()=>{
 

    return(
        <>
        <Body>
      
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;Finish Setting up your account</h1>

            <Account>
            <AccountBox>
                    <ImgAccount src={icon1} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>
                <AccountBox>
                    <ImgAccount src={icon2} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>
                <AccountBox>
                    <ImgAccount src={icon3} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>
                <AccountBox>
                    <ImgAccount src={icon4} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>
                <AccountBox>
                    <ImgAccount src={icon4} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>
                <AccountBox>
                    <ImgAccount src={icon1} alt=''>

                    </ImgAccount>
                    <h1>Conact Information</h1>

                </AccountBox>

            </Account>

            
        </Body>
      
        </>
    )
}

export default MainBody;

const Account =styled.div`
width:100%;
height:auto;
display:flex;
flex-wrap:wrap;

`

const ImgAccount =styled.img`
width:50px;
height:50x
`