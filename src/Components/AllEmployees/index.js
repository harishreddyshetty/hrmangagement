import { useEffect, useState } from 'react';
import {Vortex} from 'react-loader-spinner';
import { BsX } from "react-icons/bs";
import IndividualEmployee from '../IndividualEmployee';
import './index.css'


const AllEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [employeeData,setEmployeeData]=useState({first_name:"",id:"",
  date_of_birth:"",
  qualifications:"",
  department:"",
  salary:"",
  username:"",
  last_name:"",
  email:"",
  address:"",
  designation:"",
  joining_date:"",
})

 const handleAddEmployeeForm=(e)=>{
  e.preventDefault()
  

 }
 const OnchnageHandler=(e)=>{
  console.log([e.target.name])
  setEmployeeData({
    ...employeeData,
    [e.target.name]: e.target.value
  }
)

 }
  useEffect(() => {
    fetchEmployees();

  }, [])

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const popupForm = () => (
    <form className='form-group' onSubmit={handleAddEmployeeForm}>
      <div className="d-flex justify-content-end m-0">
        <button className="close-button" onClick={closePopup}>
          <BsX />
        </button>
      </div>
  
      <div className="d-flex">
        <div className="left-container">
          <div className="form-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' name='first_name' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="input" name='last_name' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="id">ID</label>
            <input type="text" className="input" name='id' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input type="text" className="input" name='email' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" className="input" name='dob' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="address">Address</label>
            <input type="text" className="input" name='address' onChange={OnchnageHandler} />
          </div>
        </div>
        <div>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <input type="text" className="input" name='username' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="qualifications">Qualifications</label>
            <input type="text" className="input" name='qualifications' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="joiningDate">Joining Date</label>
            <input type="date" className="input" name='joining_date' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="designation">Designation</label>
            <input type="text" className="input" name='designation' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="salary">Salary</label>
            <input type="text" className="input" name='salary' onChange={OnchnageHandler} />
          </div>
          <div className="form-field">
            <label htmlFor="department">Department</label>
            <input type="text" className="input" name='department' onChange={OnchnageHandler} />
          </div>
        </div>
      </div>
  
      <button type="submit" className="mt-3 submit-btn">
        Submit
      </button>
    </form>
  );
  

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
      setIsLoading(true);
    }
  };

  return (
    <div className='d-flex flex-column  align-items-center mt-2 '>
      <h1 className='heading'>All Employees of Openskale</h1>
      <button className="add-employee-btn" onClick={openPopup}>
        Add Employee
      </button>
      {isLoading ? (
        <div className=' tailspin d-flex flex-column justify-content-center'>
          <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['#003480','#97D7F7','#003E84','#97D7F7','#003480','#00ADEE']}
/>

        </div>) : (
        <table>
          <thead>
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
          </thead>
          <tbody>
          {
            
            employees.map((employee => (

              <IndividualEmployee data={employee} key={employee.empId}/>

            )))
          }
</tbody>
        </table>
      )}
      <div>
        {isPopupOpen && (
          <div className="popup-overlay">
            <div className="popup-content">{popupForm()}</div>
          </div>
        )}
      </div>
    </div>

  );
};

export default AllEmployees;
