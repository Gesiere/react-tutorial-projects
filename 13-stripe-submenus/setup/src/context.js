import React, { useState, useContext, createContext } from 'react'
import { FaTemperatureHigh } from 'react-icons/fa';
import sublinks from './data'

const AppContext = React.createContext();


 export const AppProvider = ({ children }) => {
 
 const [isSidebarOpen,setIsSideBarOpen] = useState(false);
   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
   const [location, setLocation] = useState({});
const [page, setPage] = useState({page:'', links: []})

 const openSidebar = () => {
  setIsSideBarOpen(true)
 }

 const closeSiderbar = () => {
  setIsSideBarOpen(false)
 }

   const openSubmenu = (text, coordinates) => {
     const page = sublinks.find((link) => link.page === text);
     console.log(page);
     setPage(page)
   setLocation(coordinates)
  setIsSubmenuOpen(true)
 }

 const closeSubmenu = () => {
  setIsSubmenuOpen(false)
 }
 return <AppContext.Provider value={{
  isSubmenuOpen,
  isSidebarOpen,
  openSidebar,
  openSubmenu,
  closeSiderbar,
  closeSubmenu,
   location,
  page
 }}>
  {children} 
  </AppContext.Provider>
}


export const useGlobalContext = () => {
return useContext(AppContext)
}

