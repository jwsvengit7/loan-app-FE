import Header from "../../../Header/Header";
import { Flex } from "../../../Styled/Styled";
import { App } from "../DashboardStyled";
import styled from 'styled-components'
import SidebarD from "../SidebarD";
import { useState,useEffect } from "react";

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
                <Layout></Layout>


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
height: 100px;
padding: 16px;
border-radius: 16px;
border: 1px solid #ccc;
gap: 56px

`