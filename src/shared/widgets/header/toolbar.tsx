import { Button } from '@nextui-org/react'
import React from 'react'
import Link from "next/link";


const ToolBar = () => {
  return (
<>
<Button color="primary" className='text-lg'>Start Trial</Button>
<Link href="/sign-in">Login</Link>
</>

    )
}

export default ToolBar