
import { useAuthState, useAuthDispatch } from '@/context';
import  './Dashboard.css';
import { getAllUsers } from '@/context/Action';
import { Suspense, useEffect, useState } from 'react'; 
import { bomb } from '@/components/Error';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { CircularProgress } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone', 
    sortable: false,
    width: 100
  },
  {
    field: 'country',
    headerName: 'Country', 
    sortable: false,
    width: 160
  },
  {
    field: 'city',
    headerName: 'City', 
    sortable: false,
    width: 160
  },
];


function Dashboard() { 
  const dispatch = useAuthDispatch(); 
  const {usersData, errorMessage, loading} = useAuthState();
  const [rows, setRows] = useState([])
  const [load, setLoad] = useState(null)

  useEffect(() =>{ 
    console.log('AAAAAA', loading);
    (errorMessage)? bomb: ''
    async function fetchUsers() {
      await getAllUsers(dispatch)
    }
    fetchUsers();
    setRows(usersData);
    setLoad(loading);
    
  }, []);

  

	return (
		<div style={{ height: 400, width: '100%' }}> 
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection 
      /> 
    </div> 
	);
}

export default Dashboard; 