import React from 'react'
import FromWeb from '.././AxiosCalls/FromWeb'

export default function Footer(){
    return(
        <footer className='foot'> 
        <FromWeb />
        <img className='imageresize' src='https://vignette.wikia.nocookie.net/sonic/images/e/e5/Sonic_Next_Gen.jpg/revision/latest?cb=20170702115006' alt='' />
        <img className='imageresize' src='https://s1.thcdn.com/productimg/600/600/11408895-1654532747637438.jpg' alt='' />
        <img className='imageresize' src='http://www.mobygames.com/images/covers/l/232070-the-elder-scrolls-v-skyrim-xbox-360-front-cover.jpg' alt='' />
        <img className='imageresize' src='http://www.mobygames.com/images/covers/l/132027-left-4-dead-windows-front-cover.jpg' alt='' />
        </footer>
    )
}