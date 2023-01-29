import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDataDb } from "../../redux/actions";
import { Link } from "react-router-dom";
import FeedIcon from '@mui/icons-material/Feed';
import deleteDb from "../../controllers/deleteDb";


const List = () => {
  
  const data = useSelector(state => state.data)
  const [ id, setId ] = useState('')
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
    console.log('id para borrar: ', id)
    deleteDb(id)
    alert('ingreso borrado')
    dispatch(getDataDb())
    //window.location.href = window.location.href;
    //setId(id)
  };
  
 const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Nombre</TableCell>
            <TableCell className="tableCell">E-mail</TableCell>
            <TableCell className="tableCell">Celular</TableCell>
            <TableCell className="tableCell">Link</TableCell>
            <TableCell className="tableCell">Detalles</TableCell>
{/*             <TableCell className="tableCell">C. de 1º aux.</TableCell>
            <TableCell className="tableCell">Experiencia</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length && data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.full_name}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                {/*   <img src={row.img} alt="" className="image" /> */}
                  {row.email}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.celular}</TableCell>
              <a href={row.user} >
                <TableCell className="tableCell">{row.user}</TableCell>
              </a>
              
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to={`/users/${row.id}`} style={{ textDecoration: "none" }}>
                    <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton" onClick={() => handleDelete(row.id, setId)}>
                    Delete
                  </div>
                </div>
              </TableCell>
             {/*  <TableCell className="tableCell">{row.auxilios}</TableCell> */}
{/*               <TableCell className="tableCell">
                <span className={`status ${row.exp}`}>{row.exp}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
