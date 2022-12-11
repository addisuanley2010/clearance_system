import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Button} from '@mui/material/';
import {  grey } from "@mui/material/colors";


const rows = [

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },
     { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },
     { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },
     { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },
     { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    },

    { 
    fname:"Abebe",
    mname:"aster",
    lname:"gezahagn",
    fileNo:"1",
    deps:"human",
    status:"pending"
        
    }
     

];

const StaffRequest=()=> {
    const background={
    backgroundColor: grey[400],
    
    }
  return (
    <TableContainer component={Paper}>
      <Table  sx={{ minWidth: 650,maxWidth: "90%" , marginTop:"30px" ,marginX:"4rem", border:1}} aria-label="simple table">
        <TableHead >
          <TableRow sx={background} >
            <TableCell >No</TableCell>
            <TableCell align="right">fname</TableCell>
            <TableCell align="right">mname</TableCell>
            <TableCell align="right">lname</TableCell>
            <TableCell align="right">fileNo</TableCell>
            <TableCell align="right">depSection</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="center">action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
          rows.map((row,id) => (
          
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {id+1}
              </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.mname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.fileNo}</TableCell>
               <TableCell align="right">{row.deps}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right"><Button sx={{background:grey[100]}}>change status</Button></TableCell>
            </TableRow>

          ) ) }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default StaffRequest