import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";

const List = () => {
  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [isbn, setIsbn] = useState(location.state.isbn);
  const [author, setAuthor] = useState(location.state.author);
  const [publisher, setPublisher] = useState(location.state.publisher);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);

  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  let url = `/books?type=book&min=${min || 1500 }&max=${max || 3000}`;

  if (title) {
    url += `&title=${title}`;
  }
  if (isbn) {
    url += `&isbn=${isbn}`;
  }
  if (destination) {
    url += `&field=${destination}`;
  }
  if (publisher) {
    url += `&publisher=${publisher}`;
  }
  if (author) {
    url += `&author=${author}`;
  }

  const { data, loading, error, reFetch } = useFetch(url);

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { title, isbn, author, publisher, destination, dates } }); //load input data
    navigate("/books", { state: { title, isbn, author, publisher, destination, dates } });
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Title</label>
              <input placeholder={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>ISBN</label>
              <input placeholder={isbn} type="text" onChange={(e) => setIsbn(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Author</label>
              <input placeholder={author} type="text" onChange={(e) => setAuthor(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Publisher</label>
              <input placeholder={publisher} type="text" onChange={(e) => setPublisher(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Field</label>
              <input placeholder={destination} type="text" onChange={(e) => setDestination(e.target.value)}/>
            </div>
            <div className="lsItem">
              <label>Borrowing time</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    From <small>year</small> 
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)} //save "From year"
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    To <small>year</small>  
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)} //save "To year"
                    className="lsOptionInput"
                  />
                </div>
              </div>
            </div>
            {/* <button onClick={handleSearch}>Search</button> */}
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => ( //data là các sách trong dữ liệu (selected field), item là từng sách
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;