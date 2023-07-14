import styled from 'styled-components'
import background from '../Images/background.png'
import {FormPage,Img,H1,
    FormDiv,Form,FormLogo,
    SelectType,ButtonType,LogoDiv2,
    ButtonType2,
    LabelInput,
    LabelI,
    Input,
    FormImage,
    Botton


} from '../Styled/Styled'
import logo from '../Images/logo_.png'
import { Link  } from 'react-router-dom'
const UserFormsAuth =()=>{
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
                <h1>Welcome back to EasyLend</h1>
              
                
                <LabelInput>
              
                    <LabelI>
                        Email Address
                        <Input type="" placeholder="Enter your email"></Input>
                    </LabelI>
                    <LabelI>
                        Password
                        <Input type="password" placeholder="*****************************"></Input>
                    </LabelI>
                    <Link to="" >
                        Forget password
                    </Link>
                   <p></p>
                   
                     <Botton>Login</Botton>
                  


                </LabelInput>
                <p>Don't have an account ? <Link style={{color:"blue"}} to="/signup">Sign up here</Link></p>

                </Form>

            </FormDiv>
            <FormImage>

            </FormImage>

        </FormPage>
        
        
        </>
    )
}
export default UserFormsAuth;

