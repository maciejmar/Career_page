import React from 'react'
import Menu from '../Menu/Menu'
import "./../../main.scss"
import imageSrc from './../../public/images/adaforpage.png'

export default function PersonalSite() {
    return(

        <div className = "flexbox-container">
           <div className = "flexbox-item left-up-menu">   
                <Menu title='My jobs'/>
            </div>        
                
            <div className = "flexbox-item intro">
                Welcome on Ada Marosz site!
            </div>
            <div className = "flexbox-item image">
                <img className = "flexbox-item img" src = {imageSrc} alt="Ada"/>
            </div>
            <div className ="flexbox-item portfolio">portfolio portfolio</div>
            <button className = "flexbox-item menu" >MENU</button>
          
            
        </div>
        
    )

}