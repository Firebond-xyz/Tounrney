import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Wallet from '../../components/Wallet'
import Switch from '../../components/Switch'
const Main = () => {

  
  return (
    <div className=''>
      <Wallet />
      <Switch />
      <div className=''>


        <Link to='/create'><button>CREATE</button></Link>
        

        <Link to='/join'><button>JOIN</button></Link>
        
      </div>
    </div>
  )
}

export default Main
