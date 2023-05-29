import React from 'react';

const IndividualEmployee = (props) => {
    const {data}=props
  const { employeeName, dob, address, qualifications, joiningDate,designation,salary } = data;

  const firstCharacter = name.charAt(0).toUpperCase();

  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const avatarStyle = {
    backgroundColor: randomColor
  };

  return (
<tr>
  <td>{employeeName}</td>
  <td>{dob}</td>
  <td>{address}</td>
  <td>{qualifications}</td>
  <td>{joiningDate}</td>
  <td>{designation}</td>
  <td>{salary}</td>

</tr>
  );
};

export default IndividualEmployee;
