import styled from 'styled-components'
import background from '../Images/background.png'
import {FormPage,Img,H1,
    FormDiv,Form,FormLogo,
    SelectType,
    ButtonType,LogoDiv2,
    ButtonType2,
    LabelInput,
    LabelI,
    Input,
    FormImage,
    Botton


} from '../Styled/Styled'
import logo from '../Images/logo_.png'
import { Link  } from 'react-router-dom'
const Userforms =()=>{
    return(
        <>
        <FormPage>
            <FormDiv>
                <Form>
                <FormLogo>
                <LogoDiv2>
                <Img src={logo} alt="logo" width={50} />
                <H1>EasyLend</H1>
            </LogoDiv2>
                </FormLogo>
                <h1>Create a new Account</h1>
                <SelectType>
                <ButtonType value="BORROWER">
                    Borrower
                        
                        </ButtonType>
                        <ButtonType2 value="LENDER">
                            Lender
                        
                        </ButtonType2>

                </SelectType>
                <LabelInput>
                <LabelI>
                        Full Name
                        <Input type="" placeholder="Enter your full names"></Input>
                    </LabelI>
                    <LabelI>
                        Email Address
                        <Input type="" placeholder="Enter your email"></Input>
                    </LabelI>
                    <LabelI>
                        Password
                        <Input type="password" placeholder="*****************************"></Input>
                    </LabelI>
                    <LabelI style={{display:"flex"}}>
                        <input type="checkbox" style={{margin:"10px",width:"30px"}} />
                        <p style={{fontSize:"14px",color:""}}>
                        By continuing you agree to EasyLend‘s Terms of Service and Privacy Policy,
                        </p>

                     </LabelI>
                     <Botton>Sign up</Botton>
                  


                </LabelInput>
                <p>Already have an account ? <Link  style={{color:"blue"}} to="/login">Sign in here</Link></p>

                </Form>

            </FormDiv>
            <FormImage>

            </FormImage>

        </FormPage>
        
        
        </>
    )
}
export default Userforms;
