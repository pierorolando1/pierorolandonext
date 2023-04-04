import React from 'react'
import Link from "next/link"

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode 
}) => {
  return (
    <Link href={href} className='hover:bg-gray-800 text-gray-400 px-3 py-1 m-1 transition-all rounded-md'>{children}</Link>
  )
}

const Navbar = () => {
  return (
    <nav className='px-10'>
      <div className='flex flex-col items-center justify-center h-full'>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/blog'>Blog</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
