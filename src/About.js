import React from 'react';

import Content from './components/molecules/aboutContent';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';
 
const About = () => {
    return (
   <PageTemplate
      header={ <Navigation/> }
      content={ <Content/> }
  />
    );
}
 
export default About;