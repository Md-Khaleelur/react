import React from 'react';
import Content from './components/molecules/contactContent';
import Navigation from './components/organisms/Navigation';
import PageTemplate from './components/template/PageTemplate';

 
const Contact = () => {
    return (
      <PageTemplate
      header={ <Navigation/> }
      content={ <Content/> }
  />
    );
}
 
export default Contact;