// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width:300,
//     height:50,
//     marginLeft:-6,
//     marginTop:-8,
//   },
// }));

// export default function DateAndTimePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="datetime-local"
//         label="Next appointment"
//         type="datetime-local"
//         defaultValue="2017-05-24T10:30"
//         id="outlined-password-input"
//         variant="outlined"
        

//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//     </form>
//   );
// }import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'Purpose', headerName: 'Purpose', width: 130},
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Group', headerName: 'Group', width: 130 },
  { field: 'Date', headerName: 'Date', width: 130 },
  { field: 'Time', headerName: 'Time', width: 130 },
  { field: 'Date', headerName: 'Date', width: 130 },
  { field: 'Miles', headerName: 'Miles', width: 130 },
  { field: 'Minutes', headerName: 'Minutes', width: 130 },
  { field: 'From', headerName: 'From', width: 130 },
  { field: 'To', headerName: 'To', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 30,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
];

const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  return (
    <div style={{ height: 300, width: '90%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      
    </div>
  );
}