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
  { id: 'no', label: 'No' },
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
  ];

  function createData(no, name, apr, mei, jun, jul, ags, sep, okt, nov, des) {
    return {no, name, apr, mei, jun, jul, ags, sep, okt, nov, des};
  }

  const rows = [
    createData('1', 'Aceng Wiandi', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('2', 'Ade', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('3','Ade Hendra Suhendar', '-','-', '-', '-', '-','-', '-', '-', '-'),
    createData('4','Ade Rohmat Guntara', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('5','Adi Darmansyah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('6','Adi Pandu Haryadi', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔','-'),
    createData('7','Adiguna Pratama', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('8','Agus Anwar', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('9','Agus hendrayana', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('10','Agus Rosdiat (eyang)', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('11','Ahdan Hamdanilah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('12','Ahmad Mustopa', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('13','Ahmad Romdon ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('14','Ahmad zenal mutakin', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('15','Ajang Nursodiq ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('16','Alsyahid Taufiq Hidayat', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('17','Amin Andika putra', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('18','Aming Amiludin ', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('19','Andri Herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('19','Andri Ishak ', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('20','Arief Rahman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('21','Arip Rahmat Hidayat ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('22','Awan Sudarwan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('23','Ayi Hilmi Abdillah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('24','Boni Arsana', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('25','Candra Heriyanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('26','Cuncun Cundaya', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('27','Dani Alfaz', '-','-', '-', '-', '-', '✔','✔', '-','-'),
    createData('28','Dani Rusmana', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('29','Dede Setiawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('30','Dede Suherlin', '✔','✔', '✔', '✔', '✔', '✔', '✔', '-','-'),
    createData('31','Dedi Suryadi', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('32','Deni Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('33','Dian Candra Rosidin', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('34','Didi herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('35','Dika Pratama', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('36','Dirman', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('37','Dudi J', '-','-', '-', '-', '✔', '✔', '✔', '✔', '✔'),
    createData('38','Dudi Rahmat', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('39','Egi sugitra ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('40','Eka Bayu Prakosa', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('41','Ellan Syafa-at', '✔','✔', '-', '-', '-', '-', '-', '-','-'),
    createData('42','Encep riswanto', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('43','Enda', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('44','Engkos kostaman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('45','Fahrul Ashari', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('46','Fajar kusnandar', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('47','Fajar Nurfadilah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('48','Faqih Ade Ridwan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('49','Firman Hermansyah', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('50','Gagan Garnawansah ', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('52','Gilang Ramadhan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('53','H. Dede Irawan', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('54','Hadi Rahman Miraj','✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('55','Hadianto', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('56','Handi', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('57','Henra Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('58','Heri Purwagandhi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('59','Hermawan','✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('60','Heru Purwaganda', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('62','Ihsan Jatnika Nugraha','✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('61','Iim Ruhimat', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('62','Iim Saepul imam','✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('63','Iman Somantri ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('64','Indra Saidir rahman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('65','Iqbal Setiawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('66','Irfan Ghifari', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('67','Irfan Herfani', '','', '', '', '✔','✔', '✔', '✔', '✔'),
    createData('68','Itmamul Wafa', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('69','Iwan Hediawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('70','Jajang Wahyudin', '-','-', '✔', '-', '-', '-', '-', '-','-'),
    createData('71','Jehan Kartika', '✔','✔', '-', '-', '-', '-', '-', '-','-'),
    createData('72','Jeje Zaenudin', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('73','Jejen Anggara', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('74','Julyana Muharam', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('75','Kamaludin', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('76','Kusnandar ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('77','Lupi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('78','Mandoyo sapto pribadi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('79','Miftah Wijaya ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('80','Moch Al Hakim', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('81','Muhammad jalaludin A', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('82','Muhammad Yasin Gunawan ','✔','✔', '-', '-', '-', '-', '-', '-','-'),
    createData('83','Mulya Mustakim', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('84','Nunung Nurjamil', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('85','Rani Intan Fandini', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('86','Rian Muhamad Handani', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('87','Ridho Riyadillah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('88','Riki Kharisma Sandi', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('89','Rizal Dimas ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('90','Rizal Mubarok', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('91','Rizki Maulana Saleh', '✔','✔', '✔', '-', '-', '-', '-', '-','-'),
    createData('92','Rizky Mauluddin', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('93','Rizky Aji Saputra', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('94','Rollin Satria', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('95','Rutiman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('96','Shendi Gunawan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('97','Sidik Pauzi', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('98','Sofyan Saori', '','', '', '', '✔', '✔', '✔', '✔','-'),
    createData('99','Sulaeman', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('100','Sutrisno', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('101','Syaefuloh', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('102','Syarifuloh', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '-'),
    createData('103','TB indra Haryyanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('104','Toni Hidayat', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('105','Trisna Gusviana','✔','✔', '-', '-', '-', '-', '-', '-','-'),
    createData('106','U Yadi Setiadi', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('107','Ujang Maman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('108','Ujang muhamad yusuf', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('109','Yogi Apriandi Yogaswara', '✔','✔', '✔', '-', '-', '-', '-', '-','-'),
    createData('110','Yopi Insani', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('111','Yusup bahtiar', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('112','Yusup Jaelani', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('113','Zulvi Sugianto ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    
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


export default Index;