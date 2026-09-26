import React from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='bg-black h-screen '>
      <div className='h-[90%] flex'>
      <SideBar/>
      </div>
      <Player/>
    </div>
  )
}

export default App