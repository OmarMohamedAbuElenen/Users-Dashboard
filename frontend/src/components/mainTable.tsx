import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { singleUser, usersType } from "../types/user";
import { ChangeEvent, FunctionComponent } from "react";
import { Box, Pagination, Stack } from "@mui/material";

interface MainTableProps {
  users?: usersType["data"];
  handelPagination?: (event: ChangeEvent<unknown>, page: number) => void;
  count?: number;
}
const MainTable: FunctionComponent<MainTableProps> = ({
  users,
  handelPagination,
  count,
}) => {
  return (
    <Box sx={{ py: "20px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Login</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row: singleUser) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.active ? "Active" : "Inactive"}</TableCell>
                <TableCell>{new Date(row.last_login).toDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "20px",
        }}
      >
        <Pagination count={count} onChange={handelPagination} />
      </Stack>
    </Box>
  );
};

export default MainTable;
