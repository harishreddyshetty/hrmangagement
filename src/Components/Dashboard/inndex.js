import React from 'react'
import { TailSpin } from 'react-loader-spinner'
import { useEffect } from 'react'

const Dashboard = () => {

useEffect(()=>
fetchEmployeeDetails(),
[]
)
const fetchEmployeeDetails=async()=>{
    const response=await fetch('http//localhost:5000/get_all_employees')
}

  return (
    
    <div>
    <TailSpin type="Oval" color="#00BFFF" height={100} width={100} />

    <div/>
    
  )
}

export default Dashboard