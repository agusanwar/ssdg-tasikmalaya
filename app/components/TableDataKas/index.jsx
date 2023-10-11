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



const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'apr', label: 'apr', minWidth: 50, align: 'center' },
    { id: 'mei', label: 'mei', minWidth: 50, align: 'center' },
    { id: 'jun', label: 'jun', minWidth: 50, align: 'center' },
    { id: 'jul', label: 'jul', minWidth: 50 , align: 'center'},
    { id: 'ags', label: 'ags', minWidth: 50, align: 'center' },
    { id: 'sep', label: 'sep', minWidth: 50, align: 'center' },
    { id: 'okt', label: 'okt', minWidth: 50, align: 'center' },
    { id: 'nov', label: 'nov', minWidth: 50, align: 'center' },
    { id: 'des', label: 'des', minWidth: 50, align: 'center' },
    { id: 'jan', label: 'jan', minWidth: 50, align: 'center' },
    { id: 'feb', label: 'feb', minWidth: 50, align: 'center' },
    { id: 'mar', label: 'mar', minWidth: 50, align: 'center' },
  ];

  function createData(name, apr, mei, jun, jul, ags, sep, okt, nov, des, jan, feb, mar) {
    return { name, apr, mei, jun, jul, ags, sep, okt, nov, des, jan, feb, mar };
  }

  const rows = [
    createData('Aceng Wiandi', '-','-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'),
    createData('Ade', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ade Hendra Suhendar', '-','-', '-', '-', '-', '-', '-', ),
    createData('Ade Rohmat Guntara', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Adi Darmansyah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Adi Pandu Haryadi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Adiguna Pratama', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Agus Anwar', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Agus hendrayana', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Agus Rosdiat (eyang)', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ahdan Hamdanilah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ahmad Mustopa', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ahmad Romdon ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ahmad zenal mutakin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ajang Nursodiq ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Alsyahid Taufiq Hidayat', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Amin Andika putra', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Aming amiludin ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Andri Herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Arief rahman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Arip Rahmat Hidayat ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Awan Sudarwan ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ayi Hilmi Abdillah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Boni arsana', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Candra heriyanto', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Cuncun cundaya', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dani alfaz', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dani Rusmana', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dede Setiawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dede suherlin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dedi Suryadi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Deni Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dian Candra Rosidin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Didi herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dika Pratama', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dirman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dudi J', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Dudi Rahmat', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Egi sugitra ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Eka Bayu Prakosa', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ellan Syafa-at', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Encep riswanto', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Enda', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Engkos kostaman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Fahrul Ashari', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Fajar kusnandar', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Fajar Nurfadilah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Faqih (ade ridwan faqih)', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Firman Hermansyah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Gagan Garnawansah ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Gilang Ramadhan ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('H. Dede Irawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Hadi Rahman Miraj', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Hadianto', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Handi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Henra Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Heri Purwagandhi ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Heru Purwganda', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Iim Ruhimat', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Iim saepul imam', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Iman somantri ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Indra haidir rahman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Iqbal setiawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Irfan Ghifari', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Irfan Herfani', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Itmamul wafa', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Iwan Hediawan', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Jajang Wahyudin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Jehan Kartika', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Jeje Zaenudin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Jejen anggara', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Julyana muharam', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Kamaludin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Kusnandar ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Lupi ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Mandoyo sapto pribadi ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Miftah Wijaya ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Moch Al Hakim', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Muhammad jalaludin A', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Muhammad Yasin Gunawan ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Mulya mustakim', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Nunung Nurjamil', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rani Intan Fandini', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rian muhamad handani', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ridho Riyadillah', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Riki kharisma sandi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rizal Dimas ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rizal Mubarok', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rizki Maulana Saleh', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rizku Mauluddin', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rizky aji saputra', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rollin satria', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Rutiman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Shendi Gunawan ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Sidik pauzi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Sofyan saori', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Sulaeman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Sutrisno', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Syaefuloh', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('TB indra Haryyanto', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Toni Hidayat', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Trisna gusviana', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('U Yadi Setiadi', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ujang Maman', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Ujang muhamad yusuf', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Yogi Apriandi Yogaswara', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Yopi Insani', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Yusup bahtiar', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Yusup Jaelani', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    createData('Zulvi Sugianto ', '-','-', '-', '-', '-', '-', '-', '-','-', '-', '-', '-'),
    
  ];

  
const TableDataKas = () => {
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
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 500 }}>
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
            rowsPerPageOptions={[10, 25, 50, 100]}
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


export default TableDataKas;