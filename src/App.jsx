import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import {Home, About, Contact, Gaming, ErrorPage, ProjectPage,} from './pages'

// import Sidebar from './components/sidebar/Sidebar'
// import ThemeTemplates from './components/ThemingTemplate/ThemeTemplates'
import { Sidebar , ThemeTemplates } from './components'
import './App.scss'

const App = () => {
  
  return ( 
  
    <BrowserRouter>
     <Sidebar />   
     <ThemeTemplates /> 
      <Routes>
        <Route index element= {<Home />} /> 
        <Route path='/' element= {<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        
      </Routes>
    </BrowserRouter>
 
  )
}

export default App