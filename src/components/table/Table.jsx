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
import { CLEAR_DATA, getDataDb } from "../../redux/actions";
import { Link } from "react-router-dom";
import FeedIcon from '@mui/icons-material/Feed';
import deleteDb from "../../controllers/deleteDb";
import swal from 'sweetalert';


const List = () => {
  
  const data = useSelector(state => state.data)

  const dispatch = useDispatch()

  const handleProbar = () => {
    swal("Encuestado borrado con éxito");

  }

  const handleDelete = (id) => {
    console.log('id para borrar: ', id)
    deleteDb(id)
    swal("Encuestado borrado con éxito");
    dispatch(getDataDb())
  };
   useEffect(() => {
/*     dispatch(getDataDb())
    return () => dispatch({
      type: CLEAR_DATA
    }) */
  },[]) 

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
              
              <TableCell className="tableCell" >
                <a href={row.user} style={{ textDecoration: "none" }} >
                  {row.user}
                </a>
              </TableCell>
              
              
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to={`/encuestados/${row.id}`} style={{ textDecoration: "none" }}>
                    <div className="viewButton">Ver</div>
                  </Link>
                  <div className="deleteButton" onClick={() => handleDelete(row.id)}>
                    Borrar
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
