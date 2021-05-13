import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    Width: 100,
  },
});

function createData(name, calories ) {
  return { name, calories };
}

const rows = [
  createData(<b>Group</b>, "Test Group 31"),
  createData(<b>Group Manager</b>, "sathi Test 138"),
  createData(<b>Products</b>, "??"),
  createData(<b>Payment Frequency</b>, "??"),
  createData(<b>Payment Appravl</b>, "??"),
  createData(<b>Mileage Capture</b>, "??"),
];

export default function DenseTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} >
      <Table style={{marginRight:"10%"}} className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left"></TableCell>
         
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              {/* <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}