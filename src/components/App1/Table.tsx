import React from "react";
import DataTable from "react-data-table-component";

interface User {
  firstname: string;
  lastname: string;
  email: string;
  date_of_birth: string;
  gender: string;
  marital_status: string;
  education: string;
}

interface TableProps {
  user: User;
}

const Table: React.FC<TableProps> = ({ user }) => {
  const {
    firstname,
    lastname,
    email,
    date_of_birth,
    gender,
    marital_status,
    education,
  } = user;

  const data = [
    {
      firstname,
      lastname,
      email,
      date_of_birth,
      gender,
      marital_status,
      education,
    },
  ];

  const columns = [
    { name: "First Name", selector: "firstname", sortable: true },
    { name: "Last Name", selector: "lastname", sortable: true },
    { name: "Email", selector: "email", sortable: true },
    { name: "Date of Birth", selector: "date_of_birth", sortable: true },
    { name: "Gender", selector: "gender", sortable: true },
    { name: "Marital Status", selector: "marital_status", sortable: true },
    { name: "Education", selector: "education", sortable: true },
  ];

  return (
    <div>
      <h2>User Data</h2>
      <DataTable title="User Data" columns={columns} data={data} />
    </div>
  );
};

export default Table;
