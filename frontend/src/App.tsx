import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { getUsers } from "./apis/getUsers";
import "./App.css";
import MainTable from "./components/mainTable";
import { usersType } from "./types/user";
import UsersDashboard from "./components/dashboard";

function App() {
  const [users, setUsers] = useState<usersType>();
  const [page, setPage] = useState(1);
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<string>();

  const fetchUsers = async (page: number, name?: string, status?: string) => {
    const data = await getUsers(page, name, status);
    setUsers(data);
  };

  const handelPagination = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onSatutsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  useEffect(() => {
    fetchUsers(page, name, status);
  }, [page, name, status]);

  return (
    <div className="App">
      <UsersDashboard stats={users?.stats} />
      <TextField
        size="small"
        label="Name"
        variant="outlined"
        onChange={onNameChange}
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Status"
        size="small"
        sx={{ marginInlineStart: "20px", width: "190px" }}
        onChange={onSatutsChange}
      >
        <MenuItem key={"all"}>All</MenuItem>
        <MenuItem key={"active"} value={"True"}>
          Active
        </MenuItem>
        <MenuItem key={"inactive"} value={"False"}>
          Inactive
        </MenuItem>
      </TextField>
      <MainTable
        users={users?.data}
        handelPagination={handelPagination}
        count={Math.ceil(Number(users?.count) / 7)}
      />
    </div>
  );
}

export default App;
