import { useState } from 'react'

import './App.css'
import { Button, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Typography color='text.secondary' variant='h1' align='center' sx={{ mt: 4 }}>
        Vite + React + MUI 
    </Typography>
    <Button color='primary' variant='contained' onClick={() => setCount((count) => count + 1)} sx={{ mt: 4 }}>
      count is {count}  
      
    </Button>
    </>
   
  )
}

export default App
