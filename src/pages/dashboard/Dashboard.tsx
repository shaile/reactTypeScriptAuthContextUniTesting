
import { useAuthState, useAuthDispatch } from '@/context';
import  './Dashboard.css';
import { getAllUsers } from '@/context/Action';
import { useEffect } from 'react';
import GridData from './GridData';
import { Bomb } from '@/components/Error';

function Dashboard() { 
  const dispatch = useAuthDispatch(); 
  const {user, errorMessage} = useAuthState();

  useEffect(() =>{
    async function fetchUsers() {
      getAllUsers(dispatch)
    }
    fetchUsers()
  }, []);

  

	return (
		<>
      <Bomb error={errorMessage}/>
      <GridData data={user}/>
    </>
	);
}

export default Dashboard; 