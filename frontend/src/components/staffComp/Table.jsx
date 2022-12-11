import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';


export default function StickyHeadTable() {

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
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
         <TableHead >
          <TableRow  >
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
            {rows.map((row,id) => (
          
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
              <TableCell align="right"><Button >change status</Button></TableCell>
            </TableRow>

          ) ) }
          </TableBody>
        </Table>
      </TableContainer>
    
    </Paper>
  );
}
