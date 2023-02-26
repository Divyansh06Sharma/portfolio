import React, { useContext, createContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
   const [colorTheme, setColorTheme] = useState("dark-mode")
   const [istemplateopen, setIstemplateOpen] = useState(false)
   const [changeTemp, setChangeTemp] = useState("template-1")
 
   //  Light mode and dark mode functionality
   useEffect(() => {
      const currentTheme = localStorage.getItem('theme')
      setColorTheme(currentTheme)
   }, [])

   const handleTheme = (theme) => {
      setColorTheme(theme)
      localStorage.setItem('theme', theme)
   }
   //  Switch mode template functionality
   useEffect(() => {
      const currentTheme = localStorage.getItem("temp")
      setChangeTemp(currentTheme)
   }, [changeTemp])
   const handleTemp = (Theme) => {
      setChangeTemp(Theme)
     
      localStorage.setItem('temp', Theme)
   }

   const openTemplate = () => {
    

      setIstemplateOpen(true)
   }
   const closeTemplate = () => {
      setIstemplateOpen(false)
   }



   return <AppContext.Provider value={{
      openTemplate,
      closeTemplate,
      handleTemp,
      handleTheme,
      setIstemplateOpen,
      colorTheme,
      istemplateopen,
      changeTemp
   }}
   >
      <div className={`wrapper ${colorTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'}`}
         id={`${changeTemp}`} 
         >
         {children}
      </div>
   </AppContext.Provider >
}

const useGlobalContext = () => {
   return useContext(AppContext)
}

export { useGlobalContext, AppProvider }
