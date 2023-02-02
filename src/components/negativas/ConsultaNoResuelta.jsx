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
import { Link, useNavigate } from "react-router-dom";
import FeedIcon from '@mui/icons-material/Feed';
import deleteDb from "../../controllers/deleteDb";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { auth } from "../../firebase";
import Loading from "../Loading/Loading";


const ConsultaNoResuelta = () => {
  const navigate = useNavigate()
  const dataDb = useSelector(state => state.data)
  let data = dataDb.filter(r => r.orientacion === 'no')

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    console.log('id para borrar: ', id)
    deleteDb(id)
    alert('ingreso borrado')
    dispatch(getDataDb())
  };

  function validate(){
    if(!auth.currentUser)
      navigate('/')
  }

  useEffect(() => {
    setTimeout(() => {
      validate()
    }, 5000);
  },[]) 

  if(!auth.currentUser)
    return <Loading />
    
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>

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
              <TableCell className="tableCell">
                <a href={row.user} style={{ textDecoration: "none"}} >
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
          </div>
        </div>
  );
};

export default ConsultaNoResuelta;
