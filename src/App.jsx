import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Article from './components/Article'
import Tablesection from './components/Tablesection'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App(){
  return(
    <>
      <Navbar/>
      <Header/>
      <Hero/>
      <div className='flex flex-col md:flex-row mx-auto p-12'>
        <main className='flex-grow'>
          <Article/>
          <Tablesection/>
        </main>
         <Aside/>
      </div>
      <Footer/>
    </>
  );

}

export default App;
