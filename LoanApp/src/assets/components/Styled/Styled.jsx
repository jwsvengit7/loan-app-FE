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
width:85%;
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
width:30%;
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
width:154px;
height:46px;
background: rgba(45, 0, 247, 1);

color:white;
border-radius:100px;
border:0px none;
outline:none

`
export const LevelRol =styled.div`
width:100px;
height:20px;
background: rgba(45, 0, 247, 1);
border-top-right-radius:20px;
border-bottom-right-radius:20px;
`

export const MainDiv =styled.main`
width:100%;
height:auto;
background: rgba(45, 0, 247, 0.03);
display:flex;
flex-direction:column;
align-items:center
`
export const MainContent =styled.div`
width:85%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin-top:20px;
`
export const Content1 =styled.div`
width:45%;
height:600px;
display:flex;
justify-content:center;
flex-direction:column;
p{
    font-size:20px
}
a{
    color:#222;
    text-decoration:none;
    color:#003366
}
`
export const Content2 =styled.div`
width:40%;
height:auto;

display:flex;
align-items:center;
justify-content:space-around;
flex-direction:column;
:hover{
    width:100%;
    height:auto;
    transition-duration:2s
}

`
export const MainTwo =styled.div`
width:100%;
height:auto;
background: white;
display:flex;
flex-direction:column;
align-items:center;

`
export const Splash=styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-between

`
export const Con=styled.div`
width:30%;
height:auto;
display:flex;
`
export const SplashContent=styled.div`
width:20px;
height:20px;
margin:10px;
background: linear-gradient(195.61deg, #2D00F7 3.26%, #00BBF9 93.27%);
animation-duration:2s;
animation-iteration-count:infinite;
animation-name:anil;
transform:rotate(20deg)
@keyframes anil{
    from{
        transform:rotate(20deg)
    }
    to{
        transform:rotate(360deg)
    }
}

`
export const SplashImg =styled.div`
width:400px;
height:400px;
background: linear-gradient(195.61deg, #2D00F7 3.26%, #00BBF9 93.27%);
border-radius:24px;


img{
    width:100%;
    border-left-style:2px solid red;
    height:100%;
    margin-left:-5px;
    margin-top:5px
}
`
export const SplashBox =styled.div`
width: 100px;
height: 100px;


background: rgba(45, 0, 247, 0.1);
border-radius:100px;
position:relative;
top:-50px

`

export const FooterDiv =styled.footer`
width:89.9.7%;
height:250px;
background: rgba(71, 84, 103, 1);
padding:5%;
font-family:sans-serif

`
export const Award =styled.div`
width:50%;
height:auto;
display:flex;
justify-content:space-around
`
export const Certisfied =styled.div`
width:40%;
height:330px;
border:1px solid #ccc;
border-radius:10px;
padding:20px

`
export const AboutUs =styled.div`
width:100%;
height:200px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
h1{
    font-size:40px;
    margin-top:0px;
    

}
h2{
    font-size:30px;
    margin:0px
}
`
export const AboutBox =styled.div`
width:85%;
height:500px;

display:flex;
justify-content:space-around
`
export const BoxA =styled.div `
width:280px;
height:350px;
background:white;
border-radius:8px;
padding:24px;
box-shadow: 0px 2px 8px 0px #00000014;


`
export const ImageDiv =styled.div`
width:100%;
height:170px;

`
export const Imgs =styled.img`
width:100%;
height:100%;
`
export const Footer_Container =styled.div`
width:100%;
height:200px;
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
export const BlueDiv =styled.div`
width:60%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
h1{
    font-size:40px;
    text-align:center;
    color:white
}
h2{
    font-size:20px;
    margin:0px;
    color:white
}
p{
    text-align:center;
    color:white
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

export const BoxALL =styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-around;
flex-wrap:wrap

`

export const ALLBox =styled.div`
width:400px;
height:100px;
background:green;
margin:5px;
border-radius:10px
`
