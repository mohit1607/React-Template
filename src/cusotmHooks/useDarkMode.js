import React, { useEffect, useState } from 'react'

const useDarkMode = () => {
  
    const [DarkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        if (DarkMode == false) {
          setDarkMode('dark');
        } else {
          setDarkMode('light');
        }
    }

    useEffect(() => {
        if (DarkMode == true) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
    }, [DarkMode])

    return [DarkMode, setDarkMode]
}

export default useDarkMode