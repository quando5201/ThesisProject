import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "En los reinos de taifa",
      img: "http://images.amazon.com/images/P/8420638307.01.LZZZZZZZ.jpg",
      customer: "quando52",
      date: "ITITIU19043",
      amount: "24/04",
      method: "27/04",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Plan of Attack",
      img: "http://images.amazon.com/images/P/074325547X.01.LZZZZZZZ.jpg",
      customer: "lpink",
      date: "BAFNIU19000",
      amount: "30/4",
      method: "05/05",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "The Curse of the Pharaohs",
      img: "http://images.amazon.com/images/P/0445406488.01.LZZZZZZZ.jpg",
      customer: "LTNguyen",
      date: "ITITIU19036",
      amount: "25/04",
      method: "29/04",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "The Dewey Decimal System of Love",
      img: "http://images.amazon.com/images/P/0451209710.01.LZZZZZZZ.jpg",
      customer: "Popo",
      date: "ITITIU19163",
      amount: "03/05",
      method: "10/05",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Gravelight",
      img: "http://images.amazon.com/images/P/0312865031.01.LZZZZZZZ.jpg",
      customer: "mthy",
      date: "ITITIU19056",
      amount: "04/05",
      method: "08/05",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Book</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">ID Student</TableCell>
            <TableCell className="tableCell">From Date</TableCell>
            <TableCell className="tableCell">To Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;