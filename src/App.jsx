import React from 'react'
import './index.css'
import useDarkMode from './cusotmHooks/useDarkMode'
import { CgDarkMode } from "react-icons/cg";


const App = () => {

    const [DarkMode, setDarkMode] = useDarkMode()

  return (
    <div className='text-center font-bold text-12 p-12 h-[100vh] bg-[#fff] dark:bg-[#212121] transition-colors duration-300'>
       <button className='bg-[#fff] p-3 text-[#212121] dark:text-white flex gap-2 items-center dark:bg-[#212121] rounded-lg' onClick={() => setDarkMode(prev => !prev)}>
       <CgDarkMode size={30} />
        {DarkMode ? 'Disable Dark Mode': 'Enable Dark Mode'}
       </button>
    </div>
  )
}

export default App