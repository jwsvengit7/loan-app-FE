import { Flex, Input, LabelI, Modar } from "../../Styled/Styled";
import SidebarD from "./SidebarD";
import styled from 'styled-components'
import frame from './Images/Frame 38813610.png'
import {useState,useEffect} from 'react'
import db from './Images/message-square-lines.png'
import axios from 'axios'
import reciept from './Images/receipt-alt.png'
import { Button } from "../RegisterDashboard/Styled-dashboard";

const MainDashboard =()=>{
    const [status,setStatus] = useState(false)
    const [loan,setLoan] = useState(false)
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(false);
    const [type, setButton] = useState("");
    const TOKEN = localStorage.getItem("TOKEN");
    console.log(TOKEN)

    const config = {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json', 
        },
      };

    const [confirmState, setConfirm] = useState(false);
    const [formData, setFormData] = useState({
        loanAmt: "",
        date: "",
        purpose: "",
        interestRate: "",
        requiredDocuments: "",
        
      });

    const loanIn =()=>{
        setLoan(true)
        setConfirm(false)

    }

    const goBack =()=>{
        setLoan(false)
        setConfirm(false)

    }


    
    
    
  
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
    }

    const [createdAt,setCreated] = useState("")
    const [interestRate,setinterestRate] = useState("")
    const [loanAmt,setloanAmt] = useState("")
    const [purpose,setpurpose] = useState("")
    const [repaymentTerm,setrepaymentTerm] = useState("")
    const [updatedAt,setupdatedAt] = useState("")
    const [totalRepayment,settotalRepayment] = useState("")
    const [data,setData] = useState([])


useEffect(()=>{

    fetch("http://localhost:8085/api/loanApplication",config)
    .then(response=> response.json())
    .then((data)=>{
        console.log(data)
        // if(data[0].)
        if(data.length>0){
            setState(true)
            setData(data)
            console.log(data[0])
            console.log(data[0].loanAmt)
            setCreated(data[0].createdAt)
            setinterestRate(data[0].interestRate)
            // setloanAmt(data[0].loanAmt)
           
            setloanAmt(data[0].loanAmt)

 


     
            setpurpose(data[0].purpose)
            setrepaymentTerm(data[0].repaymentTerm)
            setupdatedAt(data[0].updatedAt)
            settotalRepayment(data[0].totalRepayment)

        }
    })


},[])
    



