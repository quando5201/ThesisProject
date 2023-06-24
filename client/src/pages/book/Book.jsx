import "./book.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

const Book = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2]; //get id from recent URL
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/books/find/${id}`); // input URL with id to get data
  const {user} = useContext(AuthContext); //xem xét dữ liệu tài khoản
  const navigate = useNavigate();
  const {dates, options} = useContext(SearchContext); //đưa dữ liệu về ngày mượn, trả

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) { //function for calculate total borowing date
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate); //calculate borrowing date

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  const handleClick = () => {
    if (user) { //check logged in or not
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading"
        ): (<div className="bookContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="bookWrapper">
          <button className="bookNow" onClick={handleClick}>Reserve or Order Now!</button>
          <h1 className="bookTitle">{data.title}</h1>
          <div className="bookAddress">
            <FontAwesomeIcon icon={faBookOpen} />
            <span>Field: {data.field}</span>
          </div>
          <span className="bookDistance">
            Written by – {data.author}
          </span>
          <span className="bookPriceHighlight">
            Publisher: {data.publisher}
          </span>
          <div className="bookImages">
            <img src={data.image} alt="" className="Image" />
          </div>
          <hr className="line"></hr>
          <div className="bookDetails">
            <div className="bookDetailsTexts">
              <h1 className="bookTitle">{data.title}</h1>
              <div className="DescTit">Year of publish: {data.year}</div>
              <div className="DescTit">ISBN: {data.isbn}</div>
              <div className="DescTit">Description</div>
              <p className="bookDesc">
                A former Instagram celebrity prepares to undergo an operation
                that will reverse all of her past plastic surgery procedures,
                in hopes of returning to a truer self. Leading up to the surgery,
                her traumatic past resurfaces as she’s asked to participate in 
                the public takedown of her former manager/boyfriend, who has 
                rebranded himself as a paragon of “woke” masculinity in the 
                post-#MeToo world. Aesthetica delivers a fresh, nuanced examination 
                of feminism, #MeToo and mother-daughter relationships, all while 
                confronting our collective addiction to followers, filters and faux realities.
              </p>
            </div>
            <div className="bookDetailsPrice">
              <h1> Perfect for improving knowledge in the {data.field} field</h1>
              <span>
              The final decision to lend a book is still up to the librarian according to regulations. 
              Go to the librarian after completing the loan order.
              </span>
              <h2>
              <b>Borrow {days * 1 * options.room} days</b> 
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div> 
        </div>
        <MailList />
        <Footer />
      </div>)}
      {openModal && <Reserve setOpen={setOpenModal} bookId={id}/>} {/* save id of selected book as BookID to return data on Modal */}
    </div>
  );
};

export default Book;