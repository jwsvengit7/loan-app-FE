import {FormPage,Img,H1,
    Align,
    FormDiv,Form,FormLogo,
    SelectType,ButtonType,LogoDiv2,
    ButtonType2,
    LabelInput,
    LabelI,
    Input,
    FormImage,
    Botton,
    MainContent


} from '../Styled/Styled';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../Images/logo_.png"
import {Link} from 'react-router-dom'
const Password =()=>{
    return (
    <> 
    <Header navbar ={[]}/>

 
        <Align>
    <Form>
             
                <h1>Reset Your Password</h1>
                <span style={{
                    textAlign:"center"
                }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, ma fjddj ggdfgdgfd</span>
            
                <LabelInput>
              
                <LabelI>
                        Password
                        <Input type="password" placeholder="*********************"></Input>
                    </LabelI>
                   
                    <LabelI>
                        Confirm Password
                        <Input type="password" placeholder="*********************"></Input>
                    </LabelI>
                   
                  
                   <p></p>
                   
                     <Botton>Login</Botton>
                  


                </LabelInput>
                <p>Don't have an account ? <Link style={{color:"blue"}} to="/signup">Sign up here</Link></p>

                </Form>
                </Align>


    </>
    )
}

export default Password;