import * as React from 'react'
import { Footer, Header } from '..'
import { Sidebar } from './SideBar'

export function Layout({ children }: any) {
  return (
    <>
      <Header />
      <Sidebar />
      <main id='main' className='main'>
        {children}
      </main>
      {/* End #main */}
      <Footer />
    </>
  )
}
