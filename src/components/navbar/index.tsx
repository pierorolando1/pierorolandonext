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
    <Link href={href} className='flex items-center justify-center hover:bg-gray-800 text-gray-400 px-3 py-1 m-1 transition-all rounded-md'>{children}</Link>
  )
}

const Navbar = () => {
  return (
    <nav className='sm:px-10 px-5 py-8 sm:py-0'>
      <div className='flex sm:flex-col flex-row items-center sm:justify-center justify-start h-full text-sm'>
        <NavLink href='/'>
          <svg className='w-5 mr-1' aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>Home</NavLink>
        <NavLink href='/blog'>
          <svg className='w-5 mr-1' aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        Blog</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
