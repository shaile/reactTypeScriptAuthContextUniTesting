
import { CardThumb } from '../../components';
import { Box, Grid } from '@mui/material';
import { useAuthState, useAuthDispatch } from '../../context';
import  './Dashboard.css';
import { Key, useEffect } from 'react';
import { getAllUsers } from '../../context/Action';

function Dashboard() { 
  const dispatch = useAuthDispatch(); 
  const {user} = useAuthState();

  useEffect(() =>{
    async function fetchUsers() {
      getAllUsers(dispatch)
    }
    fetchUsers()
  }, []);
	return (
		<>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {user && user.map((item: any, index: Key ) => (
          <Grid xs={2} sm={4} md={4} key={index}>
           <CardThumb item={item}/>
           </Grid>
        ))}
      </Grid>
    </Box>
    </>
	);
}

export default Dashboard;
