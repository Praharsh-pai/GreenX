import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
const Navbar = () => {
    var count = 0;
    
    const OpenMenu = ()=>{
        var menu = document.getElementById('listOpen');
        if(count==0){
            menu.style.left="0";
            count=1;
        }
        else if(count==1){
            menu.style.left="-100%";
            count=0;
        }
    }

  return (
    <>
        <nav>
            <label className='logo'>Green<span style={{color:'red'}}>X</span></label>
            <ul id='listOpen'>
                <li><Link href='/'>Home</Link></li>
                <li><a href='#'> Products </a></li>
                <li><a href='#'> Categories </a></li>
                <li><Link href='/Register/Register'>Login/Signup</Link></li>
            </ul>
            <label id='icon' onClick={OpenMenu}>
                <MenuIcon/>
            </label>
        </nav>
    </>
  )
}

export default Navbar