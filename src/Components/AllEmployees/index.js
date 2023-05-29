import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import IndividualEmployee from '../IndividualEmployee';
import './index.css'


const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchEmployees();

  }, [])



  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://192.168.0.158:8000/get_all_employees');
      const data = await response.json();

      const CamelCaseData = await data.map(employee => ({
        lastName: employee.last_name,
        empId: employee.id,
        dob: employee.date_of_birth,
        qualifications: employee.qualifications,
        department: employee.department,
        salary: employee.salary,
        username: employee.username,
        firstName: employee.first_name,
        email: employee.email,
        address: employee.address,
        designation: employee.designation,
        joiningDate: employee.joining_date
}))


      setEmployees(CamelCaseData)
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching employees:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className='d-flex flex-column  align-items-center'>
      <h1 className='heading'>All Employees of Openskale</h1>
      {isLoading ? (
        <div className=' tailspin d-flex flex-column justify-content-center'>
          <TailSpin type="Oval" color="#00BFFF" height={60} width={60} />

        </div>) : (
        <table className='table-container'>
          <tr>
            <th>EMPLOYEENAME</th>
            <th>EMAIL</th>
            <th>DOB</th>
            <th>ADDRESS</th>
            <th>QUALIFICATIONS</th>
            <th>JOININGDATE</th>
            <th>DESIGNATION</th>
            <th>SALARY</th>
            <th>DEPARTMENT</th>
            
          </tr>
          {
            employees.map((employee => (

              <IndividualEmployee data={employee} key={employee.empId}/>

            )))
          }

        </table>
      )}
    </div>
  );
};

export default AllEmployees;
