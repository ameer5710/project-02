import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
const Nav = () => {
  return (
    <div className='flex gap-4 text-white bg-green-800'>
<Link href="\">Home</Link>
<Link href="\name">Name</Link>
<Link href="\name\contact">Contact-Me</Link>
    </div>
  )
}

export default Nav