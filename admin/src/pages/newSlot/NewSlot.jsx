import "./newSlot.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { slotInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewSlot = () => {
  const [info, setInfo] = useState({});
  const [bookId, setBookId] = useState(undefined);
  const [slots, setSlots] = useState([]);

  const { data, loading, error } = useFetch("/books"); //get data through url of books

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const slotNumbers = slots.split(",").map((slot) => ({ number: slot }));
    try {
      await axios.post(`/slots/${bookId}`, { ...info, slotNumbers }); //post slot information to selected bookId
      navigate("/slots")
    } catch (err) {
      console.log(err);
    }
  };

  console.log(info)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Slot</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {slotInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Slots</label>
                <textarea
                  onChange={(e) => setSlots(e.target.value)}
                  placeholder="give comma between slot numbers."
                />
              </div>
              <div className="formInput">
                <label>Choose a book</label>
                <select
                  id="bookId"
                  onChange={(e) => setBookId(e.target.value)}
                >
                  {loading
                    ? "loading"
                    : data &&
                      data.map((book) => ( //select data of slots
                        <option key={book._id} value={book._id}>{book.title}</option>
                      ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSlot;