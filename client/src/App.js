import './App.css';
// import React, {Component} from 'react';
import Customer from './components/Customer';
// import Images0 from '/img/new-s-1.jpg';
// import Images1 from './img/new-s-2.jpg';
// import Images2 from './img/new-s-3.jpg';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";



const customers=[
  {
    'id':1,
    'image':'./img/new-s-1.jpg',
    'name':'이종원',
    'birthday':'961222',
    'gender':"남성",
    'job':"대학생"
  },
  {
    'id':2,
    'image':'./img/new-s-2.jpg',
    'name':'이성철',
    'birthday':'971222',
    'gender':"남성",
    'job':"대학생"
  },
  {
    'id':3,
    'image':'./img/new-s-3.jpg',
    'name':'김민숙',
    'birthday':'981222',
    'gender':"여성",
    'job':"대학생"
  }
]

function App() {
  return(
    <>
      {
        customers.map(c=>{
          return (
            <Paper>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>이미지</TableCell>
                  <TableCell>이름</TableCell>
                  <TableCell>생일</TableCell>
                  <TableCell>성별</TableCell>
                  <TableCell>직업</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Customer
                  key={c.id} 
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              </TableBody>
              </Table>
            </Paper>
            
              
              
          );
        })
      }
    
    </>
    
  )

  
}

export default App;

// {/* src import를 이용한 이미지 삽입 */}
// {/* <img src={Images0} alt="test"/> */}
// {/* public에 있는 img폴더 이미지를 삽입 */}
// {/* <img src='/img/new-s-1.jpg' alt=""></img> */}