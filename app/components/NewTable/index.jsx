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

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }
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
    createData('20','Andri Ishak ', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('21','Arief Rahman', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('22','Arip Rahmat Hidayat ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('23','Awan Sudarwan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('24','Ayi Hilmi Abdillah', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('25','Boni Arsana', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('26','Candra Heriyanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('27','Cuncun Cundaya', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('28','Dani Alfaz', '-','-', '-', '-', '-', '✔','✔', '-','-'),
    createData('29','Dani Rusmana', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('30','Dede Setiawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
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
    createData('107','Ujang Maman Suherman', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('108','Ujang muhamad yusuf', '✔','✔', '✔', '✔', '✔', '-', '-', '-','-'),
    createData('110','Yogi Apriandi Yogaswara', '✔','✔', '✔', '-', '-', '-', '-', '-','-'),
    createData('111','Yopi Insani', '-','-', '-', '-', '-', '-', '-', '-','-'),
    createData('112','Yusup bahtiar', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('113','Yusup Jaelani', '✔','✔', '✔', '✔', '✔', '✔', '✔', '✔', '✔'),
    createData('114','Zulvi Sugianto ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  ];


const Index = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell component="th">Nama</StyledTableCell>
            <StyledTableCell align="right">Apl</StyledTableCell>
            <StyledTableCell align="right">mei</StyledTableCell>
            <StyledTableCell align="right">jun</StyledTableCell>
            <StyledTableCell align="right">jul</StyledTableCell>
            <StyledTableCell align="right">ags</StyledTableCell>
            <StyledTableCell align="right">sep</StyledTableCell>
            <StyledTableCell align="right">okt</StyledTableCell>
            <StyledTableCell align="right">nov</StyledTableCell>
            <StyledTableCell align="right">des</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell component="th">{row.no}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.apr}</StyledTableCell>
              <StyledTableCell align="right">{row.mei}</StyledTableCell>
              <StyledTableCell align="right">{row.jun}</StyledTableCell>
              <StyledTableCell align="right">{row.jul}</StyledTableCell>
              <StyledTableCell align="right">{row.ags}</StyledTableCell>
              <StyledTableCell align="right">{row.sep}</StyledTableCell>
              <StyledTableCell align="right">{row.okt}</StyledTableCell>
              <StyledTableCell align="right">{row.nov}</StyledTableCell>
              <StyledTableCell align="right">{row.des}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Index;