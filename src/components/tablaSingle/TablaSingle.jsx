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

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
              <TableCell align="center">{data.exp}</TableCell>
              <TableCell align="center">{data.sobrevivio}</TableCell>
              <TableCell align="center">{data.info}</TableCell>
              <TableCell align="center">{data.orientacion}</TableCell>
              <TableCell align="center">{data.auxilios}</TableCell>
              <TableCell align="center">{data.volunt}</TableCell>
            </TableRow>
      {/*     ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}