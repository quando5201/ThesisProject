import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const Navbar = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const handleClick = () => {
        navigate("/login");
    }
    return(
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="logo">IU Library</span>
                </Link>
                {user ? user.username : (
                    <div className="navItem">
                        <button onClick={handleClick} className="navButton">Login</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;