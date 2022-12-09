import { Box, Button, Divider, Paper, TextField } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const RightNav = () => {
  return (
<Box
       flex={1} 
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 230,
         minHeight:230
        },
      }}
    >
      <Paper elevation={10} >
        <Button variant="contained" sx={{
            width:"100%"
        }}> online users</Button>
        <Link>Total Vistors</Link>
       
<Divider sx={{
  minHeight:"5rem"
}}/>
         <Button variant="text" sx={{
            width:"100%"
        }}>User Feedback</Button>
        <TextField></TextField>
      </Paper>
     
    </Box>  )
}

export default RightNav