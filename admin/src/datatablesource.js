export const userColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https:i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 300,
  },

  {
    field: "mssv",
    headerName: "MSSV",
    width: 150,
  },

  {
    field: "city",
    headerName: "City",
    width: 100,
  },

  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },

];

export const bookColumns = [
  { field: "_id", headerName: "ID", width: 220 },
  {
    field: "isbn",
    headerName: "ISBN",
    width: 120,
  },
  {
    field: "title",
    headerName: "Title",
    width: 400,
  },
  {
    field: "author",
    headerName: "Author",
    width: 200,
  },
  {
    field: "field",
    headerName: "Field",
    width: 70,
  },
  {
    field: "year",
    headerName: "Year",
    width: 70,
  },
  {
    field: "publisher",
    headerName: "Publisher",
    width: 200,
  },
];

export const slotColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 500,
  }
];