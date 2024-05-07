import { navItems } from '@/app/config/constants'
import Link from 'next/link'
import React from 'react'

const NavItems = () => {
  return (
    <div className='w-full hidden md:flex items-enter'>

      {navItems.map((i:NavItems,k:number)=>(
        <Link key = {k} href={"/"}  className="px-5 text-lg">{i.title}</Link>
      ))}
    </div>
  )
}

export default NavItems