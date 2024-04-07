"use client"
import React from 'react'
import Login from '@/components/admin/AuthComponents/Login';
import Card1 from '@/components/admin/Card1/Card1'
import { useAuth } from '@/context/authContext';

const adminmainPage = () => {

  const { isLoggedIN } = useAuth();

  if (!isLoggedIN) {
    return <Login/>
  }
  return (
    <div>
      <Card1/>
    </div>
  )
}

export default adminmainPage