import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Components/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const { loading: authLoading } = useSelector(state => state.auth);
    const { loading: profileLoading } = useSelector(state => state.profile);

    if(authLoading || profileLoading) {
        return <div className='loader'></div>
    }
  return (
      <div className='flex w-full min-h-[calc(100vh-3.5rem)]'>
          <Sidebar />
          <div className='h-fit w-full'>
                  <Outlet/>
              
          </div>
    </div>
  )
}

export default Dashboard