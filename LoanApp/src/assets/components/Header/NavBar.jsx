import { Nav,Button } from "../Styled/Styled";
import {Link} from 'react-router-dom'
const NavBar = (props)=>{
    return(
        <>
        <Nav>
        <Link to="/">{props.items[0]}</Link>
        <Link to="/aboutUs">{props.items[1]}</Link>
        <Link to="/login">{props.items[2]}</Link>
        <Button>{props.items[3]}</Button>

        </Nav>

        </>
    )
}

export default NavBar;