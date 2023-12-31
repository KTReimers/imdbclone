import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SearchBox from '../components/SearchBox'
import Providers from './Providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB clone website',
  icons:{
    icon:'/favicon-16x16.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        {/* Header */}
        <Header/>
        {/* Navbar */}
        <NavBar />
        {/* SearchBox */}
        <SearchBox />
        {children}
        </Providers>
        </body>
    </html>
  )
}
