import React, { useState,useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import Header from '../../../Header/Header';
import ContactInfo from './ContactInfo';
import { Flex, SideDiv, Body } from '../../../Styled/Styled';
import {
  Info,
  InfoContainers,
  WrapContent,
  Label,
  Div,
  ContentButton,
  InputSelect,
  Button,
  InputField,
  ButtonForm,
  UPLOAD,

  UploadImg,
  PreloaderImage,
} from '../../RegisterDashboard/Styled-dashboard';
import axios from 'axios';

import fileshield from '../images/file-shield-alt.png'

const Contact = () => {
    const { id } = useParams();
    const [count,setCount] = useState(1);
    const [image,setImage] =useState(null);
    const [imageUrl,setImageUrl] =useState(null)

  const [formdata, setFormdata] = useState({
    name: '',
    lastname: '',
    email: '',
    number: '',
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setImageUrl(objectUrl);
    
    console.log(image)
    console.log(imageUrl)
  };

  function save(event) {
    const { name, value } = event.target;
    setFormdata((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function checkType() {
    if (formdata.name === '' || formdata.lastname === '' ||
     formdata.email === '' || formdata.number === '') {
      return false;
    }
    return true;
  }

  function next(){
    setCount(count+1)


  }

  const [banks, setBanks] = useState([]);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName,setAccountName] = useState("")
  const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    axios.get("https://api.paystack.co/bank")
      .then(response => {
        console.log(response.data.data);
        setBanks(response.data.data);
      });
  }, []);

  return (
    <>
      <Header navbar={[]} />
      <Flex>
        <SideDiv>
          <ContactInfo status={checkType()} />
        </SideDiv>
        <Body>
          <Info>
            {(id==1)?
            
        <>
            <h1>Contact Information</h1>
            <InfoContainers>
              <WrapContent>
                <Label>First Name</Label>
                <InputField
                  type="text"
                  name="name"
                  value={formdata.name}
                  onChange={save}
                />
              </WrapContent>
              <WrapContent>
                <Label>Last Name</Label>
                <InputField
                  type="text"
                  name="lastname"
                  value={formdata.lastname}
                  onChange={save}
                />
              </WrapContent>
              <WrapContent>
                <Label>Email Address</Label>
                <InputField
                  type="email"
                  name="email"
                  value={formdata.email}
                  onChange={save}
                />
              </WrapContent>
              <WrapContent>
                <Label>Phone Number</Label>
                <InputField
                  type="number"
                  name="number"
                  value={formdata.number}
                  onChange={save}
                />
              </WrapContent>

              <ContentButton>
                {/* <Button onClick={next} type="button">Continue</Button> */}
                <Link to={`../kyc/`+2}><Button>Continue</Button></Link>
              </ContentButton>
            </InfoContainers>

            </>

:""}

{(id==2)?
            
            <>
                <h1>Employment Status</h1>
                <InfoContainers>
                  <WrapContent>
                    <Label>Have you ever been employed before?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>

                      </InputSelect>
                
                  </WrapContent>
                  <WrapContent>
                    <Label>How much do you earn?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}><option>Select</option>

                      </InputSelect>
                  </WrapContent>
                  <WrapContent>
                    <Label>Which best described your employment situation?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>

                      </InputSelect>
                  </WrapContent>
                  <WrapContent>
                    <Label>What kind of work do you do?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>
                      </InputSelect>
                  </WrapContent>
    
                  <ContentButton>
                 
                    <Link to={`../kyc/`+1}><Button style={
                        {
                            background:"#EAECF0",
                            
                            color:"#222"
                        }
                    }>Previous</Button></Link>&nbsp;&nbsp;

                    <Link to={`../kyc/`+3}><Button>Continue</Button></Link>
                  </ContentButton>
                </InfoContainers>
    
                </>
    
    :""}
        {(id==3)?        
            <>
                <h1>Employment Status</h1>
                <InfoContainers>
                  <WrapContent>
                    <Label>Document Type</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>
                      </InputSelect>
                
                  </WrapContent>
                  <WrapContent>
                    <Label>How much do you earn?</Label>
                    <InputField
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}
                      />
                  </WrapContent>
         <UploadImg htmlFor="file-upload">

                <ButtonForm   type="button" style={{
                    background:"unset",
                borderBottom:"1px solid #ccc",
                color:"#222",margin:"0px"
                }}>Upload Event Banner</ButtonForm>

            {(imageUrl!=null) ? 
                <PreloaderImage>
                    <img 
                src={imageUrl} 
                alt={imageUrl}  
                style={{width:"100%",
                height:"100%"}} />
                </PreloaderImage>

                :
                <UPLOAD>
                <img 
                src={fileshield} 
                alt={fileshield} 
                width={200} />
                <p>Drag file here to</p>
                <span>Upload or Choose file</span>

            </UPLOAD>
}

</UploadImg>
<input type="file" style={{display:"none"}} name="file" id="file-upload"   onChange={handleFileChange}  />
    
                  <ContentButton>
                    <Link to={`../kyc/`+2}><Button
                    type="button"
                     style={
                        {
                            background:"#EAECF0",                          
                            color:"#222"
                        }
                    }>Previous</Button></Link>&nbsp;&nbsp;
                    <Link to={`../kyc/`+4}><Button>Continue</Button></Link>
                  </ContentButton>
                </InfoContainers>
    
                </>
    
    :""}

{(id==4)?
            
            <>
                <h1>Employment Status</h1>
                <InfoContainers>
                  <WrapContent>
                    <Label>Have you ever been employed before?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>

                      </InputSelect>
                
                  </WrapContent>
                  <WrapContent>
                    <Label>How much do you earn?</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}><option>Select</option>

                      </InputSelect>
                  </WrapContent>
                  <WrapContent>
                    <Label>Do you have any other sources of income besides your salary?</Label>
                    <Div>
                        
                    <InputField
                      type="radio"
                      name="name"
                      value="YES"
                      onChange={save}
                      
                      />
                      Yes
                      
                        <InputField
                      type="radio"
                      name="name"
                      value="NO"
                      onChange={save}
                      
                      />
                      No

                    </Div>
  
                  </WrapContent>
                  <WrapContent>
                    <Label>Which of these best describes your monthly extra income</Label>
                    <InputSelect
                      type="text"
                      name="name"
                      value={formdata.name}
                      onChange={save}>
                        <option>Select</option>
                      </InputSelect>
                  </WrapContent>
                  <ContentButton>
                    <Link to={`../kyc/`+3}><Button style={
                        {
                            background:"#EAECF0",
                            color:"#222"
                        }
                    }>Previous</Button></Link>&nbsp;&nbsp;

                    <Link to={`../kyc/`+5}><Button>Continue</Button></Link>
                  </ContentButton>
                </InfoContainers>
    
                </>
    
    :""}



{(id==5)?        
            <>
                <h1>Employment Status</h1>
                <InfoContainers>
             
        
         <UploadImg htmlFor="file-upload">

                <ButtonForm   type="button" style={{
                    background:"unset",
                borderBottom:"1px solid #ccc",
                color:"#222",margin:"0px"
                }}>Upload Event Banner</ButtonForm>

            {(imageUrl!=null) ? 
                <PreloaderImage>
                    <img 
                src={imageUrl} 
                alt={imageUrl}  
                style={{width:"100%",
                height:"100%"}} />
                </PreloaderImage>

                :
                <UPLOAD>
                <img 
                src={fileshield} 
                alt={fileshield} 
                width={200} />
                <p>Drag file here to</p>
                <span>Upload or Choose file</span>

            </UPLOAD>
}

</UploadImg>
<input type="file" style={{display:"none"}} name="file" id="file-upload"   onChange={handleFileChange}  />
    
                  <ContentButton>
                    <Link to={`../kyc/`+4}><Button type="button" style={
                        {
                            background:"#EAECF0",                          
                            color:"#222"
                        }
                    }>Previous</Button></Link>&nbsp;&nbsp;
                    <Link to={`../kyc/`+6}><Button>Continue</Button></Link>
                  </ContentButton>
                </InfoContainers>
    
                </>
    
    :""}

{(id==6)?
            
            <>
                <h1>Link Bank Account</h1>
                <InfoContainers>
             

<WrapContent>
                    <Label>Bank Name</Label>
                    <InputSelect
                      type="text"
                      name="bank"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)} 
                      >
                        {banks.map((val, index) => (
                    <option key={index} value={val.name}>{val.name}</option>
                  ))}
                      </InputSelect>
                
                  </WrapContent>
                  <WrapContent>
                    <Label>Account Number</Label>
                    <InputField
                      type="text"
                      name="name"
                      value={accountNumber}
                      onChange={save} />
                  </WrapContent>
                
                   
                
    
                  <ContentButton>
                 
                    <Link to={`../kyc/`+4}><Button type="button" style={
                        {
                            background:"#EAECF0",
                            color:"#222"
                        }
                    }>Previous</Button></Link>&nbsp;&nbsp;

                    <Button>Submit</Button>
                  </ContentButton>
                </InfoContainers>
    
                </>
    
    :""}

          </Info>
        </Body>
      </Flex>
    </>
  );
};

export default Contact;

