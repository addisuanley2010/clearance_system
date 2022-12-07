import { Box, Button, Paper } from '@mui/material'
import React from 'react'

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
      </Paper>
     
    </Box>  )
}

export default RightNav