import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function TablaSingle(props) {
  const { data, labels } = props
  console.log('tablaSingle: ', data)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {labels.map((r, i) => 
              <TableCell align="left">{r}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
         {/*  {rows.map((row) => ( */}
            <TableRow
              key={data.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{data.rescate}</TableCell>
             {/*  <TableCell align="center">{data.exp}</TableCell> */}
              <TableCell align="center">{data.sobrevivio}</TableCell>
              <TableCell align="center">{data.info}</TableCell>
              <TableCell align="center">{data.orientacion}</TableCell>
              <TableCell align="center">{data.atencion}</TableCell>
              <TableCell align="center">{data.auxilios}</TableCell>
              <TableCell align="center">{data.volunt}</TableCell>
            </TableRow>
      {/*     ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}