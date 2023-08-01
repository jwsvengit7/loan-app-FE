import styled from 'styled-components'
import money from './Images/money-bill.png'
import money2 from './Images/money-insert.png'

import  money3 from './Images/message-square-lines.png';
import  money4 from './Images/Profile.png';
import  money5 from './Images/lock-alt.png';
import  logout from './Images/logout.png'
const SidebarD=()=>{
    return (
        <>
        <SideDashboard>
            <h1>Overview</h1>
            <SidedTfLX>
                <img src={money} width={30} />
                <span style={{color: "#2D00F7"}}>&nbsp;Loans</span>
            </SidedTfLX>
            <SidedTfLX>
                <img src={money2} width={30} />
                <span >&nbsp;Leading Offers</span>
            </SidedTfLX>
            <SidedTfLX>
                <img src={money3} width={30} />
                <span>&nbsp;Message</span>
            </SidedTfLX>
            <SidedTfLX>
                <img src={money4} width={30} />
                <span>&nbsp;Profile</span>
            </SidedTfLX>
            <h1>Overview</h1>
            <SidedTfLX>
                <img src={money5} width={30} />
                <span >&nbsp;Change Password</span>
            </SidedTfLX>
            <SidedTfLX>
            <img src={logout} width={30} />
                <span >&nbsp;Logout</span>
            </SidedTfLX>
         
            </SideDashboard>
        
        </>
    )
}

export default SidebarD

const SideDashboard =styled.div`
width:15%;
height:80vh;
background:white;
border-top:1px solid #ccc;
padding:20px
`

const SidedTfLX =styled.div`
width:90%;
height:40px;
display:flex;
align-items:center;
margin-bottom:10px;
margin-left:10px;
img{
    margin-right:10px;
}
span{
    color:#667085
}
`