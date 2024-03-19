import { useEffect, useState } from "react";
import Table from "./Table";
import Add from "./Add";

function Top() {
  const [employeeId, setEmployeeId] = useState("");
  const [allEmployees, setAllEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This code block will run after the component renders for the first time
    // It's the equivalent of componentDidMount and componentDidUpdate combined

    // Make an API call or perform any asynchronous tasks here

    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    setError(null); // Reset error state
    try {
      const response = await fetch("http://localhost:8080/api/");
      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }
      const data = await response.json();
      setAllEmployees(data);
    } catch (err) {
      setError(err.message);
    }
  };

  // This gets an employee by their ID when you search
  const getByEmployeeId = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      console.log(employeeId);
      const response = await fetch(
        `http://localhost:8080/api/getbyid/${employeeId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch employee by ID");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        // If it's an array, set it directly
        setAllEmployees(data);
      } else {
        // If it's a single object, wrap it in an array
        setAllEmployees([data]);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div
      // style={{
      //   position: "absolute",
      //   // top: "50%",
      //   // left: "50%",
      //   // transform: "translate(-50%, -50%)",
      // }}
      >
        <h2>Family Service League Employee Management System</h2>
        <p>Please select an option</p>
        <button onClick={getAllEmployees}>View All Employees</button>

        <form onSubmit={getByEmployeeId}>
          <input
            type="text"
            placeholder="Enter employee ID"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>

        {error && <p>Error: {error}</p>}

        {allEmployees && (
          <Table
            allEmployees={allEmployees}
            setAllEmployees={setAllEmployees}
          />
        )}
        {/* {!allEmployees.length ? (
        <p>Loading...</p>
      ) : (
        <Table allEmployees={allEmployees} setAllEmployees={setAllEmployees} />
      )} */}
        {!allEmployees.length ? (
          <p>Loading...</p>
        ) : (
          <Add allEmployees={allEmployees} setAllEmployees={setAllEmployees} />
        )}
        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}

export default Top;
