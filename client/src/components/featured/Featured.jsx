import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch( //get data from url --> save data
    "/books/countByField?fields=IT,BA,Others" 
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/341119834_1046193666345406_7943352053318751105_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=c9c-pFT2qNMAX8vDATt&_nc_ht=scontent.fsgn5-13.fna&oh=03_AdTCd8SVWmmFl6XyiLtcUQULpzyfYhpnv6f3Un2TxIuLYw&oe=6496C373"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>IT</h1>
              <h2>{data[0]} books</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/340932358_757169699136331_2864205914086357189_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=sfuzxZhe3z8AX8bf7_t&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdRj2ewRy_KWqBYxT1Sy-SaZP-lcw8QbYZDlzCqwRNLrSQ&oe=6496C646"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>BA</h1>
              <h2>{data[1]} books</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/346155890_983493769318068_6663115744181644887_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-g2rnFWtcnUAX95GMxq&_nc_ht=scontent.fsgn5-11.fna&oh=03_AdRwJ6LaEnebnEIEpet8ZGc32aR4fsQoaYqVMoMuKxjdVQ&oe=6496B448"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Others</h1>
              <h2>{data[2]} books</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;