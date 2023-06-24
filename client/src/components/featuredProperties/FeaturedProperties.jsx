import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/books?featured=true&limit=4"); //get data from url --> save data

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.image}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.title}</span>
              <span className="fpCity">Field: {item.field}</span>
              <span className="fpPrice">Author: {item.author}</span>
              {item.year && <div className="fpRating">
                Year: <button>{item.year}</button>
              </div>}
            </div>
          ))}            
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;                                                                     