import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className=' footer-icons'>
            <img src="https://i.pinimg.com/736x/18/b4/17/18b417b69163caaf5aae3172db2d8cf1.jpg " alt=' facebook' />
            <img src="https://wallpapers.com/images/hd/instagram-black-background-750-x-1334-hf63aul0me46hho2.jpg" alt='instagram' />        
            <img src="https://e1.pxfuel.com/desktop-wallpaper/154/691/desktop-wallpaper-youtube-logo-icon-transparent-youtube-play-button.jpg " alt=' youtube'/>
        </div>
    <ul>
        <li>Audio Description </li>
        <li>Help Center </li>
        <li>Gift Cards </li>
        <li> Media Centre</li>
        <li>Investor Relation</li>
        <li>Jobs </li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice </li>
    </ul>
        <p className='copyright-text'> © 1997-2023 Netflix, Inc. </p>
    </div>
  )
}

export default Footer