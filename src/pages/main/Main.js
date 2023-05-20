import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Wallet from '../../components/Wallet'
const Main = () => {

  
  return (
    <div className=''>
      <Wallet />
      <div className=''>


        <Link to='/create'><button>CREATE</button></Link>
        

        <Link to='/join'><button>JOIN</button></Link>
        
      </div>
    </div>
  )
}

export default Main
