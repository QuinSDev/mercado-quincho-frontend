import React from 'react'
import { NavBarAdm } from '../components/NavBarAdm'
import { UserList } from '../components/UserList'
import { NavBar } from '../components/NavBar'

export const Dashboard = () => {
  return (
    
    <>
    <div data-theme="light">
    <NavBar/>
    <NavBarAdm/>
    <UserList/>
    </div>
    </>
  )
}
