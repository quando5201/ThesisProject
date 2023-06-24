import {
  faAddressCard,
    faBook,
    faBookOpen,
    faCalendarDays,
    faCamera,
    faChalkboardUser,
    faBookmark,
    faPenNib,
    faPrint,
    faChalkboardTeacher
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./header.css";
  import { DateRange } from "react-date-range";
  import { useContext, useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";
  import { useNavigate } from "react-router-dom";
  import { SearchContext } from "../../context/SearchContext";
  import { AuthContext } from "../../context/AuthContext";
  
  const Header = ({ type }) => {
    const [title, setTitle] = useState("");
    const [isbn, setIsbn] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
  
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const { dispatch } = useContext(SearchContext);
  
    const handleSearch = () => {
      dispatch({ type: "NEW_SEARCH", payload: { title, isbn, author, publisher, destination, dates, options } }); //load input data
      navigate("/books", { state: { title, isbn, author, publisher, destination, dates, options } });
    };

    const handleClick = () =>{
        navigate("/login");
    };

    const directStreamlit = () => {
      window.open("http://localhost:8501", "_blank");
    };
  
    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBook} />
              <span>Books</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faChalkboardUser} />
              <span>Study Rooms</span>
            </div><div className="headerListItem">
              <FontAwesomeIcon icon={faAddressCard} />
              <span>About</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                INTERNATIONAL UNIVERSITY 
              </h1>
              <p className="headerDesc">
                VIETNAM NATIONAL UNIVERSITY HCMC
              </p>
              {!user && <button onClick={handleClick} className="headerBtn">Sign in</button>}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBookOpen} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Title ?"
                    className="headerSearchInput"
                    onChange={(e) => setTitle(e.target.value)} //save input field
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBookmark} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="ISBN ?"
                    className="headerSearchInput"
                    onChange={(e) => setIsbn(e.target.value)} //save input field
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPenNib} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Author ?"
                    className="headerSearchInput"
                    onChange={(e) => setAuthor(e.target.value)} //save input field
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPrint} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Publisher ?"
                    className="headerSearchInput"
                    onChange={(e) => setPublisher(e.target.value)} //save input field
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Field ?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)} //save input field
                  />
                </div>
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                    dates[0].endDate,
                    "dd/MM/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])} //save input borrowing date
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={directStreamlit}><FontAwesomeIcon icon={faCamera} className="cameraIcon" /></button>
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;