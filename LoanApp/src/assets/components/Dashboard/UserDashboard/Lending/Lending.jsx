import Header from "../../../Header/Header";
import { Flex } from "../../../Styled/Styled";
import { App } from "../DashboardStyled";
import styled from 'styled-components'
import SidebarD from "../SidebarD";
import { useState,useEffect } from "react";
import { Button } from "../../RegisterDashboard/Styled-dashboard";
import { FaAddressCard } from "react-icons/fa";

const Lending = ()=>{
  
    return (
        <>
        <Header navbar={[]} />
        <Flex>
            <SidebarD />
            <App>
            <h1>Lending Offers</h1>
            <p>See list of people willing to lend money at a repayment percentage.</p>

            <LendingContainer>
            <Layout>
                <Layout1><TimeFormat>Today Wednesday 30,2023</TimeFormat>
                <Button>Accespt Loan</Button>
                
                </Layout1>
                <span>&nbsp;Micheal John</span>
                <Layout1>
                    <span style={{width:"60%"}}>Lpariatur  fugit saepe dolorem obcaecati autem dolore reprehenderit quia alias sapiente. Sapiente, labore.</span>

     <Button style={{background:"white",color:"black",border:"1px solid #ccc"}}>Message <FaAddressCard /></Button>
                </Layout1>
                <Layout1>
                   <Buxrate>
                   <ButtonLoan>Offering N200,000</ButtonLoan>
                   <ButtonLoan style={{color:"green"}}>0.8% Percentage</ButtonLoan>
                   <ButtonLoan>90days Repayment</ButtonLoan>
                   </Buxrate>

  
                </Layout1>
                </Layout>
                <Layout>
                <Layout1><TimeFormat>Today Wednesday 30,2023</TimeFormat>
                <Button>Accespt Loan</Button>
                
                </Layout1>
                <span>&nbsp;Micheal John</span>
                <Layout1>
                    <span style={{width:"60%"}}>Lpariatur  fugit saepe dolorem obcaecati autem dolore reprehenderit quia alias sapiente. Sapiente, labore.</span>

     <Button style={{background:"white",color:"black",border:"1px solid #ccc"}}>Message <FaAddressCard /></Button>
                </Layout1>
                <Layout1>
                   <Buxrate>
                   <ButtonLoan>Offering N200,000</ButtonLoan>
                   <ButtonLoan style={{color:"red"}}>0.8% Percentage</ButtonLoan>
                   <ButtonLoan>90days Repayment</ButtonLoan>
                   </Buxrate>

  
                </Layout1>
                </Layout>
                <Layout>
                <Layout1><TimeFormat>Today Wednesday 30,2023</TimeFormat>
                <Button>Accespt Loan</Button>
                
                </Layout1>
                <span>&nbsp;Micheal John</span>
                <Layout1>
                    <span style={{width:"60%"}}>Lpariatur  fugit saepe dolorem obcaecati autem dolore reprehenderit quia alias sapiente. Sapiente, labore.</span>

     <Button style={{background:"white",color:"black",border:"1px solid #ccc"}}>Message <FaAddressCard /></Button>
                </Layout1>
                <Layout1>
                   <Buxrate>
                   <ButtonLoan>Offering N200,000</ButtonLoan>
                   <ButtonLoan style={{color:"green"}}>0.8% Percentage</ButtonLoan>
                   <ButtonLoan>90days Repayment</ButtonLoan>
                   </Buxrate>

  
                </Layout1>
                </Layout>
               


            </LendingContainer>


            </App>
        </Flex>

        
        </>

    );
}

export default Lending;

const LendingContainer = styled.div`
width:95%;
height:500px;
background:white;
overflow:scroll;
padding:20px;

`;

const Layout = styled.div`
width: 95%;
height: 180px;
padding: 10px;
border-radius: 16px;
border: 1px solid #ccc;
margin-bottom:20px;
gap: 56px

`
const Layout1 = styled.div`
width: 95%;
padding: 3px;
display:flex;
justify-content:space-between;
h1,h2,h3,h4{
    margin:0px
}


`

const ButtonLoan =styled.button`
background:white;
color:black;
border:1px solid #ccc;
border-radius:25px;
width:auto;
padding:10px
`
const TimeFormat=styled.div`
width:30%;

display:flex;
align-items:center
`

const Buxrate =styled.div`
width:50%;
s
height:70px;
display:flex;
justify-content:space-between;
align-items:center
`