import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function createData(no, name, anggota, status) {
    return {no, name, anggota, status};
  }

const rows = [
    createData('1', 'Iqbal', 'korwil Tasikmalaya', 'Success'),
    
  ]; 


const Index = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" width={20}>No.</StyledTableCell>
            <StyledTableCell component="th"  width={170}>Nama Peserta</StyledTableCell>
            <StyledTableCell align="left"  width={300}>Anggota Dari Korwil</StyledTableCell>
            <StyledTableCell align="left">Status Infaq</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((data) => (
            <StyledTableRow key={data.no}>
              <StyledTableCell align="left">{data.no}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="left">{data.anggota}</StyledTableCell>
              <StyledTableCell align="left">{data.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Index;