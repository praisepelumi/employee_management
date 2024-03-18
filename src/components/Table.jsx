/* eslint-disable react/prop-types */

// import "./Table.css";

function Table({ allEmployees, setAllEmployees }) {
  const deleteEmployee = async (employeeId) => {
    console.log(employeeId);
    try {
      const response = await fetch(
        `http://localhost:8080/api/delete/${employeeId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      setAllEmployees((prevState) =>
        prevState.filter((employee) => employee.employee_id !== employeeId)
      );

      console.log("Employee deleted successfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // const rows = [];

  // for (let i = 0; i < allEmployees.length; i++) {
  //   let employeeInfo = allEmployees[i];

  //   rows.push(
  //     <tr>
  //       <td>{employeeInfo.employee_id}</td>
  //       <td>{employeeInfo.first_name}</td>
  //       <td>{employeeInfo.last_name}</td>
  //       <td>{employeeInfo.email}</td>
  //       <td>{employeeInfo.title}</td>
  //       <td>{employeeInfo.department_name}</td>
  //       <td>{employeeInfo.salary}</td>
  //       <td>
  //         <div>
  //           <button
  //             onClick={() => {
  //               deleteEmployee(employeeInfo.employee_id);
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </div>
  //       </td>
  //     </tr>
  //   );
  // }

  return (
    <table cellSpacing="">
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Delete Employee</th>
        </tr>
      </thead>

      <tbody>
        {allEmployees &&
          allEmployees.map((employeeInfo) => {
            return (
              <tr key={employeeInfo.employee_id}>
                <td>{employeeInfo.employee_id}</td>
                <td>{employeeInfo.first_name}</td>
                <td>{employeeInfo.last_name}</td>
                <td>{employeeInfo.email}</td>
                <td>{employeeInfo.title}</td>
                <td>{employeeInfo.department_name}</td>
                <td>{employeeInfo.salary}</td>
                <td>
                  <div>
                    <button
                      onClick={() => {
                        deleteEmployee(employeeInfo.employee_id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="7">
            <hr />
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
