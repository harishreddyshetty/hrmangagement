import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';

const EmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/get_employee_profile');
        const data = await response.json();
        setEmployeeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Employee Details</h1>
      {loading ? (
        <div className="text-center">
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
          <p>Loading employee data...</p>
        </div>
      ) : (
        <div>
          <p>Serial Number: {employeeData.serialNum}</p>
          <p>ID: {employeeData.id}</p>
          <p>Name: {employeeData.EmployeeName}</p>
          <p>Address: {employeeData.EmployeeAdress}</p>
          <p>Qualifications: {employeeData.EmployeeQualifications}</p>
          <p>Joining Date: {employeeData.EmployeeJoiningDate}</p>
          <p>Designation: {employeeData.EmployeeDesignation}</p>
          <p>Salary: {employeeData.EmployeeSalary}</p>
        </div>
      )}
    </div>
  );
};


export default EmployeeDetails;