function convert(loanAmt){
    const nairaFormat = loanAmt.toLocaleString("en-NG", {
        style: "currency",
        currency: "NGN",
      });
      
      console.log(loanAmt); // Output: ₦1,234,567.89
      
      const reducedFloat = loanAmt.toFixed(2);
      console.log(reducedFloat);

     
      return  setloanAmt(convert(loanAmt));
}
// convert(loanAmt)

    const confirm =()=>{
        setLoan(false)
        setConfirm(true)

    }

    const saved =(e)=>{
        e.preventDefault()


        const response = axios.post("http://localhost:8085/api/loanApplication/apply",{
            loanAmt:formData.loanAmt,
            interestRate:formData.interestRate,
            repaymentTerm:12,
            totalRepayment:2334,
            purpose:formData.purpose
        },config)
        

          .then((response) => {
            setLoading(false)
            console.log(response);
            swal("ALERT","SUCCESS","success")
           
          })
          .catch((error) => {
            setLoading(false)
            console.error(error);
          });

    }
  
    return (
        <>
        <Flex>
            <SidebarD />
            <App>
                <h1>Welcome to the dashboard</h1>
            <p>Wednessday May 31,2023</p>
         
           
           {(state) ?
           <DivI
           >
            <DivImp>
                <h2>Total Amount Borrowed</h2>
                <h1 style={{color:"#222",fontSize:"30px"}}><strike style={{color:"#222",fontSize:"30px"}}>N</strike>{loanAmt}</h1>
                <p>Interest Rate 0.5%</p>

            </DivImp>
            <DivImp>
                <h2>OutStanding Payemnt</h2>
                <h1 style={{color:"red",fontSize:"30px"}}><strike style={{color:"red",fontSize:"30px"}}>N</strike>{totalRepayment}</h1>
                <p>Interest Rate {interestRate}%</p>

            </DivImp>
            <DivImp2>
                <h2>Total Amount Borrowed</h2>
                <p>Amount</p>
                <p>Repayemt</p>

                <p>Date</p>
                <p>Interest per day</p>
                <p>Next Per day</p>

            </DivImp2>


           </DivI>
           :
           <>
              <DivIm>
            <img src={frame}  alt="" width={100} />
            </DivIm>
            

            </>
           }

            <AppContent>
                <img src={reciept} alt=" " width={50} height={50} />
                <h1>No Loans Invited yet</h1>
                <p>You have not initiated any loan applications thus far.</p>
                <Button onClick = {loanIn}>Request Loan</Button>


            </AppContent>
      

            </App>

            {(loan && !confirmState) ?
            <>
            <LoanModar>
                <Modar>
                    <RoleModar>
                        <h1>Loan Request</h1>
                        <button onClick={goBack}>x</button>
                    </RoleModar>
                    <FormI>
                    <LabelI style={{width:"100%"}}>
                        <p></p>
                        Loan Amount
                        <Input type="number" 
                        onChange={handleChange} 
                        value={formData.loanAmt} 
                        name="loanAmt"
                        placeholder="Loan Amount"></Input>
                    </LabelI>
                    <LabelI style={{width:"100%"}}>
                        <p></p>
                        Select Date
                        <Input type="date" 
                        onChange={handleChange} 
                        value={formData.date} 
                        name="date"
                        placeholder="Select Date"></Input>
                    </LabelI>
                    <LabelI style={{width:"100%"}}>
                        <p></p>
                        Select Purpose
                        <Input type="purpose" 
                        onChange={handleChange} 
                        value={formData.purpose} 
                        name="purpose"
                        placeholder="Select Purpose"></Input>
                    </LabelI>
              
                    <LabelI style={{width:"100%"}}>
                        <p></p>
                        Interest Rate 
                        <Input type="number" 
                        onChange={handleChange} 
                        value={formData.interestRate} 
                        name="interestRate"
                        placeholder="Enter  Interest Rate"></Input>
                    </LabelI>
                    <LabelI style={{width:"100%"}}>
                        <p></p>
                        Upload Supporting Document
                        <Input type="file" 
                        onChange={handleChange} 
                        value={formData.requiredDocuments} 
                        name="requiredDocuments"
                       ></Input>
                    </LabelI>

                    <Button onClick={confirm}>Continue</Button>
                    </FormI>


                    
                </Modar>


             
            </LoanModar>

          
            
            </>
            :""
            
        }

{confirmState ? (
  <LoanModar>
    <Modar>
    <RoleModar>
                        <h1>Confirmation</h1>
                        <button onClick={goBack}>x</button>
                    </RoleModar>

                    <RoleModar2 >
                    <RoleModar>
                    <p>Amount</p>
                  
                 
                        <p><strike>N</strike>{formData.loanAmt}</p>
                        </RoleModar>
                        <RoleModar>
                        <p>Date</p>
                        <p>{formData.date}</p>
                        </RoleModar>
                        <RoleModar>
                        <p>Purpose</p>
                        <p>{formData.purpose}</p>
                        </RoleModar>
                        <RoleModar>
                        <p>Interest rate</p>
                        <p>{formData.interestRate}</p>
                        </RoleModar>
                        <RoleModar>
                        <p>Supporting Document</p>
                        <p>NIN Card</p>
                        </RoleModar>
                        <Button onClick={saved}>Submit</Button>

                    </RoleModar2>
    </Modar>
  </LoanModar>
) : (
  ""
)}


        </Flex>
        </>
    )
}

export default MainDashboard;


const App =styled.div`
width:80%;
height:auto;
overflow:scroll;
background:#f8f8f8;
padding:20px
`

const DivIm =styled.div`
width:100%;
height:150px;
img{
    width:90%;
    height:100%
}
`

const AppContent =styled.div`
width:90%;
height:300px;
margin-top:30px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center

`

const LoanModar = styled.div`
width:100%;
height:100vh;
position:fixed;
z-index:999;
top:0px;
background:rgba(0,0,0,0.5);
display:flex;
justify-content:center;
align-items:center
`

const RoleModar =styled.div`
width:100%;
height:40px;
boder-bottom:1px solid #ccc;
display:flex;
justify-content:space-between;
align-items:center;
button{
    width:20px;
    height:20px;
    border-radius:40px;
    font-size:10px;
    border:0px;
}
`
const RoleModar2 =styled.div`
width:100%;
height:auto;
boder-bottom:1px solid #ccc;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column

`
const FormI =styled.form`
width:100%;
label{
    margin:top:10px
}

`

const DivI =styled.div`

width:100%;
height:auto;
padding:10px;
background:white;
display:flex;
`
const DivImp = styled.div`
width:300px;
height:150px;
border-radius:10px;
border:1px solid #ccc;
margin:10px;
padding:20px
`

const DivImp2 = styled.div`
width:300px;
height:150px;
border-radius:10px;
border:1px solid #ccc;
margin:10px;
padding:20px;
p{
    margin:0px;
    font-size:12px
}
`