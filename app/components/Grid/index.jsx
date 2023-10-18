"use client"
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'No.', sortable: false, width: 50, },
  { field: 'name', headerName: 'Nama', width: 200 },
  { field: 'apr', headerName: 'April', width: 120, sortable: false },
  { field: 'mei', headerName: 'Mei', width: 120, sortable: false },
  { field: 'jun', headerName: 'Juni', width: 120, sortable: false },
  { field: 'jul', headerName: 'Juli', width: 120, sortable: false},
  { field: 'ags', headerName: 'Agustus', width: 120, sortable: false },
  { field: 'sep', headerName: 'September', width: 120, sortable: false },
  { field: 'okt', headerName: 'Oktober', width: 120, sortable: false },
  { field: 'nov', headerName: 'November', width: 120, sortable: false },
  { field: 'des', headerName: 'Desember', width: 120, sortable: false },
];

function createData(id, name, apr, mei, jun, jul, ags, sep, okt, nov, des) {
  return {id, name, apr, mei, jun, jul, ags, sep, okt, nov, des};
}
const rows = [
  createData('1', 'Aceng Wiandi', 'Success','Success', 'Success', 'Success', 'Success', '-', '-', '-', '-'),
  createData('2', 'Ade', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('3','Ade Hendra Suhendar', '-','-', '-', '-', '-','-', '-', '-', '-'),
  createData('4','Ade Rohmat Guntara', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('5','Adi Darmansyah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('6','Adi Pandu Haryadi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('7','Adiguna Pratama', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('8','Agus Anwar', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('9','Agus hendrayana', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('10','Agus Rosdiat (eyang)', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('11','Ahdan Hamdanilah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('12','Ahmad Mustopa', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('13','Ahmad Romdon ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('14','Ahmad zenal mutakin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('15','Ajang Nursodiq ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('16','Alsyahid Taufiq Hidayat', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('17','Amin Andika putra', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('18','Aming amiludin ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('19','Andri Herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('10','Arief rahman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('21','Arip Rahmat Hidayat ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('22','Awan Sudarwan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('23','Ayi Hilmi Abdillah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('24','Boni arsana', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('25','Candra heriyanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('26','Cuncun cundaya', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('27','Dani alfaz', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('28','Dani Rusmana', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('29','Dede Setiawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('30','Dede suherlin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('31','Dedi Suryadi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('32','Deni Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('33','Dian Candra Rosidin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('34','Didi herdiana ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('35','Dika Pratama', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('36','Dirman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('37','Dudi J', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('38','Dudi Rahmat', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('39','Egi sugitra ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('40','Eka Bayu Prakosa', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('41','Ellan Syafa-at', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('42','Encep riswanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('43','Enda', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('44','Engkos kostaman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('45','Fahrul Ashari', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('46','Fajar kusnandar', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('47','Fajar Nurfadilah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('48','Faqih (ade ridwan faqih)', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('49','Firman Hermansyah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('50','Gagan Garnawansah ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('52','Gilang Ramadhan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('53','H. Dede Irawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('54','Hadi Rahman Miraj', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('55','Hadianto', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('56','Handi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('57','Henra Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('58','Heri Purwagandhi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('59','Hermawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('60','Heru Purwganda', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('61','Iim Ruhimat', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('62','Iim saepul imam', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('63','Iman somantri ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('64','Indra haidir rahman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('65','Iqbal setiawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('66','Irfan Ghifari', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('67','Irfan Herfani', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('68','Itmamul wafa', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('69','Iwan Hediawan', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('70','Jajang Wahyudin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('71','Jehan Kartika', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('72','Jeje Zaenudin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('73','Jejen anggara', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('74','Julyana muharam', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('75','Kamaludin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('76','Kusnandar ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('77','Lupi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('78','Mandoyo sapto pribadi ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('79','Miftah Wijaya ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('80','Moch Al Hakim', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('81','Muhammad jalaludin A', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('82','Muhammad Yasin Gunawan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('83','Mulya mustakim', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('84','Nunung Nurjamil', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('85','Rani Intan Fandini', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('86','Rian muhamad handani', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('87','Ridho Riyadillah', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('88','Riki kharisma sandi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('89','Rizal Dimas ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('90','Rizal Mubarok', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('91','Rizki Maulana Saleh', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('92','Rizku Mauluddin', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('93','Rizky aji saputra', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('94','Rollin satria', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('95','Rutiman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('96','Shendi Gunawan ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('97','Sidik pauzi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('98','Sofyan saori', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('99','Sulaeman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('100','Sutrisno', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('101','Syaefuloh', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('102','TB indra Haryyanto', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('103','Toni Hidayat', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('104','Trisna gusviana', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('105','U Yadi Setiadi', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('106','Ujang Maman', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('107','Ujang muhamad yusuf', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('108','Yogi Apriandi Yogaswara', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('109','Yopi Insani', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('110','Yusup bahtiar', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('111','Yusup Jaelani', '-','-', '-', '-', '-', '-', '-', '-','-'),
  createData('112','Zulvi Sugianto ', '-','-', '-', '-', '-', '-', '-', '-','-'),
  
];

export default function GridKas() {
  return (
    <div style={{ height: 500, width: "100%" }} className="bg-color-yellow font-semibold"> 
      <DataGrid className="bg-gradient-to-r from-gray-300 to-gray-300 font-extrabold font-3xl w-auto"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50]}
        sx={{
          boxShadow: 2,
          border: 2,
          '& .MuiDataGrid-columnHeader': {
           backgroundColor: "#d97706",
           color: "black",
           fontWeight: 700,
          },
        }}
        disableColumnMenu
      />
   </div>
  );
}