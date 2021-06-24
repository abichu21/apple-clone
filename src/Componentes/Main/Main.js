import React from 'react';
import AlertSection from '../AlertSection/AlertSection.js'
import Section1 from './Section1.js'
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js'
import Section6 from './Section6.js';
import Youtube from '../Youtube/Youtube';
// import News from '../News/News.js'

function Main() {
    return (
    <div>
         <AlertSection />
          <Section1 /> 
          <Section2 /> 
          <Section3 /> 
          <Section4 /> 
          <Section5 /> 
          <Section6 /> 
           <Youtube />
           {/* <News /> */}
    </div>
    )
}

export default Main;
