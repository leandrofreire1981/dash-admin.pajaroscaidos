import "./sugerencias.scss";
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
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";


const Sugerencias = () => {
  
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
   useEffect(() => {
/*     dispatch(getDataDb())
    return () => dispatch({
      type: CLEAR_DATA
    }) */
  },[]) 

  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      {/* <Datatable/> */}
      
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Sugerencia</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {data.length && data.map((row) => (
              <TableRow key={row.id}>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.sugerencias}
                </div>
              </TableCell>

              
              <TableCell className="tableCell">
                <div className="cellAction">
                  <Link to={`/encuestados/${row.id}`} style={{ textDecoration: "none" }}>
                    <div className="viewButton">Ver</div>
                  </Link>
                  <div className="deleteButton" onClick={() => handleDelete(row.id, setId)}>
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
          </div>
        </div>
  );
};

export default Sugerencias;
