"use client"

import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {collection, getDocs} from 'firebase/firestore';
import SortBy from 'sort-by';
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


const Index = () => {
  
//handling fetch data
const [fetchData, setFetchData] = useState([]);

// create db
const dbref = collection(db, "onspot_l_lengkong");

// fetching data from database
useEffect(() =>{
  fetchdata()
},[])

//hendling fetch data function
const fetchdata = async() =>
{
  const getData = await getDocs(dbref) 
  const snap = getData.docs.map((doc) => ({id:doc.id, ...doc.data()}))
  snap.sort(SortBy('korwil','asc'));
  setFetchData(snap)
}
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
          {fetchData.map((data, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell align="left" className='number'>{i++}</StyledTableCell>
              <StyledTableCell component="th" scope="row" className='uppercase'>
                {data.anggota}
              </StyledTableCell>
              <StyledTableCell align="left">{data.korwil}</StyledTableCell>
              <StyledTableCell align="left">{data.nominal}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Index;