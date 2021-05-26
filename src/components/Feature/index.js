import React from 'react';
import {FeatureContainer, FeatureButton} from  './FeatureElements';

const Feature = () =>{
   return(
       <FeatureContainer>
           <h1>Cake of the day</h1>
           <p>Get this amazing treat and i bet you wont taste any less</p>
           <FeatureButton>Order Now</FeatureButton>
       </FeatureContainer>
   )
}

export default Feature;