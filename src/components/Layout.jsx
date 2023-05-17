import React, { useState } from 'react'
import Nav from './Navigation/Nav'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const [theme, setTheme] = useState("dark");

    const handleThemeChange = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      document.body.setAttribute("data-theme", newTheme);
      setTheme(newTheme);
    };

  return (
    <div>
        <Nav theme={theme} handleThemeChange={handleThemeChange} />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout