import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => { //{item from List}
  return ( 
    <div className="searchItem">
      <img src={item.image} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.title}</h1>
        <span className="siDistance">Author: {item.author}</span>
        <span className="siTaxiOp"><button>{item.field}</button></span>
        <span className="siSubtitle">
          Type: {item.type}
        </span>
        <span className="siFeatures">Publisher: {item.publisher}</span>
        <span className="siCancelOp">Borrow free of charge</span>
        <span className="siCancelOpSubtitle">
          After ordering, come to see librarian to get book!!!
        </span>
      </div>
      <div className="siDetails">
        {item.isbn && <div className="siRating">
          <span>  ISBN: </span>
          <button>{item.isbn}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">Year: {item.year}</span> 
          <Link to={`/books/${item._id}`}> 
          <button className="siCheckButton">See availability</button> {/* navigate to book information page */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;