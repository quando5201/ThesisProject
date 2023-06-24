import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./reserve.css"
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({setOpen, bookId})=>{ //bookId from Book
    const [selectedSlots, setSelectedSlots] = useState([]); 
    const { data, loading, error} = useFetch(`/books/slots/${bookId}`); //get slot information 
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
    
        const dates = [];
    
        while (date <= end) {
          dates.push(new Date(date).getTime());
          date.setDate(date.getDate() + 1);
        }
    
        return dates;
      };

      const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate); //borrowing dates

      const isAvailable = (slotNumber) => {
        const isFound = slotNumber.unavailableDates.some((date) => //check unavailable date of slot
          alldates.includes(new Date(date).getTime())
        );
    
        return !isFound;
      };
    
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedSlots( 
          checked
            ? [...selectedSlots, value]
            : selectedSlots.filter((item) => item !== value) 
        );
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
          await Promise.all(
            selectedSlots.map((slotId) => {
              const res = axios.put(`/slots/availability/${slotId}`, {
                dates: alldates, //update unavailable date
              });
              return res.data;
            })
          );
          setOpen(false)
          navigate("/")
        } catch (err) {}
      };

    return (
        <div className="reserve">
            <div className="rContainer">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="rClose"
                    onClick={()=> setOpen(false)}
                /> 
                <span>Select your books:</span>
                {data.map((item)=>(
                    <div className="rItem">
                        <div className="rItemInfo">
                            <div className="rTitle">{item.title}</div>           
                        </div>
                        <div className="rSelectRooms">
                            {item.slotNumbers.map((slotNumber)=>(
                                <div className="room">
                                    <label>{slotNumber.number}</label>
                                    <input 
                                        type="checkbox" 
                                        value={slotNumber._id} 
                                        onChange={handleSelect}
                                        disabled={!isAvailable(slotNumber)} //hide when have unavailable date
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rButton">Reserve Now!</button>
            </div>
        </div>
    );
};

export default Reserve;