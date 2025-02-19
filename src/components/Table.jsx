import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)({
  border: "1px solid black",
 
});

const StyledTableRow = styled(TableRow)({
  border: "1px solid black",
  
});

const MyTable = () => {
  const data = [
    { id: 1, tracking: "Standard Shipping", status: "1-3 Bussiness Days", carrier: "KSA-Based Sellers", destination: "Based on order value & weight" },
    { id: 2, tracking: "International Shipping (Within KSA)", status: "5-12 Bussiness Days", carrier: "UAE,  Pakistan, China", destination: "Based on location & logastic" },
  ];

  return (
    <TableContainer component={Paper} style={{ border: "1px solid black" }}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell><h3>Shipping Method</h3></StyledTableCell>
            <StyledTableCell><h3>Estimated Deleivery Time</h3></StyledTableCell>
            <StyledTableCell><h3>Shipping Origin</h3></StyledTableCell>
            <StyledTableCell><h3>Cost</h3></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.tracking}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.carrier}</StyledTableCell>
              <StyledTableCell>{row.destination}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
