import React from 'react';

const IndividualEmployee = (props) => {
  const { data } = props
  const { firstName, lastName, department, email, dob, address, qualifications, joiningDate, designation, salary } = data;




  return (
    <tr>
      <td>{firstName} {lastName}</td>
      <td>{email}</td>
      <td>{dob}</td>
      <td>{address}</td>
      <td>{qualifications}</td>
      <td>{joiningDate}</td>
      <td>{designation}</td>
      <td>{salary}</td>
      <td>{department}</td>

    </tr>
  );
};

export default IndividualEmployee;
