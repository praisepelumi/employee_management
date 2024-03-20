/* eslint-disable react/prop-types */
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function Add({ setAllEmployees }) {
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmployeeEmail] = useState("");
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [salary, setSalary] = useState("");

  const addEmployee = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        id: employeeId,
        first_name: firstName,
        last_name: lastName,
        email,
        title,
        department_id: departmentId,
        salary,
      };

      const response = await fetch("http://localhost:8080/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (data) {
        // setAllEmployees((prevState) => [...prevState, data]);
        setAllEmployees((prevState) => prevState.concat(data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          addEmployee(e);
        }}
      >
        <input
          type="text"
          placeholder="Employee Id"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmployeeEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department Id"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Add;
