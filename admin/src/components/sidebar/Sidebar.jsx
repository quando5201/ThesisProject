import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person from '@mui/icons-material/Person';
import Inventory2 from '@mui/icons-material/Inventory2';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PollIcon from '@mui/icons-material/Poll';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className="sidebar">
            <div className="top"> 
                <Link to="/" style={{ textDecoration: "none" }}> {/* move to URL defined in App.js */}
                    <span className="logo">Library Admin</span>
                </Link>
                
            </div>
            <hr/>
            <div className="center">
                <ul>
                <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}> {/* move to URL defined in App.js */}
                        <li>
                            <Person className='icon'/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/books" style={{ textDecoration: "none" }}> {/* move to URL defined in App.js */}
                        <li>
                            <Inventory2 className='icon'/>
                            <span>Books</span>
                        </li>
                    </Link >
                    <Link to="/slots" style={{ textDecoration: "none" }}> {/* move to URL defined in App.js */}
                    <li>
                        <ShoppingCartCheckoutIcon className='icon'/>
                        <span>Slots</span>
                    </li>
                    </Link>
                    <li>
                        <MeetingRoomIcon className='icon'/>
                        <span>Room</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <PollIcon className='icon'/>
                        <span>Status</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className='icon'/>
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <BookmarkBorderIcon className='icon'/>
                        <span>Order</span>
                    </li>
                    <li>
                        <PsychologyIcon className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <Settings className='icon'/>
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <Logout className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar