"use client"
import React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'mei', label: 'mei', minWidth: 100, align: 'center' },
  { id: 'jun', label: 'jun', minWidth: 100, align: 'center' },
  { id: 'jul', label: 'jul', minWidth: 100 , align: 'center'},
  { id: 'ags', label: 'ags', minWidth: 100, align: 'center' },
  { id: 'sep', label: 'sep', minWidth: 100, align: 'center' },
  { id: 'okt', label: 'okt', minWidth: 100, align: 'center' },
  { id: 'nov', label: 'nov', minWidth: 100, align: 'center' },
  { id: 'des', label: 'des', minWidth: 100, align: 'center' },
  { id: 'jan', label: 'jan', minWidth: 100, align: 'center' },
  { id: 'feb', label: 'feb', minWidth: 100, align: 'center' },
  { id: 'mar', label: 'mar', minWidth: 100, align: 'center' },
  { id: 'apr', label: 'apr', minWidth: 100, align: 'center' },
];


function createData(name, mei, jun, jul, ags, sep, okt, nov, des, jan, feb, mar, apr) {
  return { name, mei, jun, jul, ags, sep, okt, nov, des, jan, feb, mar, apr };
}

const rows = [
  createData('Encep Riswanto', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', '-', '-', '-'),
  createData('Sutrisno', 'L', 'L', 'L', 'L', 'L', 'L', 'L', '-','-', '-', '-', '-'),
];

const Datakas = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="place-self-center text-left mt-10 ml-10 mr-10">
        <h1 className="text-white mb-4 text-4xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
            SSDG KORWIL TASIKMALAYA
            </span>
            <br></br> 
        </h1>
        <p className="text-2xl mt-5 mb-2">Data Iuran Kas Periode 2023</p>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead >
                <TableRow >
                {columns.map((column) => (
                    <TableCell className="bg-gradient-to-r from-gray-300 to-gray-300 font-extrabold font-3xl"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  );
}


export default Datakas;