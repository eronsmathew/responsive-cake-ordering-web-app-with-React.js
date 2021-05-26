import React, {useState} from 'react';
import Navbar from '../Navbar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';
import Sidebar from '../Sidebar';

const Hero = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(
       <HeroContainer>
           <Navbar toggle={toggle} />
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <HeroContent>
               <HeroItems>
                   <HeroH1>Place An Order</HeroH1>
                   <HeroP>Ready In An Hour</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    )
}

export default Hero;