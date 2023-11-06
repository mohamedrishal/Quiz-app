import React from 'react'
import timeup1 from '../assets/gameover1.png'
import timeup2 from '../assets/gameover2.png'
import { Link } from 'react-router-dom'

function GameOver() {
  return (
    <div className='d-flex justify-content-center align-items-center h-100 flex-column container'>
       <img className='animate__animated animate__pulse' src={timeup1} alt="" />
       <img className='animate__animated animate__flipInX' src={timeup2} alt="" />
       <div>
        <Link to={'/'} className='text-decoration-none btn btn-primary'>
            Try Again
        </Link>
       </div>
    </div>
  )
}

export default GameOver