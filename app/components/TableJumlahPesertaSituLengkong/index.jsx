"use client"

import * as React from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const columns = [
  { id: 'no', label: 'No' },
  { id: 'korwil', label: 'Asal Korwil', minWidth: 120 },
  { id: 'jumlah', label: 'Jumlah Anggota', minWidth: 60, align: 'start' },
  { id: 'note', label: 'Note', minWidth: 50, align: 'center' },
  ];

  function createData(no, korwil, jumlah, note) {
    return {no, korwil, jumlah, note};
  }

  const rows = [
    createData('1', 'Korwil Bandung Raya', '45 Anggota','-'),
    createData('2', 'Korwil Bekasi', '1 Anggota','-'),
    createData('3', 'Korwil Bogor Raya', '8 Anggota','-'),
    createData('4', 'Korwil Cianjur', '5 Anggota','-'),
    createData('5', 'Korwil Ciayumajakuning', '30 Anggota','-'),
    createData('6',  'Korwil Depok', '5 Anggota','-'),
    createData('7',  'Korwil Garut', '8 Anggota','-'),
    createData('8', 'Korwil Jakarta Raya', '21 Anggota','-'),
    createData('9', 'Korwil Ngapak Raya', '1 Anggota','-'),
    createData('10', 'Korwil Sukabumi', '11 Anggota','-'),
    createData('12', 'Korwil Sumedang', '10 Anggota','-'),
    createData('13', 'Korwil Tangerang', '21 Anggota','-'),
    createData('14',  'Korwil Tasikmalaya', '46 Anggota','-'),
    createData('15', 'Korwil Rating Banjar', '5 Anggota','-'),
    createData('16', 'Fans SDG/Belum Masuk Korwil', '10 Anggota','-'),
  ];

  
const Index = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(150);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
                <TableRow  >
                {columns.map((column, i) => (
                    <TableCell className="bg-gradient-to-r from-gray-300 to-gray-300 font-extrabold font-3xl"
                    key={i}
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
                .map((row, i) => {
                    return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                        {columns.map((column, i) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={i} align={column.align}>
                            {column.format == value && typeof value === 'number'
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
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}


export default Index;