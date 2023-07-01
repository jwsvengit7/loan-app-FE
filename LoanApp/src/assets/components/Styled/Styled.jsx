import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:100vh;
background:red
`
export const Headers = styled.header`
width:100%;
height:100px;
background:white;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.04);
display:flex;
justify-content:center

`
export const PerfectLine = styled.div`
width:90%;
height:100%;
display:flex;
align-items:center;
justify-content:space-between
`
export const LogoDiv =styled.div`
width:20%;
height:100%;
display:flex;
align-items:center;

`
export const Img =styled.img`
margin-right:10px;
`
export const H1 = styled.h1`
    font-family:sans-serif;
    font-size:30px

`
export const Nav =styled.nav`
width:28%;
height:90%;
display:flex;
align-items:center;
justify-content:space-between;
a{
text-decoration:none;
font-family:sans-serif;
color:#222
}
`
export const Button =styled.button`
width:124px;
height:46px;
background: rgba(45, 0, 247, 1);

color:white;
border-radius:100px;
border:0px none;
outline:none

`

export const MainDiv =styled.main`
width:100%;
height:800px;
background:#f8f8f8

`
export const FooterDiv =styled.footer`
width:89.9.7%;
height:300px;
background: rgba(71, 84, 103, 1);
padding:5%;
font-family:sans-serif

`
export const Footer_Container =styled.div`
width:100%;
height:250px;
border-bottom:1px solid #ccc;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center
`
export const Footer_ContainerDiv =styled.div`
width:100%;
height:50px;
display:flex;
justify-content:space-between
`
export const LeftDiv=styled.div`
width:30%;
height:100%;
display:flex;
align-items:center;
@media(max-width:600px){

}

`
export const RightDiv=styled.div`
width:10%;
height:100%;
display:flex;
align-items:center;
justify-content:space-around;
a{
color:white;
font-size:20px
}
`