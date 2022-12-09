import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <Stack>
      <Button variant='text'>
        Page Not Found
        </Button>
    <Button><Link to={"/"}>go home page</Link></Button>
    </Stack>
  )
}

export default PageNotFound