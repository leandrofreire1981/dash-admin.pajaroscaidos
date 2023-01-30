import "./comun.scss";
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


const Volunt = () => {
  
  const dataDb = useSelector(state => state.data)
  const dispatch = useDispatch()

  let data = dataDb.filter(r => r.volunt === 'si' || r.volunt === 'Tal vez')
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
            <TableCell className="tableCell">Mails de personas dispuestas a tomar el curso de voluntariado:</TableCell>
        </TableHead>
        <TableBody>
          {data.length && data.map((row) => (
            <TableRow key={row.id} className='tableCell' >
                <div style={{ "padding-left": "15px"}}>
                  {row.email},
                </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </div>
  );
};

export default Volunt;
