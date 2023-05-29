import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import IndividualEmployee from './IndividualEmployee';

const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:8000/get_all_employees');
      const data = await response.json();
      setEmployees(data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching employees:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>All Employees of Openskale</h1>
      {isLoading ? (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      ) : (
        <table>
          <tr>
            <th>EmployeeName</th>
            <th>DOB</th>
            <th>ADDRESS</th>
            <th>QUALIFICATIONS</th>
            <th>JOININGDATE</th>
            <th>DESIIGNATION</th>
            <th>SALARY</th>
          </tr>
        {
        employees.map((employee) => (
  
            <IndividualEmployee data={employee} />
        
        ))
}
        
        </table>
      )}
    </div>
  );
};

export default AllEmployees;
