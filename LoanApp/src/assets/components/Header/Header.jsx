import { Headers ,LogoDiv,H1, PerfectLine, Img} from "../Styled/Styled";
import NavBar from './NavBar'
import logo from "../Images/logo_.png"
function Header(props){
    return (
        <>
        <Headers>
        <PerfectLine>
            <LogoDiv>
                <Img src={logo} alt="logo" width={50} />
                <H1>EasyLend</H1>
            </LogoDiv>
            {(props.navbar.length>0) ? <NavBar items={props.navbar} /> :""}
        </PerfectLine>
        </Headers>
        </>
    )
}

export default Header;