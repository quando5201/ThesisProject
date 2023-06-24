import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/books/countByType"); //get data from url --> save data

  const images = [
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/342072011_253754343757596_879133980097765320_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=8h370ko_xdUAX-BH69f&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQ18fuR-aw70Sr42m1zMCBY-Xf-azvdqV5t3VU07Rv3lA&oe=6496B174",
    "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.15752-9/342149185_820070839821866_1969720382056879955_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=dTiJ5T0GJjIAX9e0Tvo&_nc_ht=scontent.fsgn5-3.fna&oh=03_AdQD9lL_T7e5Vh38_OATlLlXG-DlE7QO1SKVhZiuBlw3sA&oe=6496A909",
    "https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.15752-9/341000503_921407505572377_696745855510135193_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_ohc=bbN-3Y1oOdIAX-DJ5FJ&_nc_ht=scontent.fsgn5-13.fna&oh=03_AdR6Eh4hWnIPdBXr8M4G5xrTyRbb0gqtkNC_TFlrB2ADuQ&oe=6496C523",
    "https://scontent.fsgn5-11.fna.fbcdn.net/v/t1.15752-9/342127285_185417407649749_3983200582014590529_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=wvv8k1plP0gAX8a9XN_&_nc_ht=scontent.fsgn5-11.fna&oh=03_AdTp48YAgWONtS75pv46kK465Q717PjIbhFhqQgdkhW-lA&oe=6496D78E",
    "https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/342192759_159590233714296_7785097420293035238_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=mBjMxHZA5ecAX_nhz4u&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdR_ECw-mEIdMnidqwzYERWmgFemM2nAyxksltFCCC4yMg&oe=6496C0D4",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;