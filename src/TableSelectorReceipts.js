import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'ID', headerName: 'ID', width: 130},
  { field: 'Name', headerName: 'Name', width: 130 },
  { field: 'Reimbursement ID', headerName: 'Reimbursement ID', width: 130 },
  { field: 'Total Miles', headerName: 'Total Miles', width: 130 },
  { field: 'Total Amount', headerName: 'Total Amount', width: 130 },
  { field: 'GPS Verified', headerName: 'GPS Verified', width: 130 },
  { field: 'Status', headerName: 'Status', width: 130 },
 
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
    <div style={{ height: 300, width: '97%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      
    </div>
  );
}