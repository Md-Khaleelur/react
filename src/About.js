import React from 'react';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';
import Content from './components/molecules/aboutContent/aboutContent';
 
const About = () => {
    return (
       <div>

        <PageTemplate
            header={ <Navigation/> }
            content={ <Content/> }
        />

       </div>
    );
}
 
export default About;